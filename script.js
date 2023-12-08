const validateEmail = (email) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};


function validatePhoneNumber(input_str) {
  var re = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;

  return re.test(input_str);
}

const form = document.getElementById("form");
const names = document.getElementById("name");
const thankyou = document.getElementById("thankyou");
const email = document.getElementById("email");
const telephone=document.getElementById("tele");
const Message=document.getElementById("Message");
let isformvaild = false;

form.addEventListener('submit', (e) => {
  e.preventDefault();
  checkInputs();
  if (isformvaild) {
    form.remove();
    thankyou.classList.remove("hidden")
  }
})
const resetElm = (elm) => {
  elm.classList.remove('name')
  elm.nextElementSibling.classList.add('hidden')
  elm.classList.add('success')
  
};

const invalidateElm = (elm) => {
  elm.classList.add('name')
  elm.nextElementSibling.classList.remove('hidden')
}


const checkInputs = () => {
  isformvaild = true;
  resetElm(names);
  resetElm(email);
  resetElm(telephone);
  resetElm(Message)



  if (!names.value) {
    invalidateElm(names)
    isformvaild = false;
  }


  if (!validateEmail(email.value)) {
    invalidateElm(email)
    isformvaild = false;
  }

  if(!validatePhoneNumber(telephone.value)){
    invalidateElm(telephone)
    isformvaild=false;
  }
  
  if (!Message.value) {
    invalidateElm(Message)
    isformvaild = false;
  }
 

}
names.addEventListener('input', () => {
  checkInputs();
})
email.addEventListener('input', () => {
  checkInputs();
})
telephone.addEventListener('input', () => {
  checkInputs();
})
Message.addEventListener('input', () => {
  checkInputs();
})