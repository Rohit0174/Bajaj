const express = require("express");
const app = express();
const env = require("dotenv")
env.config()

app.use(express.json());

app.post("/bfhl",(req, res) => {

    var data = req.body;
    var num = [];
    var alpha = [];
    for (let i = 0; i < data["data"].length; i++) {
        if(isNaN(data["data"][i])){
            alpha.push(data["data"][i]);
        }else{
            num.push(data["data"][i])
        }
    }

    //["A","1","334","B","8"]

    try {
        res.status(200).json({
                "is_success": true,
                "user_id":"rohit_maheshwari_20062001",
                "email":"rohit0174.cse19@chitkara.edu.in",
                "roll_number":"1910990174",
                "numbers":num,
                "alphabets":alpha
        });
      } catch (error) {
        res.status(500).json({
            "is_success":false
        });
      }
})

app.listen(process.env.port||8000, () => {
  console.log("Backed Is Conected");
});
