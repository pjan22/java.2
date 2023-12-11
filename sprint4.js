                        // Podstawy funkcji w JavaScript //
  
        //Podstawy funkcji//

//1. napisz funcje dodającą dwie liczby. //
 
    let x = 4
    let y = 6
    
    let z = x + y
        console.log(z)

// 2. Napisz funkcję sprawdzającą długość tablicy.//

    let dayOfMyWeek = [ 'Monday', 'Thuesday', 'WEdnesday',]
     let numbersOfDays = dayOfMyWeek.length
            console.log(numbersOfDays)

// 3. Napisz funkcję sprawdzającą czy liczba jest parzysta.//

  let entry = 5;

        if (entry % 2===0){
            console.log ('Liczba jest parzysta')
        }else {
            console.log('Liczba jest nieparzysta')}
   
// 4. Napisz funkcję opliczającą pole kwadratu.//
            let a = 6
             let p = a*a
             console.log(p)

// 5. Napisz funkcję zwracającą odwrotność liczby.//
                let q = 3
                let g = 1/q
                console.log(g)

//6. Napisz funkcję konwertującą stopnie Celcjusza na Fahrenheita.//

            let degreesCelsjus= 11 
            let degreesFahrenheit = (degreesCelsjus*2 ) +30
                    console.log(degreesFahrenheit)

//7. Napisz funkcję zwracającą pierwszy element tablicy.//

            const family = [ ' Mama', 'Tata', 'Kasia' ,'Tomek']
                    console.log(family.at(0));

// 8. Napisz funkcję łączącą dwa ciagi znaków, utwórz warunek, ktory sprawdzi  czy argumenty są typu string.//
    
                   const word=  'Pada '
                   const words= "śnieg"

                const string = words.concat(words)
                 console.log (result)
                 
                 function checckChanges (word, words){
                    if (typeof words!== ' string' && typeof words !== 'string'){ 
                        console.log('Zmienne są stringiem')} ;
                        return;
                 }


//9.Napisz funkcję zwracającą typ zmiennej, //
            function type(variable){
                return typeOf 
            } console.log()
            
//10. Napisz funkcję zwracającą absolutną wartość liczby.//
                const box1 = -3;
                const box2= Math.abs(box1)
                    console.log(box2)

                        //PODSTAWY PĘTLI.//

// 1. Napisz funkcję z pętlą for, która wyświetli liczby od 1 do 10.//

            for( let i =0; i < 10; i++){
                console.log(i)}

//2. Napisz funkcję ,która będzie używać pętli while do wyświetlenia liczb parzystych mniejszych od 20.//

            let package = 0 
                while ( package %2==0){
                 console.log(package);
                 package ++
                }
// 3. Napisz funkcję, która użyję petli do...while do wyswietlenia liczb od 10 do 1. 

    function doWhile(consols){
         do {consols.log(consols)
            consols --;
         } while (consols >0)}

 //4. Napisz funkcję, która uzyje pętli while i break do przerwania pętli po osiągnięciu liczzby 5.//
        let r = 0
        while (r>0){ r++;
            console.log(r);
        } if (r=5) {
            break
        }

//5. Napisz funkcję, któa użyje pętłi for.. in do iteracji po właściwościach obiektu. //

        const bestMovie={
            first: 'Avatar',
            second : 'Titanic',
            third: 'Parasite'

        }; for (number in bestMovie){
            console.log ( 'The $(number)best movie is $(bestMovie[number])')
        }
// 6. Napisz funkcję for...of do iteracji po elementach tablicy.//

        const gifts= [ 'doll', 'bear', ' car', ' money'];

        const giftsFundator = () => {
              for (let  toys of gifts){
                    console.log(toys)
        }
              
                };
        giftsFundator (); 
//7. Napisz funkcję, któa użyje pętłi for do obliczania sumy elementów tablicy.//

                const ageOfMembers= [13,15,18];
                for (let num of ageOfMembers);
                 if(num= ageOfMembers[0]+ageOfMembers[1]+ageOfMembers[2]){
                    console.log(num)
                }
