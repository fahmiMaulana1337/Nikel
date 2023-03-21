
const { decodeToken } = require("../helpers/helper");
const { User,Rent } = require("../models/index");

const authentication = async (req, response, next) => {
  try {
    const { access_token } = req.headers;
    if (!access_token) {
      throw {
        name: "InvalidToken",
      };
    }

    const data = decodeToken(access_token);
    const user = await User.findOne({
      where: {
        id: data.id,
      },
    });

    if (!user) {
      throw {
        name: "InvalidToken",
      };
    }

    req.user = user;
    next();
  } catch (err) {
    console.log(err);
   response.status(401).json(err)
  }
};



const authorizationCabang = async (req, response, next) => {
  try {   
    if (req.user.role !== "Manager"){
        console.log(req.user.departement,req.user.role !== "Manager" && req.user.departement!=="Kantor Cabang")
       if(req.user.departement!=="Kantor Cabang" ) {
          throw {
            name: "Forbidden",
          };
      } 
    
    }
    next();
  } catch (err) {
    console.log(err)
    response.status(403).json(err)
  }
};
const authorizationPusat = async (req, response, next) => {
  try {
      if (req.user.role !== "Manager" && req.user.departement!=="Kantor Pusat" ) {
        throw {
          name: "Forbidden",
        };
    }
    next();
  } catch (err) {
    response.status(403).json(err)
  }
};





module.exports = {
  authentication,
  authorizationCabang,
  authorizationPusat
};
