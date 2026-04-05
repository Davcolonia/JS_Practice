function users(names, role){
const test_user = [];
for(i in names){
    const userName = names[i].toLowerCase().replaceAll(" ", "_");
 test_user.push({
      username: username,
      email: username + "@playwrightbatch.com",
      role: roles[i]
    });
  }

  return test_user;
}
