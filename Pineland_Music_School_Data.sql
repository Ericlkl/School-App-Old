-- Pineland Music School Data
-- Created by LEE KA LONG (ERIC)
USE Pineland_Music_School;

-- Teachers Data
 INSERT INTO Teachers
  (FirstName,LastName,Gender,Address,PhoneNumber,Email ,Facebook_ID ,Qualification,
  Good_at,Personal_Description,Teachering_Experience,Music_skill,Language_skill,Image_URL) 
  VALUES("Glennys","Looker","Male","125 Melbourne street","1234567890","abc123@gmail.com"
  	,"GlennysFB","Master","Piano"
  	,"I am a pianist and composer who has taught people of all ages and levels, including absolute beginners, adult students, and taking students through AMEB or VCE exams. "
  	,' 7 Years Teaching Experience','Piano','English,Japanese'
  	,'https://segundadivisionweb.files.wordpress.com/2017/04/profesor-de-musica.jpg');

INSERT INTO Teachers
  (FirstName,LastName,Gender,Address,PhoneNumber,Email ,Facebook_ID ,Qualification,
  Good_at,Personal_Description,Teachering_Experience,Music_skill,Language_skill,Image_URL) 
  VALUES("Jesse", "Taylor", "Male","54 Oakwood Street","07 3883 7180","taylor_j_12@gmail.com"
  	,"JTRocks","Certificate IV (School Age Education)","Vocals and Guitar"
  	,"I am currently a member of ‘Master Safe’, a local rock cover band that plays in venues across the greater Brisbane area, as well as the Sunshine and Gold Coasts.
    I’ve been playing with Master Safe as their lead vocalist for five years now."
  	,' Two years with Pinelands Music School','Expert','English, Japanese, French'
  	,'https://i.imgur.com/7kgK3XL.jpg');


INSERT INTO Teachers
  (FirstName,LastName,Gender,Address,PhoneNumber,Email ,Facebook_ID ,Qualification,
  Good_at,Personal_Description,Teachering_Experience,Music_skill,Language_skill,Image_URL) 
  VALUES("Nick", "James", "Male","4/184 Samsonvale Road","07 3881 1477","itsnickjames@gmail.com"
  	,"nickydrums.111","Diploma (Musical Studies), Diploma (School Age Education)","Drums and Percussion"
  	," I am a percussion instructor with a Diploma in Musical Studies from Queensland TAFE, 
  	with a secondary Diploma of School Age Education."
  	,'Five years with Pinelands, Two Years with Kedron State School.','Expert','English, Italian, Spanish'
  	,'https://i.imgur.com/BQ0pVtI.jpg');

 INSERT INTO Teachers
  (FirstName,LastName,Gender,Address,PhoneNumber,Email ,Facebook_ID ,Qualification,
  Good_at,Personal_Description,Teachering_Experience,Music_skill,Language_skill,Image_URL) 
  VALUES("Gemma", "Wylde", "Female","78 Lakeview Lane","07 3824 3559","g_wylde@hotmail.com"
  	,"wyldefire.1211","Army Instructor – Equivalent to Diploma","Trumpet & Saxophone"
  	,"I am a former Trumpet player and have served ten years with the Australian Army Band, 
  	reaching the rank of Sergeant before I ended my service."
  	,'Six months with Pinelands, three years as an instructor with the Australian Army','Expert','English, Japanese'
  	,'https://i.imgur.com/V7UjHrx.jpg');


 INSERT INTO Teachers
  (FirstName,LastName,Gender,Address,PhoneNumber,Email ,Facebook_ID ,Qualification,
  Good_at,Personal_Description,Teachering_Experience,Music_skill,Language_skill,Image_URL) 
  VALUES("Kaitlyn", "Price", "Female","33 Spitfire Street","07 3880 2217","thepriceisntright@yahoo.com"
  	,"k.price.825","Certificate IV (Musical Studies)","Flute & Clarinet"
  	,"I am a qualified Flutist and Clarinet player with eight years experience,
  	 and am currently a reserve player for the Brisbane Symphony Orchesta.."
  	,'One year with Pinelands, two years as an independent private tutor.','Expert','English, Russian, German'
  	,'https://i.imgur.com/FkvZSzv.jpg');

 INSERT INTO Teachers
  (FirstName,LastName,Gender,Address,PhoneNumber,Email ,Facebook_ID ,Qualification,
  Good_at,Personal_Description,Teachering_Experience,Music_skill,Language_skill,Image_URL) 
  VALUES("Matthew", "Adrienson", "Male","55 The Boulevard","07 3264 4876","matta124@bigpond.net"
  	,"matthew.adriendson.5","Bachelor’s Degree of Fine Arts (Music)","Violin"
  	,"I am a graduate from the Queensland University of a Technology with a Bachelor’s Degree of Fine Arts (Music). 
  	Currently, I am a consulting producer for a number of small strings production houses,."
  	,'Three years with Pinelands','Master','English, French, Italian, Spanish, Greek'
  	,'https://i.imgur.com/VNWFpBV.jpg');

