


// 1. Write a TypeScript program to list the properties of a TypeScript object
// var student = {
// name : "David Rayy",
// sclass : "VI",
// rollno : 12 };
// Sample Output: name,sclass,rollno
function stu(s:string){
    var student={
        nAme:"David Rayy",
        sclass:"VI",
        rollno:12 };
      let x=""
      for(let i in student){
        x=x+student[i]+" " 
      }
      console.log(x);
     }
    // stu('s');
    
    // 2. Write a TypeScript program to delete the rollno property from the following object. Also print the object before or after deleting the property.
    // Sample object:
    // var student = {
    // name : "David Rayy",
    // sclass : "VI",
    // rollno : 12 };
    
    function stu1(D:string){
    let student1 = {
    name : "David Rayy",
    sclass : "VI",
    rollno : 12 };
    
    let s=" "
    for(let i in student1){
        s= s+student1[i]+" ";
    }
    
    console.log("Before delete roll no: ", s )
    
    delete student1['rollno'];
    console.log( "After Deletion " ,student1);
    }
    // stu1('d');
    
    // 3. Write a TypeScript program to get the length of a TypeScript object.   
    // Sample object :
    // var student = {
    // name : "David Rayy",
    // sclass : "VI",
    // rollno : 12 };
    
    
    function stu2(le:number){
    var student2 = {
    name : "David Rayy",
    sclass : "VI",
    rollno : 12 };
    
    let h=" "
    for(let i in  student2){
        h=h+student2[i]+" "
    }
    let len:number=Object.keys(student2).length
    console.log(len);
    }
    // stu2(2);
    
    
    // 4. Write a TypeScript program to display the reading status (i.e. display book name, author name and reading status) of the following books.   
    
    // var library = [ 
    //    {
    //        author: 'Bill Gates',
    //        title: 'The Road Ahead',
    //        readingStatus: true
    //    },
    //    {
    //        author: 'Steve Jobs',
    //        title: 'Walter Isaacson',
    //        readingStatus: true
    //    },
    //    {
    //        author: 'Suzanne Collins',
    //        title:  'Mockingjay: The Final Book of The Hunger Games', 
    //        readingStatus: false
    //    }];
    
    function lib(lib:string){
    var library = [ 
           {
               author: 'Bill Gates',
               title: 'The Road Ahead',
               readingStatus: true
           },
           {
               author: 'Steve Jobs',
               title: 'Walter Isaacson',
               readingStatus: true
           },
           {
               author: 'Suzanne Collins',
               title:  'Mockingjay: The Final Book of The Hunger Games', 
               readingStatus: false
           }];
          
         
       for (let i=0; i<library.length; i++){
        let b=library[i].title + " written By " + library[i].author
        if(library[i].readingStatus==true){
            console.log(`Already read : ${b}`);
            
        }else{
            console.log(`Still not read : ${b}`);
        }
    
       }
    }
    // lib('a');
       
     
    
    // 5. Write a TypeScript program to get the volume of a Cylinder with four decimal places using object classes.   
    // Volume of a cylinder : V = πr2h
    // where r is the radius and h is the height of the cylinder.
    
     class  cyln{
        height:number;
        diameter:number;
    
        constructor (height:number, diameter:number)
        {
            this.height=height
            this.diameter=diameter;
            // console.log(this.diameter)
        }
        cylander(){
        var r=this.diameter/2;
        var h=this.height;
        console.log( "Volume of cylander is :", h * Math.PI * r*r);
        
       }
    }
    
    var cyl= new cyln(7,4)
    // cyl.cylander()
    
    
    
    // 6. Write a Bubble Sort algorithm in TypeScript.   
    // Note : Bubble sort is a simple sorting algorithm that works by repeatedly stepping through the list to be sorted,
    // Sample Data: [6,4,0, 3,-2,1]
    // Expected Output : [-2, 0, 1, 3, 4, 6]
    
     function bblSort(arr){
    
        
        for(var i = 0; i < arr.length; i++){
            
        for(var j = 0; j < ( arr.length - i -1 ); j++){
    
            if(arr[j] > arr[j+1]){
            var temp = arr[j]
            arr[j] = arr[j + 1]
            arr[j+1] = temp
            }
            console.log(arr)
        }
        }
        console.log(arr);
        }
        var arr = [6,4,0, 3,-2,1];
        // bblSort(arr);
    
    
    // 7. Write a TypeScript program which returns a subset of a string.   
    // Sample Data: dog
    // Expected Output: ["d", "do", "dog", "o", "og", "g"]
    
    var subs=()=>{
        let str:string='dog'
        for(var i=0; i<1; i++){
        var qp:string[] = [str.substring(1,0),str.substring(0,2),str.substring(0,3),str.substring(1,2),str.substring(1,3),str.substring(2,3)]
        console.log(qp)
    }
       }  
    // subs()
    
    
    
    
    
    // 8. Write a TypeScript program to create a Clock.   
    // Note: The output will come every second.
    // Expected Console Output :
    // "14:37:42"
    // "14:37:43"
    // "14:37:44"
    // "14:37:45"
    // "14:37:46"
    // "14:37:47"
     
    
    function my_Clock() 
      {
      this.cur_date = new Date();
      this.hours = this.cur_date.getHours();
      this.minutes = this.cur_date.getMinutes();
      this.seconds = this.cur_date.getSeconds();
      }
    my_Clock.prototype.run = function ()
      {
      setInterval(this.update.bind(this), 1000);
      };
    my_Clock.prototype.update = function () 
      {
      this.updateTime(1);
      console.log(this.hours + ":" + this.minutes + ":" + this.seconds);
      };
    my_Clock.prototype.updateTime = function (secs) 
      {
      this.seconds+= secs;
     if (this.seconds >= 60)
      {
      this.minutes++;
      this.seconds= 0;
      }
     if (this.minutes >= 60)
      {
      this.hours++;
      this.minutes=0;
      }
    if (this.hours >= 24)
      {
      this.hours = 0;
      }
    };
    var clock = new my_Clock();
    //   clock.run();
    
    
    // 9. Write a TypeScript program to calculate the area and perimeter of a circle.   
    // Note : Create two methods to calculate the area and perimeter. The radius of the circle will be supplied by the user.
    
    
    
    class circle{
        radius:number;
    
        constructor(radius){
            this.radius=radius;
        }
    
        area():void{
            let r=2*Math.PI*this.radius*this.radius;
            console.log(r)
        }
    
        perameter():void{
            let pera=2*Math.PI*this.radius;
            console.log(pera);
            
        }
    
    }
    
    let cir=new circle(2);
    // cir.area();
    // cir.perameter();
    
    
    // 10. Write a TypeScript program to sort an array of TypeScript objects.   
    // Sample Object :
    
    // var library = [ 
    //    {
    //        title:  'The Road Ahead',
    //        author: 'Bill Gates',
    //        libraryID: 1254
    //    },
    //    {
    //        title: 'Walter Isaacson',
    //        author: 'Steve Jobs',
    //        libraryID: 4264
    //    },
    //    {
    //        title: 'Mockingjay: The Final Book of The Hunger Games',
    //        author: 'Suzanne Collins',
    //        libraryID: 3245
    //    }];
    // Expected Output:
    
    // [[object Object] {
    //   author: "Walter Isaacson",
    //   libraryID: 4264,
    //   title: "Steve Jobs"
    // }, [object Object] {
    //   author: "Suzanne Collins",
    //   libraryID: 3245,
    //   title: "Mockingjay: The Final Book of The Hunger Games"
    // }, [object Object] {
    //   author: "The Road Ahead",
    //   libraryID: 1254,
    //   title: "Bill Gates"
    // }]
    
    
    function none(){
    var library = [ 
       {
           title:  'The Road Ahead',
           author: 'Bill Gates',
           libraryID: 1254
       },
       {
           title: 'Walter Isaacson',
           author: 'Steve Jobs',
           libraryID: 4264
       },
       {
           title: 'Mockingjay: The Final Book of The Hunger Games',
           author: 'Suzanne Collins',
           libraryID: 3245
       }];
    
       var army = [library];
      
       for (var i = 0; i < 1; i++) {
         console.log(army);
       }
    }
    // none()
       
    
    
    
    
    // 11. Write a TypeScript function to print all the methods in an TypeScript object.   
    // Test Data :
    // console.log(all_properties(Array));
    // ["length", "name", "arguments", "caller", "prototype", "isArray", "observe", "unobserve"]
    
    
    let no=()=>{
    var worker = {
        ame: 'Worker',
        price: 10,
        ammount: 0,
        award: 0,
        //award : 5/11,
        time: 1000,
        defense: 10,
        attack: 5
      }
       
     console.log(Object.getOwnPropertyNames(worker).length,Object.getPrototypeOf(worker),Object.getOwnPropertyDescriptors(worker))
         
      }
    
    no()
    
    
    // 12. Write a TypeScript function to parse an URL. 
    
    let now=()=>{
    const url:object = new URL('https://www.fiverr.com/mkiachannel?up_rollout=true')
    console.log(url)
    }
    // now()
    
    
    
    
       
    // 13. Write a TypeScript function to retrieve all the names of object's own and inherited properties.
    
    let prop=()=>{
    let nAme={
     fname:'qaisar',
     lname:'nadeem',
     age:21
      
    }
    
     let arr="";
     for(let i in nAme){
      arr=arr+nAme[i]+"  "
    
     }
    
     console.log(Object.getOwnPropertyNames(nAme))
    console.log(arr)
    }
    // prop();
    
    
    // 14. Write a TypeScript function to retrieve all the values of an object's properties.
    
    let prop1=()=>{
      let nAme={
       fname:'qaisar',
       lname:'nadeem',
       age:21
        
      }
      
       let arr="";
       for(let i in nAme){
        arr=arr+nAme[i]+"  "
      
       }
      
      
      console.log(arr.valueOf())
      }
      // prop1();
    
    
    // 15. Write a TypeScript function to convert an object into a list of `[key, value]` pairs. 
    
    
    let func=()=>{
      let list={
        fName:"Ali",
        lname:"Ahmad",
        age:"20"
      }
    
      
      let ke:object= new Object(list)
    
      console.log(ke)
    }
    // func()
    
    // 16. Write a TypeScript function to get a copy of the object where the keys have become the values and the values the keys.   
    
    
    
    
    
    // 17. Write a TypeScript function to check whether an object contains given property.   
    
    
    let fun=()=>{
      let list={
        fName:"Ali",
        lname:"Ahmad",
        age:"20"
      }
    
      
      let ke= list.hasOwnProperty("fName")
    
      console.log(ke)
    }
    // fun()