function A(length) {
    console.time();
    for (let index = 0; index < length; index++) {}
    console.log(
     console.timeEnd());
}

function B() {
}

function C() {
}

A(109000999);
B(109000999);
C(109000999);