-- Event Data

 INSERT INTO Events
  (EventName,Tag,Company,Description,Time,Place,Instrument,Date,Image_URL) 
  VALUES("Brisbane Student Piano concert 2018", "BSPC_2018", "Brisbane"
  	,"Brisbane Student Pinao Concert 2018 has more than 200 student to show their pinao skills...."
  	,"08:00 PM","Brisbane"
  	,"Piano","1 May 2018","http://pastimesinc.com/wp-content/uploads/2015/07/Student_Concerts-Final-1024x689.jpg"
	);

 INSERT INTO Events
  (EventName,Tag,Company,Description,Time,Place,Instrument,Date,Image_URL) 
  VALUES("South Bank Music Festival 2018", "SBM_2018", "Brisbane"
  	,"SouthBank Centre present close to 200 concerts a year alongside free events and more 
  	from the most exciting artists, conductors, orchestras and ensembles the world over. "
  	,"07:30 PM","SouthBank"
  	,"Band","7 May 2018","http://media.socastsrm.com/wordpress/wp-content/blogs.dir/668/files/2016/10/JR-ConcertsAndEvents.jpg"
	);

 INSERT INTO Events
  (EventName,Tag,Company,Description,Time,Place,Instrument,Date,Image_URL) 
  VALUES("YunDi 2018 World Tour Sydney", "YunDi_Sydney", "Brisbane"
  	,"As YUNDI travels through Japan and China this summer performing Chopin's Ballades and 24 Preludes,
  	 follow his activities on and off the recital stage on Facebook and Twitter at @yundimusic and on Instagram at @yundimusicofficial"
  	,"06:30 PM","Sydney"
  	,"Piano","27 Aug 2018","https://onrichmondhill.com/sites/default/files/Chris%20Au%20on%20piano.jpg"
	);

  INSERT INTO Events
  (EventName,Tag,Company,Description,Time,Place,Instrument,Date,Image_URL) 
  VALUES("Resonance: A Tsunami Violin Concert", "Tsuna_Vio", "Great East Japan"
  	,"This concert commemorates those who lost their lives in Great East Japan earthquake and 
  	tsunami on 11 March 2011. It is a reminder that many people are still
  	suffering from the disaster, and that we could still be of some help."
  	,"10:00 PM","Melbourne"
  	,"Violin","12 Aug 2018","https://www.tso.ca/sites/default/files/lures/tchaik-violin-concerto_1920x1080.jpg"
	);

  -- Course

 INSERT INTO Courses
  (CourseName,Description,Requirement,TutionFee,Period,Time,Day,NumbersOfStudent,Instrument,Teacher,Image_URL) 
  VALUES("Piano Beginner 1", "Best entry for the complete beginner to learn how to play piano", "age 12 above"
  	,300 ,"07 April - 23 July","09:00 PM"
  	,"Tuesday", 24, "Piano", "Eric lee" , "https://s3.envato.com/files/142848884/2.jpg"
	);

 INSERT INTO Courses
  (CourseName,Description,Requirement,TutionFee,Period,Time,Day,NumbersOfStudent,Instrument,Teacher,Image_URL) 
  VALUES("Violin Beginner 1", "Best entry for the complete beginner to learn how to play piano", "age 6 above"
  	,400 ,"20 April - 27 July","07:00 PM"
  	,"Wednesday", 20, "Violin", "Emma Lu" , "https://cruciality.files.wordpress.com/2009/05/violin.jpg"
	);

  INSERT INTO Courses
  (CourseName,Description,Requirement,TutionFee,Period,Time,Day,NumbersOfStudent,Instrument,Teacher,Image_URL) 
  VALUES("Drum Beginner 1", "Best entry for the complete beginner to learn how to play Drum", "age 14 above"
  	,800 ,"20 Sep - 27 Oct","07:00 PM"
  	,"Monday", 10, "Drum", "Stas" , "https://usa.yamaha.com/files/model_visual_2f724798d647fa144cae0fd8b1685490.jpg"
	);

  INSERT INTO Courses
  (CourseName,Description,Requirement,TutionFee,Period,Time,Day,NumbersOfStudent,Instrument,Teacher,Image_URL) 
  VALUES("Guitar Beginner 2", "Best entry for the complete beginner to learn how to play Guitar", "age 12 above"
  	,600 ,"20 Sep - 27 Oct","08:00 PM"
  	,"Tuesday", 10, "Guitar", "Jesses" , "https://www.pmtonline.co.uk/yoma_press/wp-content/uploads/2017/12/10-reasons-you-need-a-taylor-guitar.jpg"
	);

