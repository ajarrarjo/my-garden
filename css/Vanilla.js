const Student=function (id,email,phone,tuition)
{
    this.id=id;
    this.name=email.split('@')[0];  
    this.email=email;
    this.phone=phone;
    this.tuition=tuition;
    this.age=this.randomAge(18,24);
    Student.all.push(this);  

};



Student.all=[]


//prototype is fixed , Student same with name of constructor ,addStudent any name you want
Student.prototype.addStudent=function()
{    
     localStorage.setItem('data',JSON.stringify(Student.all));
};

Student.prototype.randomAge=function(max,min)
{
    return Math.floor( Math.random() * (max - min + 1) + min)
};



let handelSubmit=function(event)
{
   
    event.preventDefault();

    let newEntry=new Student(Student.all.length+1,document.getElementById('email').value,
    document.getElementById('phone').value, document.getElementById('tuition').value);


    newEntry.addStudent();
    
    renderFunction();
};


let renderFunction=function()
{
    if(localStorage.data)
    {
     
        body.innerHTML='';
        for (let index = 0; index < JSON.parse(localStorage.data).length; index++) {
            
            let trTag=document.createElement('tr');

           
            let tdTagID=document.createElement('td');
            tdTagID.textContent=Student.all[index].id;
trTag.appendChild(tdTagID);



let tdTagIDname=document.createElement('td');
tdTagIDname.textContent=Student.all[index].name;
trTag.appendChild(tdTagIDname);



            let tdTagemail=document.createElement('td');
            tdTagemail.textContent=Student.all[index].email;
            trTag.appendChild(tdTagemail);


       

            let tdTagphone=document.createElement('td');
            tdTagphone.textContent=Student.all[index].phone;
            trTag.appendChild(tdTagphone);

            let tdTagage=document.createElement('td');
            tdTagage.textContent=Student.all[index].age;
            trTag.appendChild(tdTagage);


            let tdTagIDtuition=document.createElement('td');
            tdTagIDtuition.textContent=Student.all[index].tuition;
            trTag.appendChild(tdTagIDtuition);



            body.appendChild(trTag);

   


        }

 

    }
}

let addLocalStorageToArray=function () {
    if(localStorage.data)
    {
        for (let index = 0; index < JSON.parse(localStorage.data).length; index++) {
            console.log(JSON.parse(localStorage.data)[0])
          Student.all.push(JSON.parse(localStorage.data)[index]);

     
            
        }
    }
}




let body=document.getElementById('body');


let form=document.getElementById('form');//DOM
    form.addEventListener('submit',handelSubmit);

    addLocalStorageToArray();
    renderFunction();



  

