SC.initialize({
  client_id: '340f063c670272fac27cfa67bffcafc4'
});
$(document).ready(function(){
  var hashAddress=window.location.hash;
  var addressBar=hashAddress.substr(1);
  addressBar= Number(addressBar);

  // song list
  var song1={
    name:"Kadhal asai yaarai viddatho",
    movie:'Anjan',
    music:'Yuvan Shankar Raja',
    id:"/tracks/179142498",
    stColor:"#E91E63",
    EnColor:"#42A5F5"
  };
  var song2={
    name:"Melliname melliname",
    movie:"Shahjahan",
    music:"Harish Raghavendra",
    id:"/tracks/201592382",
    stColor:"#BA4A00",
    EnColor:"#F4D03F"
  };
  var song3={
    name:"Maayam seithayo",
    movie:"Velayudham",
    music:"Vijay Antony",
    id:"/tracks/69165825",
    stColor:"#52BE80",
    EnColor:"#F5B041"
  };
  var song4={
    name:"Thenral vanthu",
    movie:"Avatharam",
    music:"Ilaiyaraaja",
    id:"/tracks/32737742",
    stColor:"#EC7063",
    EnColor:"#99A3A4"
  };
  var song5={
    name:"Neela vaanam",
    movie:"Manmadan Ambu",
    music:"Kamal Haasan",
    id:"/tracks/12302484",
    stColor:"#B2BABB",
    EnColor:"#ABEBC6"
  };
  var song6={
    name:"Kaatrin mozhi",
    movie:"Mozhi",
    music:"Balaram",
    id:"/tracks/78761822",
    stColor:"#7DCEA0",
    EnColor:"#A9DFBF"
  };
  var song7={
    name:"Vinnai thandi varuvaya",
    movie:"Vinnaithaandi Varuvaayaa",
    music:"Vivek Agrawal",
    id:"/tracks/89404205",
    stColor:"#0097A7",
    EnColor:"white"
  };
  var song8={
    name:"Neeyum naanum",
    movie:"Naanum Rowdy Dhaan",
    music:"Neeti Mohan",
    id:"/tracks/233264073",
    stColor:"#0097A7",
    EnColor:"white"
  };
  var song9={
    name:"Vaseegara",
    movie:"Minnale",
    music:"Bombay Jayashri",
    id:"/tracks/135307692",
    stColor:"#0097A7",
    EnColor:"white"
  };
  var song10={
    name:"Puthu vellai mazhai",
    movie:"Roja",
    music:"Unni Menon",
    id:"/tracks/63652461",
    stColor:"#0097A7",
    EnColor:"white"
  };
  var song11={
    name:"Unnai kodu ennai tharuven",
    movie:"Unnai Kodu Ennai Tharuven",
    music:"Unnikrishnan",
    id:"/tracks/109748777",
    stColor:"#0097A7",
    EnColor:"white"
  };
  var song12={
    name:"Hi sonna pothum",
    movie:"Comali",
    music:"Kaushik Krish",
    id:"/tracks/663861038",
    stColor:"#0097A7",
    EnColor:"white"
  };
  var song13={
    name:"Tum hi ho",
    movie:"Aashiqui 2",
    music:"Arijit Singh",
    id:"/tracks/85728261",
    stColor:"#0097A7",
    EnColor:"white"
  };
  var song14={
    name:"Rowdy baby",
    movie:"Maari 2",
    music:"Dhanush",
    id:"/tracks/556842441",
    stColor:"#0097A7",
    EnColor:"white"
  };
  var song15={
    name:"Kanda kannazhagi",
    movie:"Namma veeddu pillai",
    music:"Sivakarthikeyan",
    id:"/tracks/717688582",
    stColor:"#0097A7",
    EnColor:"white"
  };
  var song16={
    name:"Senorita",
    movie:"album",
    music:"Shawn Mendes",
    id:"/tracks/641570523",
    stColor:"#0097A7",
    EnColor:"white"
  };
  var song17={
    name:"What do you mean",
    movie:"Purpose",
    music:"Justin Bieber",
    id:"/tracks/221368871",
    stColor:"#0097A7",
    EnColor:"white"
  };
  var song18={
    name:"Po inru neeyaka",
    movie:"Velaiyilla Pattathari",
    music:"Anirudh Ravichander",
    id:"/tracks/134782098",
    stColor:"#0097A7",
    EnColor:"white"
  };
  var song19={
    name:"Why this kolaveri",
    movie:"3",
    music:"Dhanush",
    id:"/tracks/45791711",
    stColor:"#0097A7",
    EnColor:"white"
  };
  var song20={
    name:"Titanic theme music",
    movie:"Titanic",
    music:"Titanic",
    id:"/tracks/18848631",
    stColor:"#0097A7",
    EnColor:"white"
  };
  var song21={
    name:"Anjali anjali",
    movie:"Duet",
    music:"A. R. Rahman",
    id:"/tracks/345497207",
    stColor:"#0097A7",
    EnColor:"white"
  };
  var song22={
    name:"Enna solla pogirai",
    movie:"Kandukondain Kandukondain",
    music:"Shankar Mahadevan",
    id:"/tracks/517722948",
    stColor:"#0097A7",
    EnColor:"white"
  };
  var song23={
    name:"Minnalai pidiththu",
    movie:"Shahjahan",
    music:"Unni Menon",
    id:"/tracks/28343404",
    stColor:"#0097A7",
    EnColor:"white"
  };
  var song24={
    name:"Un perai sollum pothe",
    movie:"Angadi Theru",
    music:"Haricharan",
    id:"/tracks/5189714",
    stColor:"#0097A7",
    EnColor:"white"
  };
  var song25={
    name:"Uruguthey",
    movie:"Veyil",
    music:"GV Prakash",
    id:"/tracks/62938307",
    stColor:"#0097A7",
    EnColor:"white"
  };
  var fullSongList=[song1,song2,song3,song4,song5,song6,song7,song8,song9,song10,song11,song12,song13,song14,song15,song16,song17,song18,song19,song20,song21,song22,song23,song24,song25];
  if((addressBar>0)&&(addressBar<=24)){
    selectedSong=fullSongList[addressBar]['id'];
    $("#songTitle").html(fullSongList[addressBar]['name']);
    $("#movieName").html(fullSongList[addressBar]['movie']+"-"+fullSongList[addressBar]['music']);
    $("#mainPhoto").css("background-image","url('./img/song"+addressBar+".jpg')");
    $("#nowPlayingWindow").css("background-image","linear-gradient(to right,"+fullSongList[addressBar]['stColor']+","+fullSongList[addressBar]['EnColor']+")");
  }
  else{
    selectedSong=fullSongList[0]['id'];
    addressBar=0;
    $("#songTitle").html(fullSongList[0]['name']);
    $("#movieName").html(fullSongList[addressBar]['movie']+" - "+fullSongList[addressBar]['music']);
    $("#mainPhoto").css("background-image","url('./img/song0.jpg')");
  }

  //generate song list in html
  var songListHTML="";
  for(var i=0; i<25; i++){
    songListHTML+="<a class='text-decoration-none' href='redirect.html#"+i+"'><button type='button' class='list-group-item list-group-item-action songHover'><i class='fas fa-play-circle'></i> "+fullSongList[i]['name']+"<span>-"+fullSongList[i]['movie']+"</span></button></a>";
  }
  $("#songListID").html(songListHTML);

  //when click search songs
  $("#searchBox").click(function(){
    $("#searchBox").animate({marginLeft:'2%',width:"84%",borderRadius:"10px"});
    $("#searchResults").fadeIn(1000);
    var searchSongsHTML="";
    for(var i=0; i<25; i++){
      searchSongsHTML+=" <li class='list-group-item'><a class='text-decoration-none' href='redirect.html#"+i+"'>"+fullSongList[i]['name']+"</a></li>";
    }
    $("#searchResultsId").html(searchSongsHTML);
  });

  //remove search results popup any click
  $("#mainPhoto,#alwaysPlayingWindow").click(function(){
    $("#searchBox").animate({marginLeft:'5%',width:"40%",borderRadius:"20px"});
    $("#searchResults").hide();
  });

  //filter the songs
  $("#searchBox").on("keyup", function() {
    var value = $(this).val().toLowerCase();
    $("#searchResultsId li").filter(function() {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
    });
  });

  //when click a next and previous button
  $("#nextBtn").click(function(){
    if(addressBar>23){
      addressBar=(-1);
    }
    var hrefAdd="redirect.html#"+(addressBar+1);
    window.location=hrefAdd;
  });
  $("#previousBtn").click(function(){
    if(addressBar<1){
      addressBar=25;
    }
    var hrefAdd="redirect.html#"+(addressBar-1);
    window.location=hrefAdd;
  });

  SC.stream(selectedSong,function(sound){
  // duration display
  function timeDisplayEnd(){
    var ms=sound.duration;
    var m=Math.floor(ms/1000/60);
    if(m<10){m="0"+m}
    var s=Math.floor((ms/1000)%60);
    if(s===60){s=0}
    if(s<10){s="0"+s}
    var finishTime=m+":"+s;
    $("#endTime").html(finishTime);
    $("#timeDuration").attr("max",Math.floor(ms/1000));
  }
  function timeDisplayStart(){
    var ms=sound.position;
    var m=Math.floor(ms/1000/60);
    if(m<10){m="0"+m}
    var s=Math.floor((ms/1000)%60);
    if(s===60){s=0}
    if(s<10){s="0"+s}
    var finishTime=m+":"+s;
    $("#startTime").html(finishTime);
    $("#timeDuration").val(Math.floor(ms/1000));
  }
  // when click a play or pause button
  var pauseState=true;
  $("#playPauseBtn").click(function(e){
    if(pauseState){
      $("#playBtn").hide();
      $("#pauseBtn").show();
      pauseState=false;
      stopState=false;
      $("#stopBtnFill").hide();
      $("#stopBtnNoFill").show();
      $("#logo"+addressBar).css("background","white");
      $("#logo"+addressBar).html("<img src='img/playing.gif' width='50' height='50'>");
      e.preventDefault(); //Don't buuton function
      sound.start();
      setInterval(timeDisplayEnd, 3000);
      setInterval(timeDisplayStart, 1000);
    }
    else{
      $("#pauseBtn").hide();
      $("#playBtn").show();
      pauseState=true;
      e.preventDefault();
      sound.pause();
    }
  });

  //when click stop btn
  var stopState=true;
  $("#stopBtn").click(function(e){
      if(stopState===false){
        $("#stopBtnNoFill").hide();
        $("#stopBtnFill").show();
        stopState=true;
        pauseState=true;
        $("#pauseBtn").hide();
        $("#playBtn").show();
        e.preventDefault();
        sound.stop();
      }
  });

  //when click a mute Btn
  var soundState=true;
  $("#soundBtn").click(function(e){
    if(soundState===true){
      $("#soundIconBtn").hide();
      $("#muteIconBtn").show();
      soundState=false;
      e.preventDefault();
      sound.mute();
    }
    else{
      $("#muteIconBtn").hide();
      $("#soundIconBtn").show();
      soundState=true;
      e.preventDefault();
      sound.unmute();
    }
  });

  //when change the volume range
  $(document).on('input change', '#volumeRange', function(e){
    var getVolume=$("#volumeRange").val();
    e.preventDefault();
    sound.setVolume(getVolume);
    if(getVolume==0){
      $("#soundIconBtn").hide();
      $("#muteIconBtn").show();
      soundState=false;
    }
    else{
      $("#muteIconBtn").hide();
      $("#soundIconBtn").show();
      soundState=true;
    }
  });

  //when change a duration
  $(document).on('input change', '#timeDuration', function(e){
    var getPosition=$("#timeDuration").val();
    getPosition *=1000;
    e.preventDefault();
    sound.setPosition(getPosition);
  });
});
});


//starting a slider.js