-- Instruments

INSERT INTO Instrument
  (InstrumentName,Description,Status,InStock,Cost,Image_URL) 
  VALUES("GArtist CL34BK 3/4 Size Classical Guitar Pack, Nylon String - Black"
  	, "This is an ideal guitar for beginners. Its nylon strings are easy on beginner hands 
  	and its 3/4 size will suit children between 8 to 13 years old 
  	(if you're looking for a smaller version look at our 1/2 and 1/4 range)."
  	, "Excellent"
  	,20 , 30 , "https://www.artistguitars.com.au/assets/full/10665.jpg"
	);

INSERT INTO Instrument
  (InstrumentName,Description,Status,InStock,Cost,Image_URL) 
  VALUES("Artist PB2L Left Hand Black Electric Bass Guitar with Accessories"
  	, "This Left Hand Bass guitar is designed to be easy to play so 
  	it's a great starting point if you want to pick up a bass for the first time. 
  	This is a full size bass and is recommended for Adults or Children over the age of 12"
  	, "New"
  	,10 , 70 , "https://www.artistguitars.com.au/assets/full/13712.jpg"
	);

INSERT INTO Instrument
  (InstrumentName,Description,Status,InStock,Cost,Image_URL) 
  VALUES("Arioso Violin Outfit Including the Simply for Strings Setup 4/4"
  	, "The Arioso Violin Outfit including the Simply for Strings Setup is an excellent fully 
  	hand-carved instrument suited to the beginner or continuing player. "
  	, "New"
  	,15 , 79 , "https://topnotchviolins.com/wp-content/uploads/2018/02/featured-image-buy-instruments-500x350.jpg"
	);

  INSERT INTO Instrument
  (InstrumentName,Description,Status,InStock,Cost,Image_URL) 
  VALUES("Wooden Full Size 4/4 Violin Fiddle Natural Acoustic For Beginners Case"
  	, "Affordable instrument for beginners; 4/4 full size - fits adults and children above 12 years old.
  	(2)Basswood body with elegant varnish finish. (3)Features four fine tuners "
  	, "Good"
  	,20 , 30 , "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTRzVj1QYYWGOL_BTIFq7uunFIUoR2rX3vW8quf8XMsQWdbUfapXLtIWSMCtOx31D0f79oytNi2&usqp=CAE"
	);
