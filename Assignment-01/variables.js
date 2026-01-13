window.onload = function() {


    const submitBtn = document.getElementById("submit");
    if(submitBtn) {
        submitBtn.onclick = function() {

            // full_name
            const full_name = document.getElementById("fullName").value.trim();

            // age
            const age = document.getElementById("age").value.trim();

            // hobby
            const hobby = document.getElementById("hobby").value.trim();

            // address
            const address = document.getElementById("address").value.trim();
            let address_part = address.split(",").map(item => item.trim());
            while(address_part.length < 3) address_part.push(""); 

            // student status
            const is_student = document.querySelector('input[name="status"]:checked')?.value;

            if(!is_student) {
                alert("Please select Yes or No for student status");
                return;
            }

            // save to localStorage
            localStorage.setItem("full_name", full_name);
            localStorage.setItem("age", age);
            localStorage.setItem("hobby", hobby);
            localStorage.setItem("address_part", JSON.stringify(address_part)); // save array
            localStorage.setItem("is_student", is_student);

            // console log inside click
            console.log("Full Name:", full_name);
            console.log("Age:", age);
            console.log("Hobby:", hobby);
            console.log("Address saved:", address_part);
            console.log("Student status:", is_student);

            // go to result page
            window.location.href = "result.html";
        };
    }

    // result.html: show data
    const full_name = localStorage.getItem("full_name") || "User";
    const age = Number(localStorage.getItem("age")) || "N/A";
    const hobby = localStorage.getItem("hobby") || "N/A";
    const address_part = JSON.parse(localStorage.getItem("address_part") || '["", "", ""]');
    const [streetValue, cityValue, countryValue] = address_part;
    const is_student = localStorage.getItem("is_student") || "N/A";
    const is_student_bool = is_student === "yes";

    // elements
    const wlcm = document.getElementById("wlcm");
    const ageEl = document.getElementById("Age");
    const ageAfter5El = document.getElementById("ageAfter5");
    const hobbyEl = document.getElementById("hobbyDisplay");
    const streetEl = document.getElementById("street");
    const cityEl = document.getElementById("city");
    const countryEl = document.getElementById("country");
    const studentStatusEl = document.getElementById("studentStatus");

    // set content
    if(wlcm) wlcm.textContent = `${full_name} 😎`;
    if(ageEl) ageEl.textContent = `${age}`;
    if(ageAfter5El) ageAfter5El.textContent = `${age + 5}`;
    if(hobbyEl) hobbyEl.textContent = `${hobby}`;
    if(streetEl) streetEl.textContent = `${streetValue}`;
    if(cityEl) cityEl.textContent = `${cityValue}`;
    if(countryEl) countryEl.textContent = `${countryValue}`;
    if(studentStatusEl) studentStatusEl.textContent = `${is_student}`;

    // console logs
console.log("Full Name:", full_name, "| Type:", typeof full_name);
console.log("Age:", age, "| Type:", typeof age);
console.log("Age after 5 years:", age + 5, "| Type:", typeof (age + 5));
console.log("Hobby:", hobby, "| Type:", typeof hobby);
console.log("Address array from localStorage:", address_part, "| Type:", typeof address_part);
console.log("Student status as Boolean:", is_student_bool, "| Type:", typeof is_student_bool);

};
