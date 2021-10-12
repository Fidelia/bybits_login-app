function getUserAccount() {
  return axios.get("https://api.bybits.co.uk/auth/token");
  console.log(response);
}

function getUserPermissions() {
  return axios.get("https://api.bybits.co.uk/policys/details");
}

Promise.all([getUserAccount(), getUserPermissions()]).then(function (results) {
  const acct = results[0];
  const perm = results[1];
});
