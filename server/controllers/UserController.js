
const { hash, compare, encodeToken } = require("../helpers/helper");
const { User, Vehicle, Rent, sequelize,Log } = require("../models");
const fs = require("fs");
const excelJs = require("exceljs");
const { Sequelize } = require("sequelize");
class UserController {
    static async register(req, response) {
        try {
            let { username, password, departement } = req.body;
            console.log(username, password, departement)
            if (!username || !password  || !departement) {
                throw { required: "All input is Required" }
            }
            const user = await User.create({
                username,
                password: hash(password),
                role: 'Admin',

                departement
            });

            const log = await Log.create({
                title: "Register",
                description: 'Add User',
                updatedBy: req.user.username,

            })

            response.status(201).json({ id: user.id, username: user.username, role: user.role, name: user.name, departement: user.departement });
        } catch (error) {
            console.log(error);
            if (error.name === "SequelizeValidationError") {
                response.status(400).json(error.errors[0].message);
            } else if (error.required) {
                response.status(400).json(error);
            } else if (error.name === "SequelizeUniqueConstraintError") {
                response.status(400).json(error.errors[0].message);
            } else {
                response.status(500).json(error.message);
            }
        }
    }
    static async login(req, response) {
        try {
            const { username, password } = req.body;

            if (!username || !password) {
                throw {
                    name: "required",
                };
            }
            let user = await User.findOne({
                where: {
                    username: username,
                },
            });
            if (!user) {
                throw {
                    name: "Invalid Login",
                };
            }
            let compareResult = compare(password, user.password);
            if (!compareResult) {
                throw {
                    name: "Invalid Login",
                };
            } else {
                const { id, username, role, departement } = user;
                let access_token = encodeToken({
                    id,
                    username,
                    role,
                    departement
                });
                response.status(200).json({
                    access_token
                });
            }
        } catch (err) {
            console.log(err);
            response.status(401).json(err)
        }
    }
    static async addVehicle(req, response) {
        try {
            const { name, type, category, bbmConsume, serviceDate } = req.body;
            if (!name || !type || !category || !bbmConsume || !serviceDate) {
                throw { required: "All input is required" }
            }
            const vehicle = await Vehicle.create({
                name,
                type,
                category,
                bbmConsume,
                serviceDate
            })
            const log = await Log.create({
                title: 'Vehicle',
                description: 'Add Vehicle',
                updatedBy: req.user.username,

            })
            response.status(201).json(vehicle);
        } catch (error) {
            console.log(error);
            if (error.required) {
                response.status(400).json(error);
            } else {

                response.status(500).json("Internal Server Error");
            }
        }
    }
    static async getVehicle(req, response) {
        try {
            const vehicle = await Vehicle.findAll();
            response.status(200).json(vehicle);
        } catch (error) {
            console.log(error);
            response.status(500).json("Internal Server Error");
        }
    }
    static async detailVehicle(req, response) {
        try {
            const { id } = req.params;
            const vehicle = await Vehicle.findOne({
                where: {
                    id
                }
            })
            response.status(200).json(vehicle);
        } catch (error) {
            response.status(500).json("Internal Server Error");
        }
    }
    static async editVehicle(req, response) {
        try {
            const { id } = req.params;
            const { name, type, category, bbmConsume, serviceDate } = req.body;
            console.log(name, type, category, bbmConsume, serviceDate)
            if (!name || !type || !category || !bbmConsume || !serviceDate) {
                throw { required: "All input is required" }
            }
            const vehicle = await Vehicle.update({
                name,
                type,
                category,
                bbmConsume,
                serviceDate
            }, {
                where: {
                    id
                }
            })

            const log = await Log.create({
                title: "Vehicle",
                description: 'Edit Vehicle',
                updatedBy: req.user.username,

            })
            response.status(200).json({ msg: "Success Edit Vehicle" });
        } catch (error) {
            console.log(error);
            if (error.required) {
                response.status(400).json(error);
            } else {
                response.status(500).json("Internal Server Error");
            }
        }
    }
    static async deleteVehicle(req, response) {
        try {
            const { id } = req.params;
            const vehicle = await Vehicle.destroy({
                where: {
                    id
                }
            })
            const log = await Log.create({
                title: "Vehicle",
                description: 'Delete Vehicle',
                updatedBy: req.user.username,

            })
            response.status(200).json({ msg: "Success Delete Vehicle" });
        } catch (error) {
            console.log(error);
            response.status(500).json("Internal Server Error");
        }
    }
    static async addRent(req, response) {
        try {
            const { VehicleId, driver, loanDeadline, loanDate } = req.body;
            console.log(VehicleId, driver, loanDeadline, loanDate, "ini rent")

            if (!VehicleId || !loanDeadline || !driver || !loanDate) {

                throw { required: "All input is required" }
            }
            const rent = await Rent.create({
                VehicleId,
                UserId: req.user.id,
                driver,
                status: "Waiting approval Kantor Cabang",
                loanDeadline,
                loanDate
            })

            const log = await Log.create({
                title: "Rent",
                description: 'Request New Rent',
                updatedBy: req.user.username,

            })
            response.status(201).json(rent);
        } catch (error) {
            console.log(error);
            if (error.required) {
                response.status(400).json(error);
            } else {
                response.status(500).json("Internal Server Error");
            }
        }
    }


