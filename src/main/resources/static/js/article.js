const delBtn = document.getElementById("delete-btn");


if (delBtn) {
    delBtn.addEventListener("click", event => {
        let id = document.getElementById("article-id").value;
        fetch(`api/articles/${id}`, {
            method: 'DELETE',
        }).then(() => {
            alert("삭제가 완료되었습니다.")
            location.replace("/articles");

        });

    });
}

// 수정

let modifyBtn = document.getElementById("modify-btn");

if (modifyBtn) {
    modifyBtn.addEventListener('click', event => {
        let params = new URLSearchParams(location.search);
        let id = params.get("id");

        fetch(`api/articles/${id}`, {
            method: 'PUT',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                title: document.getElementById("title").value,
                content: document.getElementById("content").value,
            })
        }).then(() => {
            alert("수정이 완료되었습니다.")
            location.replace(`/articles/${id}`);

        });
    });
}

//등록 기능
const createBtn = document.getElementById('create-btn');

if (createBtn) {
    createBtn.addEventListener('click', event => {
        fetch("/api/articles", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                title: document.getElementById("title").value,
                content: document.getElementById("content").value,
            })
        }).then(() => {
            alert("등록 완료되었습니다.")
            location.replace('/articles');

        });
    })
}

function findUser(id) {
    const user ={
        id:id,
        name:id+"@test.com",
    }

    return user;
}

const user = findUser(1);
console.log(user)