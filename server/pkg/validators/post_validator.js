const { Validator } = require("node-input-validator");

const createSchema = {
  title: "required|minLength:8|maxLength:40",
   desc: "required|minLength:20|maxLength:1000",
  price: "integer|between:1,100000000",
  purpose: "required",
  realEstateType: "required",
  "specs": "object",
  "specs.bedrooms": "integer|between:1,10",
  "specs.baths": "integer|between:1,10",
  "specs.area": "integer|between:1,10000",
  "specs.balcony": "integer|between:1,10",
  "specs.parking": "required|boolean",
  "location":"required|object",
  "location.city":"required|minLength:4|maxLength:15",
  "location.settlement":"minLength:4|maxLength:20",
  "location.street":"minLength:4|maxLength:20",
  "location.streetNumber":"minLength:1|maxLength:10",
  "mapLocation":"object",
  "mapLocation.lat":"decimal",
  "mapLocation.lng":"decimal",
  contactNumber:"required|integer|minLength:6|maxLength:15",
  user:"required" 
};


const customMessagesCreate = {
    required:"полето е задолжително",
    "title.minLength":"минимум карактери - 8",
    "title.maxLength":"максимум карактери - 40",
    "desc.minLength":"минимум карактери - 20",
    "desc.maxLength":"максимум карактери - 1000",
    integer:"може да содржи само број",
    "price.between":"дозволен број 1-100000000",
    "specs.bedrooms.between": "дозволен број 1-10",
    "specs.baths.between": "дозволен број 1-10",
    "specs.area.between": "дозволен број 1-10000",
    "specs.balcony.between": "дозволен број 1-10",
    "specs.parking":"изберете да/не",
    "location.city.minLength":"минимум карактери - 4",
    "location.city.maxLength":"максимум карактери - 20",
    "location.settlement.minLength":"минимум карактери - 4",
    "location.settlement.maxLength":"максимум карактери - 20",
    "location.street.minLength":"минимум карактери - 4",
    "location.street.maxLength":"максимум карактери - 20",
    "location.streetNumber.minLength":"минимум карактери - 1",
    "location.streetNumber.maxLength":"максимум карактери - 10",
    "contactNumber.minLength":"минимум карактери - 6",
    "contactNumber.maxLength":"максимум карактери - 15",
}

const uploadImgSchema = {
    "images":"required|array",
    "images.*":"object",
    "images.*.imgUrl":"required|string",
    "images.*.publicId":"required|string",
}


const validate = async(data,schema,)=>{

    let sch
    let msg

    switch (schema) {
        case "CREATE":
            sch = createSchema;
            msg = customMessagesCreate;
            break;
    
        case "IMG_INSERT":
            sch = uploadImgSchema;
            break

        default:
            break;
    }

    let v = new Validator(data,sch,msg)
    let match = await v.check()
    if(!match){
        throw v.errors
    }
}

module.exports = validate