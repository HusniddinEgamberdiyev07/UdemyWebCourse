**Callstack**

Interpreter to keep track of its place in a script that calls multiple functions — what function is currently being run and what functions are called from within that function, etc.

**Js is single threaded**

**Promises**

It is an object. It represents failure or success of an asynronous operation.
It can be pending, resolved and rejected.

.then(callback) -> resolved
.catch(callback) -> rejected

**async**

Returns a promise automatically. When we return something promise will be resolved.
When we get an error or throw an error promise will be rejected.

**await**

Waits till promise resolved