    //requestAtasanKantorCabang
    static async requestRent(req, response) {
        try {
            if (req.user.departement === "Kantor Cabang") {
                let rent = await Rent.findAll({
                    include: Vehicle,
                    where: {
                        status: "Waiting approval Kantor Cabang"
                    }
                })
                response.status(200).json({ rent: rent, user: req.user.departement });
            } else if (req.user.departement === "Kantor Pusat") {
                let rent = await Rent.findAll({
                    include: Vehicle,
                    where: {
                        status: "Waiting approval Kantor Pusat"
                    }
                })
                response.status(200).json({ rent: rent, user: req.user.departement });
            } else {
                let rent = await Rent.findAll({
                    include: Vehicle,
                })


                response.status(200).json({ rent: rent, user: req.user.departement });
            }
        } catch (error) {
            console.log(error);
            response.status(500).json("Internal Server Error");
        }
    }
    static async acceptRequestKantorCabang(req, response) {
        try {
            const { id } = req.params;
            if (req.user.departement === "Kantor Cabang") {

                const check = await Rent.findOne({
                    where: {
                        id
                    }
                })
                if (check.status !== "Waiting approval Kantor Cabang") {
                    throw { msg: "Request has been accepted, Waiting Kantor Pusat To Accept" }
                }
                const rent = await Rent.update({
                    status: "Waiting approval Kantor Pusat"
                }, {
                    where: {
                        id
                    }
                })
                const log = await Log.create({
                    title: "Rent ",
                    description: 'Accept Request Kantor Cabang',
                    updatedBy: req.user.username,
    
                })
                response.status(200).json({ msg: "Success Accept Request" });
            } else if(req.user.departement=== "Kantor Pusat"){
                const check = await Rent.findOne({
                    where: {
                        id
                    }
                })
                if (check.status !== "Waiting approval Kantor Pusat") {
                    throw { msg: "Request has been accepted" }
                }
                const rent = await Rent.update({
                    status: "Accepted"
                }, {
                    where: {
                        id
                    }
                })
                const log = await Log.create({
                    title: "Rent",
                    description: 'Accept Request Kantor Pusat',
                    updatedBy: req.user.username,
    
                })
                response.status(200).json({ msg: "Success Accept Request" });
            }
        } catch (error) {
            if (error.msg) {
                response.status(400).json(error);
            } else {
                response.status(500).json("Internal Server Error");
            }
        }
    }
    static async rejectRequest(req, response) {
        try {
            const { id } = req.params;
            const rent = await Rent.update({
                status: "Rejected"
            }, {
                where: {
                    id
                }
            })
            const log = await Log.create({
                title: "Rent",
                description: 'Reject Request',
                updatedBy: req.user.username,

            })
            response.status(200).json({ msg: "Success Reject Request" });
        } catch (error) {
            response.status(500).json("Internal Server Error");
        }
    }

