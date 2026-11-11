  // area of a triangle
        function show(){
            const b=document.getElementById('base').value
            const h=document.getElementById('height').value
            const areaOfTriangle= 0.5 * b * h
            const displayArea=document.getElementById('display')
            displayArea.innerHTML=areaOfTriangle
            document.getElementById('base').value=''
            document.getElementById('height').value=''
        }
        
        //area of square
        function show1(){
             const l=document.getElementById('lenght').value
             const areaOfSquare= l*l
            const displayArea1=document.getElementById('display1')
            displayArea1.innerHTML=areaOfSquare
            document.getElementById('lenght').value=''
        }
        
        
        
        // area of a circle
        function show2(){
             const pie = 3.12
             const r = document.getElementById('radius').value
             const areaOfcircle= pie*(r**2)
            const displayArea2=document.getElementById('display2')
            displayArea2.innerHTML=areaOfcircle
            document.getElementById('radius').value=''
        }

        //area of quadilateral
        function show3(){
            const d1=document.getElementById('d1').value
            const d2=document.getElementById('d2').value
            const sin45=0.707
            const areaOfQuadilateral=0.5 * d1 * d2 * sin45
            const displayArea3=document.getElementById('display3')
            displayArea3.innerHTML=areaOfQuadilateral
            document.getElementById('d1').value=''
            document.getElementById('d2').value=''
        }
    


        //area of rhombus
         function show4(){
            const a1=document.getElementById('a1').value
            const a2=document.getElementById('a2').value
            const areaOfRhombus=0.5 * a1 * a2
            const displayArea4=document.getElementById('display4')
            displayArea4.innerHTML=areaOfRhombus
            document.getElementById('a1').value=''
            document.getElementById('a2').value=''
        }

      
        // area of trapezium
         function show5(){
            const d=document.getElementById('d').value
            const c=document.getElementById('c').value
             const h1=document.getElementById('c').value
            const areaOfTrapezium=0.5 * (d + c) * h1
            const displayArea5=document.getElementById('display5')
            displayArea5.innerHTML=areaOfTrapezium
            document.getElementById('d').value=''
            document.getElementById('c').value=''
            document.getElementById('h1').value=''
        }

        // area of parallelogram
         function show6(){
            const s=document.getElementById('s').value
            const h3=document.getElementById('h3').value
            const areaOfParallelogram= s * h3
            const displayArea6=document.getElementById('display6')
            displayArea6.innerHTML=areaOfParallelogram
            document.getElementById('s').value=''
            document.getElementById('h3').value=''
        }
        
        //BMI

        
        function show7(){
             const weightInKg=document.getElementById('weightinkg').value
             const heigthInMeter= document.getElementById('heightinmeter').value
             const BMI = weightInKg/(heigthInMeter)**2
            const displayArea7=document.getElementById('display7')
            displayArea7.innerHTML=BMI
            document.getElementById('weightinkg').value=''
            document.getElementById('heightinmeter').value=''
        }