//8. Napisz fukcję, która uzyję petli while do odwrócenia ciągu znaków. //
                
                const txt= 'Jest zimno';
                    console.log (txt.split('Jest zimno'))
                    let reverseTxt= txt.reverseTx
                        console.log(reverseTxt)
                
// 9/Napisz funkcję która uzyje pętli for do znalezienia największej liczby w tablicy.//

                const arrayOfNumbers = [2,-4,5,-6, 9,-10]
                    let max= arrayOfNumbers[0];
                for (i=0; i<arrayOfNumbers.length; i++){
                    if (arrayOfNumbers[i] >max){
                    max=arrayOfNumbers[i]
                        }
                } console.log(max)

//  10.  Napisz funkcję, która użyje pętli for in do wyświetlenia par klucz-wartość tablicy obiektów //
            
                    let car = {
                        make: 'Germany',
                        model: "Mercedes 190",
                        year : 1987,
                        }

                       function findKey (car){
                        for (const key in car){
                            console.log( "the ${key} is in car" )
                        }
                       }


                            // PODSTAWOWE METODY NA TABLICACH //

//1. Napisz funkcję, która doda element na koniec tablicy używając metody push. 

                        const orange = ['Belladonna', ,'Cherry Orange','Gardner' ]
                        const newOrange= 'Joppa'
                       
                       
             const orangePush = (newOrange)=>{
                            orange.push(newOrange);
                            return orange;
                        }
                        let mod = orangePush('Joppa')
                         console.log( mod)
                
        

// 2. Napisz funkcję, któa usunie ostatni element tablicy używając medoty pop. 

                            const orangeOrange =['Belladonna', ,'Cherry Orange','Gardner', 'Joppa']

                                const orangeOrangepop=  (lastOrange)=>{

                                orangeOrange.pop(lastOrange);
                                return orangeOrange;
                             } ;
                              let set = orangeOrangepop ('Joppa')

                             console.log(set)

//3. Napisz funkcję ktora usunie pierwszy element tablicy używając metody shitf. //

                                const apple = [ 'Delikates', ' Kosztela', 'Ligol' ]

                                   const appleMinus= (firstApple) => {

                                        apple.shift(firstApple);
                                        return apple; 
                                   }
                                 let final= appleMinus (' Delikates')
                                  console.log( final)

// 4. Napisz funkcję, która doda element na początek tablicy używając metody unshitf. //

                                const appleTree = ['Kosztela','Ligol' ]

                                const appleApple = (newApple)=>{
                                    appleTree.unshift(newApple);
                                    return appleTree;

                                } 
                                let eat = appleApple ('Koral')
                                console.log ( eat)

// 5. Napisz funkcję, która użyje metody push aby dodwać dwa elementy na koniec tablicy. //


                                    const  plum = [' President', 'Stanley', 'Amers']

                                    const plumPush = (newPlums) => {
                                        plum.push(newPlums);
                                        return plum ;
                                    }
                                    let sweet = plumPush ('Bluefree', 'Empress')
                                    console.log(sweet)


// 6. Napisz funkcję, która uzyje metody pop aby usunąc dwa ostatnie elementy z tablicy. //
                        
            const plumPop = [' President', 'Stanley', 'Amers','Bluefree', 'Empress']                    
                                
             const plumPopDouble = () => {
                    for (i=0; i<2; i++) {
                        plumPop.pop();
                    }
                     return plumPop;   
             } ;
                    let plumPopDoubleF= plumPopDouble();
                    console.log (plumPopDoubleF)

// 7. Napisz funkcję, która dwukrotnie uźyje metody shift aby usunąć dwa pierwsze elementy. //

                        const days =[ 'monday', 'thuesday', 'wednesday', 'thursday', 'friday']
                               
                                   
                        const dayOff =() => {
                           days.shift()
                           console.log(days);
                           days.shift();
                           return days;
                        
                        } ; let dayShift = dayOff();
                              console.log (dayShift)

