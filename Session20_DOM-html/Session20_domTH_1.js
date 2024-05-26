// const container = document.getElementById('list');
// for (let i = 0; i <= 3; i++) {
//     container.insertAdjacentHTML("beforeBegin", `<li>${i}</li>`);
// }
// for (let i = 0; i <= 3; i++) {
//     container.insertAdjacentHTML("afterBegin", `<li>${i}</li>`);
// }
// for (let i = 0; i <= 3; i++) {
//     container.insertAdjacentHTML("beforeEnd", `<li>${i}</li>`);
// }
// for (let i = 0; i <= 3; i++) {
//     container.insertAdjacentHTML("afterend", `<li>${i}</li>`);
// }


// //Thay vì sử dụng setTimeOut để tạo ra một timer, ta có thể sử dụng setInterval để code có thể ngắn hơn
// setTimeout(function () {
//     console.log('heeHaa');
// }, 1000); //chỉ chạy 1 lần

// setInterval(function () {
//     console.log('heeHaa');
// }, 1000); // chạy nhiều lần

// setInterval(function () {
//     const color = Math.floor(Math.random() * 899999 + 100000);
//     document.getElementById('color').style.color = `${color}`;
// }, 2000)

// //Sử dụng getElementsByTagName lấy toàn bộ thẻ <li>. Sau đó in (log) phần tử đầu tiên (<li>Articles</li>).
// // Sau đó sử dụng for loop để in toàn bộ các phần tử có trong collection <li> lấy được.

// const list = document.querySelectorAll('.li');
// console.log(list[1].innerHTML);

// //Sử dụng getElementsByTagName lấy toàn bộ thẻ <li>.
// //Sau đó in (log) phần tử đầu tiên (<div class=”singer”>Nate Ruess</div>).
// //Sau đó sử dụng for loop để in toàn bộ các phần tử có trong collection <div> lấy được.

// const singer = document.querySelectorAll('.singer');
// console.log(singer[0].innerHTML);

// for (let i = 0; i < singer.length; i++) {
//     console.log(singer[i].innerHTML);
// }

// // /Học các xoá (Delete) một HTMLElement sử dụng HTMLElement.remove(), link

// const Delete = document.querySelector('.singer');
// Delete.remove();


//Bắt sự kiện ‘click’ từ 2 nút khác nhau có id=”button1” và id=”button2”, ở trong body của 2 hàm callback, log ra thuộc tính e.target.
//Thuộc tính này có ý nghĩa như thế nào?

// const button1 = document.getElementById('button1');
// const button2 = document.getElementById('button2');

// button1.addEventListener('click', function (e) {
//     console.log(e.target);// In ra phần tử đã được click (myButton)
// });
// button2.addEventListener('click', function (e) {
//     console.log(e.target);// In ra phần tử đã được click (myButton)
// });


//Bắt sự kiện ‘keydown’ từ thẻ input, ở trong body hàm callback,
//log ra thuộc tính e.key. Thuộc tính này có ý nghĩa như thế nào?

// const input = document.querySelector('#input');
// input.addEventListener('keydown', function (e) {
//     console.log(e.key);// In ra phần tử đã được click (myButton)
// });

//Viết một function, sử dụng alert để in ra tên bạn và
//điều bạn muốn ước trong năm nay

// function myFunction() {
//     alert('My name is Son');
//     alert('I want to be a programmer');
// }
// myFunction();

//Viết một function, sử dụng alert để in ra name của người dùng và wish của người dùng trong năm nay,
//name và wish là parameters của function

// function myFunction(name, wish) {
//     alert('My name is ' + name);
//     alert('I want to be a ' + wish);
// }

// myFunction('Son', 'programmer');

