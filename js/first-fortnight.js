 var urlFav = [];
 var categoryData = {
     music: {
         name: "Artists",
         description: "All the musicians from A-Z.",
         items: [{
             artist: "Le Galaxie",
             venue: "Button%20Factory,%20Curved%20Street,%20Temple%20Bar",
             time: "20:30",
             date: "January 12th",
             specific: ["", "", "", "", "", "", "", "", "", "", "", "", "saturday"],
             price: "(w Kopek & We Cut Corners) 10",
             image: "<img src='ICONS_57X57PX/bandImgs/leGalaxie.jpg' >",
             description: "Le Galaxie made the &#39;80s cool again on Saturday, putting on a retro nostalgic light-show full of big hair and high waisted trousers, throwing in some trance beats from the &#39;90s, a lick of Groove Armada and three guitars to create the kind of modern sound that simultaneously makes one nostalgic for times gone by and hopeful for a world where synths (and fluorescent guitar straps) are cool again - Hot Press",
             links: "<a href='http://www.legalaxie.net/'",
             favourite: false
         }, {
             artist: "We Cut Corners",
             venue: "Button%20Factory,%20Curved%20Street,%20Temple%20Bar",
             time: "20:30",
             date: "January 12th",
             specific: ["", "", "", "", "", "", "", "", "", "", "", "", "saturday"],
             price: "(w Kopek & Le Galaxie) 10",
             image: "<img src='ICONS_57X57PX/bandImgs/weCutCorners.jpeg' >",
             description: "Making in-roads in the UK are We Cut Corners with their critically acclaimed debut &quot;Today I Realised I Could Go Home Backwards&quot;  recently receiving a UK release.",
             links: "<a href='http://www.wecutcorners.net/'",
             favourite: false
         }, {
             artist: "Kopek",
             venue: "Button%20Factory,%20Curved%20Street,%20Temple%20Bar",
             time: "20:30",
             date: "January 12th",
             specific: ["", "", "", "", "", "", "", "", "", "", "", "", "saturday"],
             price: "(w Le Galaxie & We Cut Corners) 10",
             image: "<img src='ICONS_57X57PX/bandImgs/kopek.jpeg' >",
             description: "Kopek, who have made waves internationally, attracting plaudits from Classic Rock Magazine, Metal Hammer and Kerrang following the release of their debut album, &quot;White Collar Lies&quot;.",
             links: "<a href='http://www.kopekofficial.com/'",
             favourite: false
         }]
     },
     art: {
         name: "Artists",
         description: "All the artists from A-Z.",
         items: [{
             artist: "Glen Neath",
             date: "January 04th – 12th",
             specific: ["", "", "", "", "friday", "saturday", "sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"],
             time: "20:00",
             venue: "Filmbase,%20Curved%20Street,%20Temple%20Bar",
             price: "free - 0",
             image: "<img src='ICONS_57X57PX/Filmbase/Glen_Neath.jpg' >",
             description: "Place your head into Glen Neath&#39;s &quot;The Body Considering its Pains&quot;, a large wooden &#39;body&#39; and listen as a voice seeks to understand the mind and body&#39;s pains and then perhaps overcome them.",
             links: "<a href='http://www.glenneath.co.uk/home/glen_neath.html'",
             favourite: false
         }, {
             artist: "Lee Barry",
             date: "January 04th&ndash;12th",
             specific: ["", "", "", "", "friday", "saturday", "sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"],
             time: "20:00",
             venue: "Filmbase,%20Curved%20Street,%20Temple%20Bar",
             price: "free - 0",
             image: "<img src='ICONS_57X57PX/Filmbase/Lee_Barry_(5).jpg' >",
             description: "Take a glimpse of an elderly woman&#39;s grief and isolation as part of Lee Barry&#39;s deeply personal photographic exhibition, &quot;The Old Dancing Was Lovely&quot;",
             links: "<a href='http://www.leebarry.net/'",
             favourite: false
         }, {
             artist: "Melissa Lavender",
             date: "January 04th – 12th",
             specific: ["", "", "", "", "friday", "saturday", "sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"],
             time: "20:00",
             venue: "Filmbase,%20Curved%20Street,%20Temple%20Bar",
             price: "free - 0",
             image: "<img src='ICONS_57X57PX/Filmbase/ml3.jpg' >",
             description: "&quot;Vanishing Point&quot; sees Melissa Lavender re-work an early photo of her great-grandmother who, in the 1930s, was taken to an asylum, suffering from post-natal depression. It was thought that she died there, but 60 years later, it was discovered she was alive, recovered, and still living at the asylum. ",
             links: "<a href='?'",
             favourite: false
         }, {
             artist: "Sarah Flynn",
             date: "January 04th – 12th",
             specific: ["", "", "", "", "friday", "saturday", "sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"],
             time: "20:00",
             venue: "Filmbase,%20Curved%20Street,%20Temple%20Bar",
             price: "free - 0",
             image: "<img src='ICONS_57X57PX/Filmbase/sarah flynn.JPG.jpeg' >",
             description: "<i>Spinnet</i> from &quot;Elements of Blank&quot; by Wexford visual artist Sarah Flynn sees the artist seek to transform familiar everyday objects to disrupt the idea of their representation. Through the altering process, each piece manages a peculiar sense of familiarity and estrangement, questioning our presumptions that things are, as they appear to be. ",
             links: "<a href='https://sites.google.com/site/sarahflynn08/about'",
             favourite: false
         }]
     },
     spokenWord: {
         name: "Therapy Sessions",
         description: "All the performers from A-Z.",
         items: [{
             artist: "VANN",
             venue: "The%20Workman's%20Club,%20Wellington%20Quay,%20Temple%20Bar",
             time: "20:00",
             date: "January 12th",
             specific: ["", "", "", "", "", "", "", "", "", "", "", "", "saturday"],
             price: "free - 0",
             image: "<img src='ICONS_57X57PX/bandImgs/kopek.jpeg' >",
             description: "From music to poetry to literature, anything will go as some of Ireland&#39;s brightest musicians, poets and writers gather in an intimate space to get whatever it might be off their chests. Expect surprise guests and sets from acclaimed singer-songwriter R&oacute;is&iacute;n O, pulsating and melodic electro-rock from VANN, epic and emotive anthems from dREA, brilliant baroque folk songs from The Man Whom and thoughtful and humorous poetry from a line-up of the city&#39;s most assured wordsmiths curated by acclaimed and powerful poet, Stephen James Smith. With surprise guests at last year&#39;s set up that included We Cut Corners, Delorentos, Julie Feeney and Pugwash, expect a host of additional names to be confirmed right up until showtime.",
             links: "<a href='http://fr.twitter.com/VANNMUSIC/following'",
             favourite: false
         }, {
             artist: "Roisin O",
             venue: "The%20Workman's%20Club,%20Wellington%20Quay,%20Temple%20Bar",
             time: "20:00",
             date: "January 12th",
             specific: ["", "", "", "", "", "", "", "", "", "", "", "", "saturday"],
             price: "free - 0",
             image: "<img src='ICONS_57X57PX/bandImgs/kopek.jpeg' >",
             description: "From music to poetry to literature, anything will go as some of Ireland&#39;s brightest musicians, poets and writers gather in an intimate space to get whatever it might be off their chests. Expect surprise guests and sets from acclaimed singer-songwriter R&oacute;is&iacute;n O, pulsating and melodic electro-rock from VANN, epic and emotive anthems from dREA, brilliant baroque folk songs from The Man Whom and thoughtful and humorous poetry from a line-up of the city&#39;s most assured wordsmiths curated by acclaimed and powerful poet, Stephen James Smith. With surprise guests at last year&#39;s set up that included We Cut Corners, Delorentos, Julie Feeney and Pugwash, expect a host of additional names to be confirmed right up until showtime.",
             links: "<a href='http://www.roisino.com'",
             favourite: false
         }, {
             artist: "dREA",
             venue: "The%20Workman's%20Club,%20Wellington%20Quay,%20Temple%20Bar",
             time: "20:00",
             date: "January 12th",
             specific: ["", "", "", "", "", "", "", "", "", "", "", "", "saturday"],
             price: "free - 0",
             image: "<img src='ICONS_57X57PX/bandImgs/kopek.jpeg' >",
             description: "From music to poetry to literature, anything will go as some of Ireland&#39;s brightest musicians, poets and writers gather in an intimate space to get whatever it might be off their chests. Expect surprise guests and sets from acclaimed singer-songwriter R&oacute;is&iacute;n O, pulsating and melodic electro-rock from VANN, epic and emotive anthems from dREA, brilliant baroque folk songs from The Man Whom and thoughtful and humorous poetry from a line-up of the city&#39;s most assured wordsmiths curated by acclaimed and powerful poet, Stephen James Smith. With surprise guests at last year&#39;s set up that included We Cut Corners, Delorentos, Julie Feeney and Pugwash, expect a host of additional names to be confirmed right up until showtime.",
             links: "<a href='https://www.facebook.com/drea.official'",
             favourite: false
         }, {
             artist: "Stephen James Smith",
             venue: "The%20Workman's%20Club,%20Wellington%20Quay,%20Temple%20Bar",
             time: "20:00",
             date: "January 12th",
             specific: ["", "", "", "", "", "", "", "", "", "", "", "", "saturday"],
             price: "free - 0",
             image: "<img src='ICONS_57X57PX/bandImgs/kopek.jpeg' >",
             description: "From music to poetry to literature, anything will go as some of Ireland&#39;s brightest musicians, poets and writers gather in an intimate space to get whatever it might be off their chests. Expect surprise guests and sets from acclaimed singer-songwriter R&oacute;is&iacute;n O, pulsating and melodic electro-rock from VANN, epic and emotive anthems from dREA, brilliant baroque folk songs from The Man Whom and thoughtful and humorous poetry from a line-up of the city&#39;s most assured wordsmiths curated by acclaimed and powerful poet, Stephen James Smith. With surprise guests at last year&#39;s set up that included We Cut Corners, Delorentos, Julie Feeney and Pugwash, expect a host of additional names to be confirmed right up until showtime.",
             links: "<a href='http://www.stephenjamessmith.com/'",
             favourite: false
         }, {
             artist: "The Man Whom",
             venue: "The%20Workman's%20Club,%20Wellington%20Quay,%20Temple%20Bar",
             time: "20:00",
             date: "January 12th",
             specific: ["", "", "", "", "", "", "", "", "", "", "", "", "saturday"],
             price: "free - 0",
             image: "<img src='ICONS_57X57PX/bandImgs/kopek.jpeg' >",
             description: "From music to poetry to literature, anything will go as some of Ireland&#39;s brightest musicians, poets and writers gather in an intimate space to get whatever it might be off their chests. Expect surprise guests and sets from acclaimed singer-songwriter R&oacute;is&iacute;n O, pulsating and melodic electro-rock from VANN, epic and emotive anthems from dREA, brilliant baroque folk songs from The Man Whom and thoughtful and humorous poetry from a line-up of the city&#39;s most assured wordsmiths curated by acclaimed and powerful poet, Stephen James Smith. With surprise guests at last year&#39;s set up that included We Cut Corners, Delorentos, Julie Feeney and Pugwash, expect a host of additional names to be confirmed right up until showtime.",
             links: "<a href='http://themanwhom.com/'",
             favourite: false
         }]
     },
     drama: {
         name: "Drama",
         description: "All the theatre from A-Z.",
         items: [{
             artist: "BOF",
             venue: "Pavillion%20Theatre,%20Dun%20Laoghaire",
             time: "20:00",
             date: "January 11th",
             specific: ["", "", "", "", "", "", "", "", "", "", "", "friday", ""],
             price: "free - 0",
             image: "<img src='ICONS_57X57PX/bandImgs/kopek.jpeg' >",
             description: "In association with See Change <p>Combining music, comedy sketches and stories, Box of Frogs is a revue around the subject of mental health problems. Seeking to de-mystify, debunk and ultimately have a laugh with what really goes on inside our heads, the play features a well-known cast of actors and comedians who share their stories in a work written in collaboration with talented actress and playwright Isobel Mahon (Glenroe). An audience is invited in to be entertained by the thoughts of a cast featuring much-loved actress and former Glenroe star Mary McEvoy; stand-up comedian, journalist and Newstalk presenter Dil Wickremasinghe; and writer, comedian and frequent media contributor, John Moynes. Caroline FitzGerald (White Woman Street) once again directs an unmissable project following a well-received run at Dublin&#39;s Smock Alley Theatre earlier this year.</p>",
             links: "<a href='http://www.seechange.ie/index.php/news-and-events/357-box-of-frogs-a-revue-of-the-mind'",
             favourite: false
         }, {
             artist: "Silent",
             venue: "Smock%20Alley%20Theatre",
             time: "20:00",
             date: "January 11th",
             specific: ["", "", "", "", "", "", "", "", "", "", "", "friday", ""],
             price: "free - 0",
             image: "<img src='ICONS_57X57PX/bandImgs/kopek.jpeg' >",
             description: "In association with Mental Health Reform <p>&quot;Hopeless, helpless, in-the-way person&quot;.<br /> Homeless Tino McGoldrig once had splendid things. But he has lost it all - including his mind. He now dives into the wonderful wounds of his past through the romantic world of Rudolph Valentino, in this brave, bold, beautiful production. Winner of the Fringe First and Herald Angel Awards at Edinburgh Festival Fringe 2011 and Argus Angel at Brighton Festival 2012, Pat Kinevane&#39;s internationally acclaimed one-man production, produced by Fishamble: The New Play Company, has wowed audiences across the world and offers a multi-faceted insight into homelessness and the stigma surrounding mental health problems.</p><p>&quot;Passionate one-man show&#46;&#46;&#46; stunning.&quot; - Ben Brantley, The New York Times<br />&quot;A must-see if ever there was one&quot; 5 stars - The List </p>",
             links: "<a href='http://fishamble.com/'",
             favourite: false
         }, {
             artist: "simb",
             venue: "The%20New%20Theatre,%20Essex%20Street%20East",
             time: "20:00",
             date: 'January 2nd - 5th',
             specific: ["", "", "wednesday", "thursday", "friday", "saturday", "sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"],
             price: "free - 0",
             image: "<img src='ICONS_57X57PX/bandImgs/kopek.jpeg' >",
             description: "In association with Mental Health Reform <p><i>Solpadeine is My Boyfriend</i> is about change. It&#39;s more than a haircut or going to college. It&#39;s the changes you canâ€™t control, canâ€™t come back from, like growing up, emigrating, and that moment you realise: youâ€™re not who you thought you were going to be when you wrote about it in 3rd class. Described by Irish Theatre Magazine as an &quot;unflinching confrontation with both depression and the psychic paralysis of post-boom Ireland&quot;, Stefanie Preissner&#39;s touching, thoughtful and humorous one-woman play was one of the standout hits at the 2012 Dublin Fringe Festival.</p><p>&quot;<i>In Solpadeine Is My Boyfriend</i>, Stefanie Preissner shows herself to be a serious talent well on the road to becoming a major one.&quot; 5 stars - Irish Examiner</p>",
             links: "<a href='http://www.projectartscentre.ie/programme/whats-on/1607-solpadeine-is-my-boyfriend'",
             favourite: false
         }]
     },
     film: {
         name: "Films",
         description: "All the films from A-Z.",
         items: [{
             artist: "Tarnation",
             venue: "Irish%20Film%20Institute,%20Temple%20Bar",
             time: "16:00",
             date: "January 5th",
             specific: ["", "", "", "", "", "saturday", "", "", "", "", "", "", ""],
             price: "free - 0",
             image: "<img src='ICONS_57X57PX/bandImgs/kopek.jpeg' >",
             description: "Screening will be followed by a post-show discussion <p>Praised as &quot;a film of remarkable power&quot; by esteemed US film critic Roger Ebert, Jonathan Caouette&#39;s documentary on growing up with his schizophrenic mother has earned huge acclaim and won multiple awards since its release in 2003. Culled together from 19 years of snapshots, Super-8 footage, answering machine messages, video diaries, early short films, and more, this riveting one-of-a-kind documentary receives a rare Irish screening, which will be followed by a post-show discussion.</p>",
             links: "<a href='http://jonathancaouette.blogspot.ie/'",
             favourite: false
         }, {
             artist: "ShortSpace: Irish Short Films",
             venue: "Filmbase,%20Curved%20Street,%20Temple%20Bar",
             time: "tbc",
             date: "January 9th",
             specific: ["", "", "", "", "", "", "", "", "", "wednesday", "", "", ""],
             price: "5",
             image: "<img src='ICONS_57X57PX/bandImgs/kopek.jpeg' >",
             description: "Aimed at inspiring discussion and understanding around the difficulties experienced by those living with mental illness, this series of ShortSpace short-films will include works by French director Raphael Holt; Finlandâ€™s Matti Harju; US filmmaker Jay Roseblatt and Ireland&#39;s Kealan O'Rourke. The programme will include a preview screening of Ann-Marie Kelly&#39;s powerful RTÃ‰ documentary &quot;Wally&quot;, which charts a young rapper&#39;s struggle with depression and helps demonstrates the healing power of creative communication. This event will include a post-show discussion.",
             links: "<a href='tba'",
             favourite: false
         }, {
             artist: "Lunchtime Lifts",
             venue: "tbc",
             time: "13:15",
             date: 'January 8th - 11th',
             specific: ["", "", "", "", "", "", "", "", "tuesday", "wednesday", "thursday", "friday", ""],
             price: "free - 0",
             image: "<img src='ICONS_57X57PX/bandImgs/kopek.jpeg' >",
             description: "Back-to-work and looking for a bit of a lift as the Christmas holidays fade into the past? Look no further! Over four days in January, First Fortnight will screen a series of short films to enjoy your lunch-break too. Whatâ€™s more, all screening are completely free!",
             links: "<a href='tba'",
             favourite: false
         }]
     },
     talks: {
         name: "Talks",
         description: "All the musicians from A-Z.",
         items: [{
             artist: "Please Can You Make Some Noise for&#46;&#46;&#46Mental Health",
             venue: "tbc",
             time: "tbc",
             date: "January 9th",
             specific: ["", "", "", "", "", "", "", "", "", "wednesday", "", "", ""],
             price: "free - 0",
             image: "<img src='ICONS_57X57PX/bandImgs/kopek.jpeg' >",
             description: "Too often, mental health is an issue, which is silenced. It is kept behind closed doors and people are discouraged from talking about it. This event aims to reverse that trend by encouraging people to make as much noise as possible on the subject. As part of First Fortnight, three high profile speakers, all with personal experience in relation to mental health, will form a panel to discuss the issue of prejudice and discrimination. Each panellist will be given an opportunity to open proceedings with a short, personal reflection on the topic. Following that, a debate will open up, chaired by Amnesty International Ireland&#39;s executive director, Colm O&#39;Gorman. So come on down and join Amnesty and First Fortnight in helping make some noise for mental health.",
             links: "<a href='tba'",
             favourite: false
         }]
     },
     streetArt: {
         name: "StreetArt",
         description: ".",
         items: [{
                 artist: "You Are Alive",
                 venue: "see street art map!",
                 time: "tbc",
                 date: "January 02th - 12th",
                 specific: ["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"],
                 price: "free - 0",
                 image: "<img src='ICONS_57X57PX/bandImgs/kopek.jpeg' >",
                 description: "From Maser&#39;s &quot;You Are Alive&quot; artwork off Camden Street to ADWâ€™s &quot;Labelz Are for Jars, Not For People&quot; ketchup slogan on Wellington Quay, chances are youâ€™ve alreday seen some of the work from First Fortnight&#39;s talented crew of street artists. Continuing to play a key role in challenging perceptions and prejudices around the issue of mental health, keep an eye out for their stunning work over the course of the festival. ",
                 links: "<a href='tba'",
                 favourite: false
             }

         ]
     }
 };

 function showCategory(urlObj, options) {
     var categoryName = urlObj.hash.replace(/.*category=/, ""),
         category = categoryData[categoryName],
         pageSelector = urlObj.hash.replace(/\?.*$/, "");

     if (category) {
         var $page = $(pageSelector),
             $header = $page.children(":jqmData(role=header)"),
             $content = $page.children(":jqmData(role=content)"),
             markup = "<p> events listed alphabetically :</p>";
         cItems = category.items,
             numItems = cItems.length;

         function dynamicSort(property) {
             return function(a, b) {
                 return (a[property] < b[property]) ? -1 : (a[property] > b[property]) ? 1 : 0;
             }
         }

         cItems.sort(dynamicSort("artist"));

         markup += "<ul data-role='listview'>";
         for (var i = 0; i < numItems; i++) {
             markup += "<li><a href='#gig?category=" + cItems[i].artist + "'></a>" + cItems[i].artist + "<li>";
         }
         markup += "</ul>";

         $header.find("h1").html(category.name);
         $content.html(markup);

         $page.page();

         $content.find(":jqmData(role=listview)").listview();
         $content.find(":jqmData(role=listview)").listview('refresh');

         options.dataUrl = urlObj.href;

         $.mobile.changePage($page, options);
     }
 }

 function showVenueCategory(urlObj, options) {
     var categoryName = urlObj.hash.replace(/.*category=/, "");
     var trueCategory = false;
     pageSelector = urlObj.hash.replace(/\?.*$/, "");
     var uri23 = categoryName;
     var venue23 = decodeURIComponent(uri23);
     var cMusicItems = categoryData.music.items;
     var cArtItems = categoryData.art.items;
     var cSpokenWordItems = categoryData.spokenWord.items;
     var cDramaItems = categoryData.drama.items;
     var cFilmItems = categoryData.film.items;
     var cTalksItems = categoryData.talks.items;
     var cStreetArtItems = categoryData.streetArt.items;

     var venueInfo = [];

     for (i = 0; i < cMusicItems.length; i++) {
         if (cMusicItems[i].venue == categoryName) {
             venueInfo.push(cMusicItems[i]);
             trueCategory = true;
         }
     }

     for (i = 0; i < cFilmItems.length; i++) {
         if (cFilmItems[i].venue == categoryName) {
             venueInfo.push(cFilmItems[i]);
             trueCategory = true;
         }
     }

     for (i = 0; i < cArtItems.length; i++) {
         if (cArtItems[i].venue == categoryName) {
             venueInfo.push(cArtItems[i]);
             trueCategory = true;
         }
     }

     for (i = 0; i < cSpokenWordItems.length; i++) {
         if (cSpokenWordItems[i].venue == categoryName) {
             venueInfo.push(cSpokenWordItems[i]);
             trueCategory = true;
         }
     }

     for (i = 0; i < cDramaItems.length; i++) {
         if (cDramaItems[i].venue == categoryName) {
             venueInfo.push(cDramaItems[i]);
             trueCategory = true;
         }
     }

     for (i = 0; i < cTalksItems.length; i++) {
         if (cTalksItems[i].venue == categoryName) {
             venueInfo.push(cTalksItems[i]);
             trueCategory = true;
         }
     }

     for (i = 0; i < cStreetArtItems.length; i++) {
         if (cStreetArtItems[i].venue == categoryName) {
             venueInfo.push(cStreetArtItems[i]);
             trueCategory = true;
         }
     }


     if (trueCategory) {
         var $page = $(pageSelector),
             $header = $page.children(":jqmData(role=header)"),
             $content = $page.children(":jqmData(role=content)");

         var markup;
         markup = "<p>" + venue23 + "'s listings by start time :</p>";

         function dynamicSort(property) {
             return function(a, b) {
                 return (a[property] < b[property]) ? -1 : (a[property] > b[property]) ? 1 : 0;
             }
         }

         venueInfo.sort(dynamicSort("time"));

         markup += "<ul data-role='listview'>";
         for (var i = 0; i < venueInfo.length; i++) {
             var uri2 = venueInfo[i].artist;
             var encode = encodeURI(uri2);
             markup += '<li>&nbsp;<a href="#gig?category=' + encode + '"></a>&nbsp;&nbsp;' + venueInfo[i].artist + '<br />&nbsp;' + venueInfo[i].date + '&nbsp;&nbsp;' + venueInfo[i].time + '<li>';
         }
         markup += "</ul>";

         $header.find("h1").html(venue23);
         $content.html(markup);

         $page.page();

         $content.find(":jqmData(role=listview)").listview();
         $content.find(":jqmData(role=listview)").listview('refresh');

         options.dataUrl = urlObj.href;
         $.mobile.changePage($page, options);
     }
 }

 function showScheduleCategory(urlObj, options) {
     var categoryName = urlObj.hash.replace(/.*category=/, "");
     var trueCategory;
     pageSelector = urlObj.hash.replace(/\?.*$/, "");
     var cMusicItems = categoryData.music.items;
     var cArtItems = categoryData.art.items;
     var cSpokenWordItems = categoryData.spokenWord.items;
     var cDramaItems = categoryData.drama.items;
     var cFilmItems = categoryData.film.items;
     var cTalksItems = categoryData.talks.items;
     var cStreetArtItems = categoryData.streetArt.items;

     var dateInfo = [];

     for (i = 0; i < cMusicItems.length; i++) {
         if (cMusicItems[i].specific[categoryName]) {
             dateInfo.push(cMusicItems[i]);
             trueCategory = dateInfo[i].specific[categoryName];
         }
     }

     for (i = 0; i < cArtItems.length; i++) {
         if (cArtItems[i].specific[categoryName]) {
             dateInfo.push(cArtItems[i]);
             trueCategory = dateInfo[i].specific[categoryName];
         }
     }

     for (i = 0; i < cSpokenWordItems.length; i++) {
         if (cSpokenWordItems[i].specific[categoryName]) {
             dateInfo.push(cSpokenWordItems[i]);
             trueCategory = dateInfo[i].specific[categoryName];
         }
     }

     for (i = 0; i < cDramaItems.length; i++) {
         if (cDramaItems[i].specific[categoryName]) {
             dateInfo.push(cDramaItems[i]);
             trueCategory = cDramaItems[i].specific[categoryName];
         }
     }

     for (i = 0; i < cFilmItems.length; i++) {
         if (cFilmItems[i].specific[categoryName]) {
             dateInfo.push(cFilmItems[i]);
             trueCategory = dateInfo[i].specific[categoryName];
         }
     }

     for (i = 0; i < cTalksItems.length; i++) {
         if (cTalksItems[i].specific[categoryName]) {
             dateInfo.push(cTalksItems[i]);
             trueCategory = dateInfo[i].specific[categoryName];
         }
     }

     for (i = 0; i < cStreetArtItems.length; i++) {
         if (cStreetArtItems[i].specific[categoryName]) {
             dateInfo.push(cStreetArtItems[i]);
             trueCategory = dateInfo[i].specific[categoryName];
         }
     }

     if (trueCategory) {
         var $page = $(pageSelector),
             $header = $page.children(":jqmData(role=header)"),
             $content = $page.children(":jqmData(role=content)");

         var markup;
         markup = "<p>" + trueCategory + "'s listings by start time :</p>";

         function dynamicSort(property) {
             return function(a, b) {
                 return (a[property] < b[property]) ? -1 : (a[property] > b[property]) ? 1 : 0;
             }
         }

         dateInfo.sort(dynamicSort("time"));

         markup += "<ul data-role='listview'>";

         for (var i = 0; i < dateInfo.length; i++) {
             markup += '<li><a href="#gig?category=' + dateInfo[i].artist + '">' + dateInfo[i].artist + '</a><br />' + dateInfo[i].time + '<li>';
         }
         markup += "</ul>";

         $header.find("h1").html(trueCategory);
         $content.html(markup);
         $page.page();
         $content.find(":jqmData(role=listview)").listview();
         $content.find(":jqmData(role=listview)").listview('refresh');
         options.dataUrl = urlObj.href;
         $.mobile.changePage($page, options);
     }
 }

 function showGig(urlObj, options) {
     var categoryInput = urlObj.hash.replace(/.*category=/, "");
     pageSelector = urlObj.hash.replace(/\?.*$/, "");
     var category = false;
     var uri = categoryInput;
     var categoryName = decodeURIComponent(uri);

     Object.size = function(obj) {
         var size = 0,
             key;
         for (key in obj) {
             if (obj.hasOwnProperty(key)) size++;
         }
         return size;
     };

     var musicSize = Object.size(categoryData.music.items);
     var artSize = Object.size(categoryData.art.items);
     var spokenWordSize = Object.size(categoryData.spokenWord.items);
     var dramaSize = Object.size(categoryData.drama.items);
     var filmSize = Object.size(categoryData.film.items);
     var talksSize = Object.size(categoryData.talks.items);
     var streetArtSize = Object.size(categoryData.streetArt.items);
     var myArray;

     for (i = 0; i < categoryData.drama.items.length; i++) {
         if (categoryData.drama.items[i].artist == categoryName) {
             category = true;
             myArray = categoryData.drama.items[i];
             urlFav = categoryData.drama.items[i];
         }
     }

     for (i = 0; i < artSize; i++) {
         if (categoryData.art.items[i].artist == categoryName) {
             category = true;
             myArray = categoryData.art.items[i];
             urlFav = categoryData.art.items[i];
         }
     }

     for (i = 0; i < musicSize; i++) {
         if (categoryData.music.items[i].artist == categoryName) {
             category = true;
             myArray = categoryData.music.items[i];
             urlFav = categoryData.music.items[i];
         }

     }

     for (i = 0; i < spokenWordSize; i++) {
         if (categoryData.spokenWord.items[i].artist == categoryName) {
             category = true;
             myArray = categoryData.spokenWord.items[i];
             urlFav = categoryData.spokenWord.items[i];
         }
     }

     for (i = 0; i < filmSize; i++) {
         if (categoryData.film.items[i].artist == categoryName) {
             category = true;
             myArray = categoryData.film.items[i];
         }
     }

     for (i = 0; i < talksSize; i++) {
         if (categoryData.talks.items[i].artist == categoryName) {
             category = true;
             myArray = categoryData.talks.items[i];
             urlFav = categoryData.talks.items[i];
         }
     }

     for (i = 0; i < streetArtSize; i++) {
         if (categoryData.streetArt.items[i].artist == categoryName) {
             category = true;
             myArray = categoryData.streetArt.items[i];
             urlFav = categoryData.streetArt.items[i];
         }
     }

     if (category) {
         var $page = $(pageSelector),
             $header = $page.children(":jqmData(role=header)"),
             $content = $page.children(":jqmData(role=content)");

         var uri23 = myArray.venue;
         var venue23 = decodeURIComponent(uri23);
         var markup = "<p></p>";
         markup += "<div>" + myArray.image + "<br /><b>" + myArray.artist + "</b></div>";
         markup += "<ul style='display: inline' 'data-role='listview' data-inset='true'>";
         markup += "<li><a href='#' id='scheduleBtn' selected='true'>schedule</a></li><li><a href='#' id='descriptionBtn' selected='true'>description</a></li><li><a href='#' id='linksBtn' selected='true'>links</a></li>";
         markup += "</ul>";
         markup += "<div id='scheduleTab'>";
         markup += "<div id='iconTab' style='display:block;float:left;width:15%;padding:3px;margin-right:3px'><ul style='float:left;list-style-type:none;padding:3px'><li><a style='display:block;padding-right:2px' href='#' id='favouritesBtn'><img src='ICONS_57X57PX/favourites_icon_57x57px.png'></a></li><li><a style='display:block;list-style-type:none;padding:3px;float:center' href='#' id='cartBtn'><img src='ICONS_57X57PX/shoppingcart2_yellow_icon_57x57px.png'></a></li><li><a style='display:block;list-style-type:none;padding:3px' href='#' id=mapBtn><img src='ICONS_57X57PX/map-locationpointer_YELLOW_icon_57x57px.png'></a></li></ul></div>";
         markup += "<div id='info' style='display:block;float:right;width:75%;padding:4px;margin-left:2px;padding-left:3px'><table border='0'><tr><td>venue: </td><td><b>" + venue23 + "</b></td></tr><tr><td>time : </td><td><b>" + myArray.time + "</b></td><tr><td>date: </td><td><b>" + myArray.date + "</b></td></tr><td>price: </td><td><b>" + myArray.price + "&nbsp Euro</b> </td></tr></table></div></div>";
         markup += "<div id='descriptionTab'>" + myArray.description + "</div>";
         markup += "<div id='linksTab'>" + myArray.links + ">" + myArray.artist + "'s official website</a></div></div>";

         $header.find("h1").html("artist");
         $content.html(markup);

         $page.page();

         $content.find(":jqmData(role=listview)").listview();
         $content.find(":jqmData(role=listview)").listview('refresh');

         options.dataUrl = urlObj.href;
         $.mobile.changePage($page, options);

         $(document).ready(function() {

             $("#scheduleTab").show();
             $("#descriptionTab").hide();
             $("#linksTab").hide();
             return true;
         });

         $("#scheduleBtn").bind("click", function(event) {
             $("#scheduleTab").show();
             $("#descriptionTab").hide();
             $("#linksTab").hide();

             return true;
         });

         $("#scheduleBtn").trigger("create");

         $("#descriptionBtn").bind("click", function(event) {
             $("#descriptionTab").show();
             $("#scheduleTab").hide();
             $("#linksTab").hide();
             return true;
         });

         $("#linksBtn").bind("click", function(event) {
             $("#linksTab").show();
             $("#descriptionTab").hide();
             $("#scheduleTab").hide();
             return true;
         });

         $("#favouritesBtn").bind("click", function(event) {
             urlFav.favourite = true;

             var testString = "";

             for (var i = 0; i < categoryData.music.items.length; i++) {
                 if (categoryData.music.items[i].favourite == true) {
                     testString = categoryData.music.items[i].artist;
                 }
             }
             for (var i = 0; i < categoryData.art.items.length; i++) {
                 if (categoryData.art.items[i].favourite == true) {
                     testString = categoryData.art.items[i].artist;
                 }
             }
             for (var i = 0; i < categoryData.spokenWord.items.length; i++) {
                 if (categoryData.spokenWord.items[i].favourite == true) {
                     testString = categoryData.spokenWord.items[i].artist;
                 }
             }
             for (var i = 0; i < categoryData.drama.items.length; i++) {
                 if (categoryData.drama.items[i].favourite == true) {
                     testString = categoryData.drama.items[i].artist;
                 }
             }
             for (var i = 0; i < categoryData.film.items.length; i++) {
                 if (categoryData.film.items[i].favourite == true) {
                     testString = categoryData.film.items[i].artist;
                 }
             }
             for (var i = 0; i < categoryData.talks.items.length; i++) {
                 if (categoryData.talks.items[i].favourite == true) {
                     testString = categoryData.talks.items[i].artist;
                 }
             }

             var url = testString;
             addUrl(url);

             $("#favouritesBtn").fadeTo('slow', 0.5, function() {
                 $("#favouritesBtn").replaceWith("<img src='ICONS_57X57PX/favourites_icon_57x57pxRED.png'>");
             });
             return true;
             return true;
         });

         function getMyUrls() {
             var myUrls;
             var storedUrls = localStorage.getItem("myUrls");
             if (storedUrls) {
                 myUrls = JSON.parse(storedUrls);
             } else {
                 myUrls = [];
                 localStorage.setItem("myUrls", JSON.stringify(myUrls));
             }
             return myUrls;
         }

         function findUrl(url) {
             var index = -1;
             var myUrls = getMyUrls();
             for (var i = 0; i < myUrls.length; i++) {
                 if (myUrls[i] === encodeURIComponent(url)) {
                     return i;
                 }
             }
             return index;
         }

         function addUrl(url) {
             var myUrls = getMyUrls();
             if (findUrl(url) === -1) {
                 myUrls = myUrls.concat(encodeURIComponent(url));
                 localStorage.setItem("myUrls", JSON.stringify(myUrls));
             }
         }

     }
 }

 function showUrlList(urlObj, options) {
     var myUrls = JSON.parse(localStorage.getItem('myUrls'));
     var $page = $("#favourites");
     var $content = $page.children(":jqmData(role=content)");
     $header = $page.children(":jqmData(role=header)");
     var markup = "<ul data-role='listview' data-split-icon='delete'>";

     for (var i = 0; i < myUrls.length; i++) {
         var uriDecode = myUrls[i];
         var myUrlDecode = decodeURIComponent(uriDecode);
         markup = markup + "<li><a href='#gig?category=" + myUrls[i] + "'>" + myUrlDecode + "</a></li>";
     }

     markup = markup + "</ul>";
     $content.html(markup);
     $header.find('h1').html("favourites");
     $page.page();
     $content.find(":jqmData(role=listview)").listview();
     $.mobile.changePage($page, options);
 }

 $(document).bind("pagebeforechange", function(e, data) {
     if (typeof data.toPage === "string") {
         var url = $.mobile.path.parseUrl(data.toPage),
             targetPageID = /^#category-item/;

         if (url.hash.search(targetPageID) !== -1) {
             showCategory(url, data.options);
             showScheduleCategory(url, data.options);
             e.preventDefault();
         }
     }
 });

 $(document).bind("pagebeforechange", function(e, data) {
     if (typeof data.toPage === "string") {
         var url = $.mobile.path.parseUrl(data.toPage),
             targetPageID = /^#category-item/;

         if (url.hash.search(targetPageID) !== -1) {
             showVenueCategory(url, data.options);
             e.preventDefault();
         }
     }
 });

 $(document).bind("pagebeforechange", function(e, data) {
     if (typeof data.toPage === "string") {
         var url = $.mobile.path.parseUrl(data.toPage),
             targetPageID = /^#gig/;

         if (url.hash.search(targetPageID) !== -1) {
             showGig(url, data.options);
             e.preventDefault();
         }
     }

 });

 $(document).bind("pagebeforechange", function(e, data) {
     if (typeof data.toPage === "string") {
         var url = $.mobile.path.parseUrl(data.toPage),
             targetPageID = /^#favourites/;

         if (url.hash.search(targetPageID) !== -1) {
             showUrlList(url, data.options);
             e.preventDefault();
         }
     }
 });