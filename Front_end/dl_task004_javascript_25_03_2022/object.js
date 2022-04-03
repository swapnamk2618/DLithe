//create empty objetename  user add propry name,sname,change name propery value,remove sir property(task1)//
let user = { uname: "swapna", sname: "kochrekar" };
user.uname = "hello";
user.sname = "";
user.uname = "hello";
delete user.sname;
for (let name in user) {
  console.log(user[name]);
}
