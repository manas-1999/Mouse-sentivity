const guessing=document.getElementById("guessing");
var h5=guessing.querySelector('#guessing .header');
var a_to_z=guessing.querySelector('.a-to-z');
var wordhead_h5=guessing.querySelectorAll('.word-head h5');
var guess_box=guessing.querySelector('.guess-box');
var chances_left=guessing.querySelector('.left p');
var pig_word=guessing.querySelectorAll('.pig-word .pig');
var timesection=guessing.querySelector('.time-section .time');
var current_minute=0;
var current_second=0;
var my_interval;
var a_to_z_h4;
let html='';
let change_html='';
let current_movie='';
var movie_count=0;
var current_cut=-1;
var jasoos=-1;

var a_z=[
    {
        name2:'a'
    },
    {
        name2:'b'
    },
    {
        name2:'c'
    },
    {
        name2:'d'
    },
    {
        name2:'e'
    },
    {
        name2:'f'
    },
    {
        name2:'g'
    },
    {
        name2:'h'
    },
    {
        name2:'i'
    },
    {
        name2:'j'
    },
    {
        name2:'k'
    },
    {
        name2:'l'
    },
    {
        name2:'m'
    },
    {
        name2:'n'
    },
    {
        name2:'o'
    },
    {
        name2:'p'
    },
    {
        name2:'q'
    },
    {
        name2:'r'
    },
    {
        name2:'s'
    },
    {
        name2:'t'
    },
    {
        name2:'u'
    },
    {
        name2:'v'
    },
    {
        name2:'w'
    },
    {
        name2:'y'
    },
    {
        name2:'z'
    },
]
for(var j=0;j<a_z.length;j++)
{
    change_html+=`<h4 class="abcd" onclick=(i_am_change(${j}))> ${a_z[j].name2.toUpperCase()}</h4>`
}
a_to_z.innerHTML=change_html;
var movies=[
    {
        movie_name:'koi mil gya'
    },
    {
        movie_name:'dhadkan'
    },
    {
        movie_name:'ramleela'
    },
    {
        movie_name:'shershah'
    },
    {
        movie_name:'udta punjab'
    },
    {
        movie_name:'Bajirao Mastani'
    },
    {
        movie_name:'Dream Girl'
    },
    {
        movie_name:'Dhadkan'
    },
    {
        movie_name:'Tere naam'
    },
    {
        movie_name:'Sanju'
    },
    {
        movie_name:'Tiger zinda hai'
    },
    {
        movie_name:'Ek Tha tiger'
    },
    {
        movie_name:'Phantom'
    },
    {
        movie_name:'Padmavati'
    },
    {
        movie_name:'Bajrangi Bhaijaan'
    },
    {
        movie_name:'Bang bang'
    },
    {
        movie_name:'Ungli'
    },
    {
        movie_name:'Sultan'
    },
    {
        movie_name:'Trapped'
    },
    {
        movie_name:'Toilet Ek Prem Katha'
    },
    {
        movie_name:'Ek villian'
    },
    {
        movie_name:'Abcd2'
    },
    {
        movie_name:'Stree'
    },
    {
        movie_name:'Bhoot police'
    },
    {
        movie_name:'Son of sardar'
    },
    {
        movie_name:'De de pyaar de'
    },
    {
        movie_name:'Jab tak hai jaan'
    },
    {
        movie_name:'Golmaal 3'
    },
    {
        movie_name:'Dhammal'
    },
    {
        movie_name:'Hum sath sath hain'
    },
    {
        movie_name:'Ta ra rum pum'
    },
    {
        movie_name:'Khatta Meetha'
    },
    {
        movie_name:'chupke chupke'
    },
    {
        movie_name:'Bell bottom'
    },
    {
        movie_name:'Raaz reboot'
    },
    {
        movie_name:'Ashiqui2'
    },
    {
        movie_name:'Ferrari ki sawari'
    },
    {
        movie_name:'teri meri Kahaani'
    },
    {
        movie_name:'Sanam teri kasam'
    },
    {
        movie_name:'Gangs of Wasseypur'
    },

    {
        movie_name:'Happy Phirr Bhag Jayegi'
    },
    {
        movie_name:'Dil Mange more'
    },
    {
        movie_name:'Student of the year'
    },
    {
        movie_name:'Hum Kisise Kum Nahin'
    },
    {
        movie_name:'Kis kis ko pyaar karoon'
    },
    {
        movie_name:'Kache Dhaage'
    },
    {
        movie_name:'Life in a Metro'
    } 
]

