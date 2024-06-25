const date = new Date()
console.log(date)

    const formattedDate = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
console.log(formattedDate);

document.querySelector(".date").textContent = formattedDate;