    //requestAtasanKantorPusat
    static async requestRentKantorPusat(req, response) {
        try {
            const rent = await Rent.findAll({
                include: [Vehicle],
                where: {
                    status: "Waiting approval Kantor Pusat"
                }
            })

            
            response.status(200).json(rent);
        } catch (error) {
            console.log(error);
            response.status(500).json("Internal Server Error");
        }
    }

    static async acceptRequestKantorPusat(req, response) {
        try {
            const { id } = req.params;
            const rent = await Rent.update({
                status: "Accepted"
            }, {
                where: {
                    id
                }
            })
            response.status(200).json({ msg: "Success Accept Request" });
        } catch (error) {
            response.status(500).json("Internal Server Error");
        }
    }

    static async rentHistory(req, response) {
        try {
            const rent = await Rent.findAll({
                include: Vehicle
            })
            response.status(200).json(rent)
        } catch (error) {
            response.status(500).json("Internal Server Error");
        }
    }

    static async downloadReport(req, response) {
        try {
            console.log("masuk")
            let workbook = new excelJs.Workbook();
            let worksheet = workbook.addWorksheet("Rent History");
            worksheet.columns = [

                { header: "Vehicle", key: "vehicle", width: 30 },
                { header: "Type", key: "type", width: 30 },
                { header: "Category", key: "category", width: 30 },
                { header: "Driver", key: "driver", width: 30 },
                { header: "BBM Consume", key: "bbmConsume", width: 30 },
                { header: "Loan Date", key: "loanDate", width: 30 },
                { header: "Loan Deadline", key: "loanDeadline", width: 30 },
                { header: "Status", key: "status", width: 60 },
            ]
            const rent = await Rent.findAll({
                include: [User, Vehicle]
            })
            let data = [];
            rent.forEach(el => {
                const tanggal = (objectDate) => {
                    objectDate = new Date(objectDate);
                    let day = objectDate.getDate();
                    let month = objectDate.getMonth();
                    let year = objectDate.getFullYear();
                    if (day < 10) {
                        day = '0' + day;
                    }
                    if (month < 10) {
                        month = `0${month}`;
                    }
                    let date = `${day}/${month}/${year}`
                    return date
                }

                data.push({
                    vehicle: el.Vehicle.name,
                    driver: el.driver,
                    type: el.Vehicle.type,
                    category: el.Vehicle.category,
                    bbmConsume: `${el.Vehicle.bbmConsume} Km/Liter`,
                    loanDeadline: tanggal(el.loanDeadline),
                    loanDate: tanggal(el.loanDate),
                    status: el.status
                })
            }
            )
            worksheet.addRows(data);
            response.setHeader(
                "Content-Type",
                "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
            );
            response.setHeader(
                "Content-Disposition",
                "attachment; filename=" + "RentHistory.xlsx"
            );
            workbook.xlsx.write(response)
        } catch (error) {
            console.log(error)
        }
    }

    static async graph(req, response) {
        try {
           const data = await Rent.findAll({
                attributes: [
                  [sequelize.fn('COUNT', sequelize.col('VehicleId')), 'count'],
                  [sequelize.col('Vehicle.name'), 'name'],
                  'status'
                ],
                include: [
                  { 
                    model: Vehicle,
                    attributes: []
                  }
                ],
                where: {
                  status: 'Accepted'
                },
                group: ['Vehicle.name', 'status']
              });
              console.log(data.name)
            response.status(200).json(data)
        } catch (error) {
            console.log(error)
            response.status(500).json("Internal Server Error");
        }
    }

    static async getLog(req,response){
        try {
            const log = await Log.findAll({
                order: [
                    ['updatedAt', 'DESC']
                ]
            })
            response.status(200).json(log)
        } catch (error) {
            console.log(error)
            response.status(500).json("Internal Server Error");
        }
    }
}

module.exports = UserController;