function haswhitespace(s)
{
    return (/\s/).test(s);

}
function random()
{
   return Math.floor(Math.random() * movies.length);
}
show_movie();
function show_movie()
{
     var res=random();
     movie_count=res;
   current_movie=movies[res].movie_name;

for(var i=0;i<current_movie.length;i++)
{
    if(current_movie[i]=='a' || current_movie[i]=='e' || current_movie[i]=='i' || current_movie[i]=='o' || current_movie[i]=='u')
    {
        html+=`<h3 class="movie_header">${current_movie[i].toUpperCase()}</h3>`
    }
    else if(haswhitespace(current_movie[i])){
        html+=`<h3 class="movie_header">/<h3>`
    }
    else{
        html+=`<h3 class="movie_header">?</h3>`
    }
}
guess_box.innerHTML=html;

}
function change()
{
   
    html='';
    for(var i=0;i<a_z.length;i++)
    {
        a_to_z_h4[i].classList.remove('disable');
    }
    for(var j=0;j<9;j++)
    {
        wordhead_h5[j].classList.remove('blur');
    }
    for(var k=0;k<3;k++)
    {
        pig_word[k].classList.remove('color');
    }
    show_movie();
    current_cut=-1;
    clearInterval(my_interval);
    chances_left.innerText='9';
}
function time_change()
{
    if(current_second>=59)
    {
        current_minute++;
        current_second=0;
    }
    if(current_minute>=2)
    {
        alert("Time out");
        current_minute=0;
        current_second=0;
        change();
    }
    else{
        console.log(current_minute + ":" + current_second);
        current_second++;
    }
    if(current_second>=10)
    {
        timesection.innerText=`${"0" + current_minute + ":" +  current_second}`;
    }
    else
    {
        timesection.innerText=`${"0" + current_minute + ":" + "0" + current_second}`;
    }
   
    
}

function i_am_change(res)
{ 
   my_interval=setInterval(time_change, 1000);
    a_to_z_h4=guessing.querySelectorAll('.a-to-z .abcd');
     a_to_z_h4[res].classList.add('disable');
     
     var h3_guess_box=guessing.querySelectorAll('.guess-box .movie_header');
     console.log(h3_guess_box);

   for(var k=0;k<current_movie.length;k++)
   {
       if(a_z[res].name2.toUpperCase()==current_movie[k].toUpperCase())
       {
          
           h3_guess_box[k].innerText=`${current_movie[k].toUpperCase()}`;
           jasoos++;
       }
   }

   if(jasoos==-1)
   {
      current_cut++;
    //   console.log(current_cut);
      chances_left.innerText=`${9-current_cut-1}`;
      change_current_cut();
      if(9-current_cut-1==0)
      {
          alert(`${current_movie}`);
          change_current_cut();
          alert("you loose the game!!!");
          change();
      }
      if(current_cut>=3 && current_cut<=4){
        //   console.log(pig_word[0]);
        pig_word[0].classList.add('color');
      }
      else if(current_cut>=5 && current_cut<=6)
            {
        pig_word[1].classList.add('color');
      }
      else if(current_cut>7 && current_cut<=9){
        pig_word[2].classList.add('color');
      }

   }
   jasoos=-1;

      
}

function change_current_cut()
{
    console.log(wordhead_h5[current_cut].classList.add("blur"));
}

