//rong JS, tạo một biến có tên là items để lưu trữ toàn bộ data ở phía trên, 
//log ra trong màn hình console biến đó

const items = document.getElementsByTagName('li');
const List = document.getElementById('list');
for (let i = 0; i < items.length; i++) {
    console.log(items[i]);
}
console.log(List);

// /Xóa các items test ở trong HTML

for (let i = 0; i < items.length; i++) {
    items[i].remove();
}

//Cập nhật lại HTML theo UI sau:

for (let i = 0; i < items.length; i++) {
    items[i].innerHTML = i + 1;
}

//Lấy ra thẻ ‘New item’ input và thẻ ‘Add’ button

