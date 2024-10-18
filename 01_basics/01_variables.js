const accountId = 123456;
let accountEmail = "someone@email.com";
var accountPassword = "password";

console.table([accountId, accountEmail, accountPassword]);

/*
┌─────────┬─────────────────────┐
│ (index) │ Values              │
├─────────┼─────────────────────┤
│ 0       │ 123456              │
│ 1       │ 'someone@email.com' │
│ 2       │ 'password'          │
└─────────┴─────────────────────┘
*/

//Assignment to constant variable.
// accountId = 654321;
accountEmail = "second@email.com";
accountPassword = "newPassword";

console.log(accountId);
console.table([accountId, accountEmail, accountPassword]);

/*
┌─────────┬────────────────────┐
│ (index) │ Values             │
├─────────┼────────────────────┤
│ 0       │ 123456             │
│ 1       │ 'second@email.com' │
│ 2       │ 'newPassword'      │
└─────────┴────────────────────┘
*/