// 8. Napisz funkcję, która dwukrotnie uzyje metody unshitf aby dodwać elementy na początek tablicy. 

                                const names = [ 'Kasia', 'Tomek', 'Alicja']

                                const namesPlus= () => {
                                    names.unshift(element1) 
                                    console.log(names);
                                    names.unshift(element2);
                                    return names
                                };
                                    let element1= 'Mateusz'
                                    let element2 = 'Monika'

                                    let nameDoubleUnshitf = namesPlus()
                                    console.log(nameDoubleUnshitf)

// 9. Napisz funkcję, która użyje metody push do dodania elementu, a następnie metody pop do usunięcia elementu z tablicy


                            const weather = ['rain','snow', 'wind'] 
                            
                             const weatherFunction = () => {
                                weather.push('storm')
                                console.log (weather);
                                weather.pop ();
                                return weather;

                             }; 
                             let results = weatherFunction()
                             console.log(results)


//10. Napisz funkcję, która użyje metody unshift do dodania elementu, a następnie metody shift do usunięcia elementu z tablicy


                                const direction  = [ 'physics', 'mathematics', 'plastyka ','physical education']

                                const directionSecond= () => {
                                    direction.unshift('Chemistry');
                                    console.log(direction);
                                    direction.shift();
                                    return direction
                                } 
                                let directionMore= directionSecond()
                                 console.log (directionMore)


//11. Napisz funkcję która przy użyciu metody map zwięszy kazdy element o 1. 


                                const number = [ 1,4,6,7,8,9]

                                 const numberOne = number.map( number=> number +1)
                              
                                    console.log (numberOne)

// 12. Napisz funkcję, ktora przy użyciu metody filter zwróci tylko parzyste liczby. 


                        const numbersArray = [ 3,5,6,7,9,12,16,21,24]

                        const numbersArrayFiltr= numbersArray.filter (numbersArray => numbersArray % 2===0);
                        
                                 console.log (numbersArrayFiltr)
                      
//13. Napisz funkcję, która przy użyciu metody map podwoi każdy element tablicy. 



                                 const grades = [ 65, 78, 93 ,30 ]


                                const gradesDouble= grades.map( grades => grades *2 ); 
                                 console.log(gradesDouble)

//14. Napisz funkcję, która przy użyciu metody filter zwróci elementy tablicy większe niż 10.

                                const  acreage =[ 13, 5, 8, 10, 23, 15, 4];
                                  
                                const acreageFiltr= acreage.filter( acreage => acreage >10 )
                                 console.log( acreageFiltr)


  // 15.  Napisz funkcję, która przy użyciu metody split podzieli podany ciąg znaków na słowa .    
  
  
           const text = 'Każdego dnia słońce wschodzi i zachodzi '
            

            const textSplit = text.split (' ')
             console.log(textSplit)

//16. Napisz funkcję, która przy użyciu metody map zamieni każdy element tablicy na jego długość.


            const textLeng = ["Każdego", "dnia", "słońce", "wschodzi", "i" ,"zachodzi"]

              const textLengMap = textLeng.map ( textLeng => textLeng.length)

                                console.log(textLengMap)

//17.  Napisz funkcję, która przy użyciu metody filter zwróci tylko nieparzyste liczby z tablicy.

           const element = [7, 4, 6, 8, 1, 8, 3]

            const elementOdd = element.filter( element => element % 2 !==0 )

             console.log(elementOdd)

//18. Napisz funkcję, która przy użyciu metody map zwróci kwadraty kaźdego elementu tablicy. 
                                    
                    const force = [7, 4, 6, 8, 1, 8, 3]

                    const  square = force.map(force => force*force)
                        console.log(square)

//19. Napisz funkcje, która za pomocą metody filter zwróci tylko te słowa z ciągu znaków, które mają więcej niż 3 litery. 

                            const flowers =  ['Lily', 'Ivy', 'Jasmine','Amarylis']

                            const flowersSelection = flowers.filter(flowers=> flowers.length > 3)

                            console.log( flowersSelection)

//20. Napisz funkcję, która przy uzyciu metody map zwróci każdy element tablicy zapisany wielkimi literami. 


                                const flowersArray =  ['Lily', 'Ivy', 'Jasmine','Amarylis']

                 const flowersArrayLetters = flowersArray.map(flowersArray => flowersArray.toUpperCase())
                                console.log(flowersArrayLetters) 
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////