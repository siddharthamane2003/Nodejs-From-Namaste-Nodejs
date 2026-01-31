Scema Validation

// require firname , emailid , unique email id
// add the photo , skils , decripation fileds  skills in []
// desciption add defLU VALUE OF ABOUT
// also deafault url in photo
// convert email id in lowercaes
// trime() -> spces as then in emailId
// minlength =4 of firsname  =>it willl min 4 max greter than or equal's to
// maxlength =10 in string   => Upto 10 equl to 10
// min: 9 , max - 10 in number as age  max -> upto 10 and min => greter than 9
// costom validation fn
// if the not gender is male , female , other then thrie error.
// we have to enble the validtion fn in patch api  , post api
// we have to know about the date timsspance in patch api
// we have to enble the validtion fn in patch api  , post api
// we have to know about the date timsspance in patch api
// api validaton only defied user are allowed
// the validtor extetion that cheoing for the email id , phot url , password vlaidtor

let UserShcema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true, // Madirtloy requre the firaname and emailId
    },
    lastName: {
      type: String,
    },
    emailId: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },
    password: {
      type: String,
      trim: true,
      minlength: 4,
      unique: true,
    },
    age: {
      type: Number,
      max: 30,
    },
    gender: {
      // In the validatetion it will run in get , fecth but not the patch we have to call the fn in runvalidators.
      type: String,
      lowercase: true,
      validate(value) {
        if (!["male", "female", "other"].includes(value)) {
          throw new Error("Gender Is Not Valid");
        }
      },
    },
    // add the photo , skills , about
    photo: {
      type: String,
      default: "https://i.postimg.cc/abcd1234/photo.jpg",
    },
    skills: {
      type: [String],
      value: ["java", "JavaScript", "React"],
    },
    // the about is defalut value DEFALUT VALUE.
    about: {
      type: String,
      default: "These Is Your Profile",
    },
  },

  { timestamps: true },
);

Api Validation
- only defined the user in below then if are trifyinf add new data into datrabse it will not allowed/

- ex-> Eamil id must not update its not vlaidte not upodate agin.

try {
    let ALLOWED_USER = [
      "firstName",
      "password",
      "age",
      "skills",
      "photo",
      "about",
      "userid",
      "lastName",
    ];
    // it Object.keys takes the postman data and then loop throw it we are only allow user that in ALLOWED_USER only.
    // else we give the erro must be retrun the user.
    
    let isAllowed = Object.keys(data).every((k) => {
      return ALLOWED_USER.includes(k);
    });

    if (!isAllowed) {
      throw new Error("Update Cannot Allowed!");
    }


- do not upadte the id but we have to get the user id with help of Parms.
let userid = req.params?.userid;
http://localhost:2010/user/696ef42d513afeccabac91a5

-  skills must not be gerter than 10

-  if(data.skills.length<10){
      throw new Error("Cannot Update Skills more Than 10")
    }

- install validtor
- with is libary for the valisation as email id , photp url
 emailId: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
      validate(vale) {
        if (!validtor.isEmail(vale)) {
          throw new Error("Email is not Validate");
        }
      },
    },