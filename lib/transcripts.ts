export interface EpisodeTranscript {
  episodeNumber: string;     // "001", "002" etc
  slug: string;              // url-safe slug like "ep-001-growing-pains"
  title: string;
  guest: string;             // guest name(s), empty string if hosts only
  guestTitle: string;
  guestCompany: string;
  guestLinkedIn: string;
  description: string;
  airDate: string;           // "October 2, 2025" formatted
  packetPushersUrl: string;
  youtubeUrl: string;
  transcript: string;        // full cleaned transcript text
}

export const transcripts: EpisodeTranscript[] = [
  {
    episodeNumber: "001",
    slug: "ep-001-growing-pains",
    title: "LIU001: Growing Pains",
    guest: "",
    guestTitle: "",
    guestCompany: "",
    guestLinkedIn: "",
    description: "Starting any new endeavor is hard. That's particularly true for a career in tech. And that's the reason Alexis Bertholf and Kevin Nanns are launching the Life In Uptime podcast. In each episode they'll sit down with engineers, leaders, and builders in tech to uncover the stories behind their careers to help you see how far tech can take you. In this debut episode, Alexis and Kevin talk about why they started the podcast, how they teamed up, and how their own career journeys led them to this new venture.",
    airDate: "October 2, 2025",
    packetPushersUrl: "https://packetpushers.net/podcasts/life-in-uptime/liu001-growing-pains",
    youtubeUrl: "https://youtu.be/31vl-Zx1Dqc",
    transcript: `Kevin Nanns (0:02 - 0:33) Welcome to Life in Uptime, the show where we talk with the people behind the networks that keep our world connected. I'm Kevin, joined by Alexis, and every week we sit down with the engineers, leaders, and builders in tech to uncover the stories behind their careers. How they started, what they've learned, and where they're headed next. Our goal is simple, to help you see how far tech can take you, no matter where you start from. I feel like I'm really channeling my announcer or game show host.

Alexis Bertholf (0:33 - 0:41) You've got a great radio voice. I gotta say guys, this week we don't have a guest, it's actually just Kevin and I.

Kevin Nanns (0:42 - 0:46) Yeah, this is episode 0.5. Half episode.

Alexis Bertholf (0:47 - 1:03) We just really wanted to come on here and have a little chat about why we're doing this. I feel like we've teased the fact that we're launching a podcast for quite a while now, but we haven't actually talked about why we decided to launch a podcast, have we?

Kevin Nanns (1:04 - 1:25) No, and it's one of those things where we're very public in our social medias, but we're not very public in what we're doing behind the scenes. And this is a great opportunity for us to have direct access to the audience, people who are listening to us, and get a little behind the scenes action of, we don't know what the hell we're doing.

Alexis Bertholf (1:27 - 1:58) Well, not only that, but we get a lot of questions from you guys. I mean, I probably get 20 to 50 DMs on a daily basis, and it's become slightly outside of the limits of human nature for me to physically respond to every comment, question, DM. And I know Kevin's been feeling the same way, and so we were brainstorming some ideas that we could continue to help all of you, and one of them was launching this podcast.

Kevin Nanns (1:59 - 2:34) Yeah, I do some AMAs, and I know that you reach out and you DM and all that kind of stuff, but that helps very few people all at once. Even my Instagram stories where I'm doing a Q&A, those only stay up for 24 hours and only get 1,000 views out of the 300,000 followers that I have. It's not really productive for the vast majority, so this is a way that we can kind of shotgun blast information to the masses, and it stays here.
So if you have a question, we can say, oh, go back to episode three of this podcast, and we talk about that subject directly.

Alexis Bertholf (2:34 - 3:27) Well, and not only that, I mean, Kevin and I are not, we're very public, but we are not the end-all be-all by any means when it comes to networking knowledge or the industry. But obviously, because we've grown these platforms over the past two years, we've got a big network either of other engineers, of professional mentors, of contacts within the industry, whether they're organizations like NANOG or the NUGS or the network user groups or vendors or training programs or universities offering training programs. We have all of these people that reach out to us with resources and stories and careers and tidbits and pieces of advice, and we thought that this would be a great way to share some of that expertise, those resources, and be able to widespread them.

Kevin Nanns (3:27 - 3:53) Yeah, I feel like I'm an average network engineer. I am nothing special. I don't have my CCIE. I haven't been working for vendors and Cisco and been deep into whatever technology. I'm just an average dude who does this nine to five, and on the side, I'm very, very public. And if I could bring that public part to the average network engineer, that's the only difference between me and a normal engineer, an average person, is that I'm more public.

Alexis Bertholf (3:53 - 3:56) At least you can claim to have been a network engineer, Kevin.

Kevin Nanns (3:57 - 4:24) Well, that's another topic where I want to talk about that too, where I think we make a good combo. I get asked the question, why do I associate myself with you? I'm not even kidding. I've gotten that question. Because you're not the typical network engineer, especially now that you've moved on to Megaport and you're doing a lot of cloud stuff and say words that I don't even understand. Half your videos, I do not understand anymore. I'm sorry.

Alexis Bertholf (4:24 - 4:25) It's okay.

Kevin Nanns (4:25 - 5:15) You're dealing with the technology that I don't deal with. But I get that question. So why are you two so intertwined? And what I find interesting is that you are an SE. You've had a completely different upbringing into networking than I have. So you have a completely different perspective of a lot of things than I do, one that I couldn't get on my own. With my experience and the people that I know, I could not get your perspective. So having someone who's completely different than you, I mean, we could not probably get anywhere opposite. I'm like this 40-year-old old dude with kids who's worked his way up through network engineering. And you're the complete opposite. You're a young female who worked her way up through aerospace engineering and worked for a vendor as her first job. Our paths are completely different.

Alexis Bertholf (5:15 - 6:08) I think it just goes to show there's no right way to take your career. And that's also something that we're hoping to explore a bit with the guests that we're bringing on this podcast. Because we get asked all the time, what certification should I take? What should my first job be? I want to apply to this, to do this, to do this. And my eventual goal is to be a senior principal solutions engineer at XYZ Company.
And there's no right way to get there. It's just your way. And Kevin and I, again, our paths are not the end-all be-all. You don't have to follow someone's exact roadmap to get to where they are. But it is good to know what options you have within the industry and kind of what doors they'll open up and where they could take you.

Kevin Nanns (6:09 - 6:21) Yeah, the classic answer is it depends. Every single answer is going to be individually tailored. There is no general step one, two, three, and four, and then you'll become a principal engineer somewhere.

Alexis Bertholf (6:22 - 6:39) No, but I think the other thing that's interesting, and Kevin and I were talking about this right before we hit record, is that when you look at our social media, we've been doing this for two and a half years. And saying we talk internally sounds weird because we don't work at the same company.

Kevin Nanns (6:39 - 6:45) It is work, though. It does feel like work. It feels a little bit like work. We have a small business here of social media.

Alexis Bertholf (6:46 - 7:18) But we'll look at TikToks that we posted a year ago, two years ago, and be like, so cringy. Oh my God, do you remember where we started? This is crazy.
And it's grown so much that if you have recently started following us or you're seeing our content now, we are very practiced at what our TikTok and our Instagram and what we put out on LinkedIn, right? All of that is pretty well set and defined. But this podcast, man, we're new at this. This is brand new. This is uncharted territory.

Kevin Nanns (7:19 - 7:33) Yeah, our first episode. So this is not the first episode we've recorded. This is actually the third or fourth episode. Third, I think, now. And what we've decided is that we suck at this. We're not very good at this at all. And it's funny.

Alexis Bertholf (7:34 - 7:45) Hopefully, when we put out the first couple episodes, the editors do a really good job of editing.

Kevin Nanns (7:45 - 8:06) If you listen to those after this and go, oh, it's not that bad. It's because of editing. The guests were amazing. We have some amazing guests lined up. These people are heavy hitters in the industry. These people are very, very insightful and are leaders in what they do. These guests are amazing. It's us. That's the problem.

Alexis Bertholf (8:07 - 8:23) Yes. Interviewing has been quite a bit more difficult than we anticipated. What was I going to say? My eye keeps watering. Hang on. Give me like 30 seconds. Hang on. Just stay there.

Kevin Nanns (8:24 - 8:28) Should I leave this part in? This is what I mean by us not being great at this.

Alexis Bertholf (8:28 - 8:34) It's only this one. No, I can't hear you. I don't have headphones in. It's only one of my eyes, too. It's not both of them. 

Kevin Nanns (8:35) Just wear a patch.

Alexis Bertholf (8:36 - 8:48) Okay, we're good. Naturally. What else did we want to talk about? If we keep this in the episode, this is what we mean. We're new at this.

Kevin Nanns (8:48 - 9:08) That's what I was saying while you were gone. I was like, if this is still in here, this is what I mean by us being terrible. It's all over the place. Alexis is using literally an old school Apple headphone microphone. The old school ones that were wired. During the episode, you can hear her rubbing her shirt and all this other stuff.

Alexis Bertholf (9:09 - 9:33) Right now, I got a DJI Osmo to travel with so that when we take videos. When we do videos for the podcast, I wanted something nicer than the camera that's on my Mac. I don't have a stand for it. It's propped up on a toaster behind my computer. We're doing our best. We're doing our best. 

Kevin Nanns (9:34) It's fun. 

Alexis Bertholf (9:35 - 10:01) It's great. It's good memories. It just goes to show when you're trying to get started, you got to just start. We're trying to remind ourselves. This is something that's hard for us because our standards right now are up here from all the content we've created. We're trying to remind ourselves we're new at this too. If you guys are here with us, you're about to go on a journey. Not just a career journey, also a podcast journey.

Kevin Nanns (10:01 - 10:35) Podcast journey. I think it's cool. It's good for us. The way I approach things is the engineering way where I come up with my best idea how it's going to go. Then I try to implement it. If something breaks, something doesn't work, then I go, okay, that didn't work. Start over. Take the stuff that did work. Take out the stuff that didn't work and try something new. That's basically what we're doing this podcast. Each episode, we're going to evolve. We'll get a little bit better, hopefully. Take some stuff out that doesn't work. Basically, what I'm saying is stick with us. Don't listen to one episode and go, this is trash.
I'm never listening to this again.

Alexis Bertholf (10:35 - 10:40) Please listen to a couple of them before you judge us too much.

Kevin Nanns (10:41 - 10:52) We'll be improving as we go. Hopefully, Alexis and I as hosts will be improving because right now we talk over each other. We're clamoring for air time.
We fight. You can't see it on the screen.

Alexis Bertholf (10:52 - 11:35) I wouldn't say that. I would say some of the issues have come from me being in Europe and my Airbnb Wi-Fi, which is questionable. Sometimes the bandwidth is good enough for me to turn my video on and sometimes it's not. We're trying to figure out, can we use hand signals to not talk over each other? We're not really sure. Like Kevin was saying, if you guys have questions or ideas or things that you would like to see, we're really putting this together for you, for the industry to create an on-demand resource.
If you have specific questions, topics, career advice, anything like that that you want us to cover, just let us know in the comments or on social media.

Kevin Nanns (11:36 - 11:57) Ideally, we're going to have a lot of guests. But also, I want to have a couple episodes where it's just Alexis and I talking about a certain topic or a certain question that we get asked over and over again because we do have very different perspectives. I'm an old school network engineer who's come up a certain way, and Alexis was gifted this career.

Alexis Bertholf (11:59 - 12:01) Raised on Meraki in Ubiquity.

Kevin Nanns (12:01 - 12:02) She was just...

Alexis Bertholf (12:02 - 12:07) And I took my CCNP in COVID with limited hands-on experience.

Kevin Nanns (12:07 - 12:24) So different. Literally, I say it all the time, but we're opposites. We're complete opposites. So I think it'll be really cool for us to talk about certain topics because we have very different perspectives. So I like to mix that in every once in a while. We'll see how it goes and working with scheduling and stuff. But I think it'll be fun.

Alexis Bertholf (12:25 - 13:45) Oh, I think the other thing, I don't know if this is the last thing, but another thing, we had a couple questions. We're hosting this on the Packet Pushers Network, which to me was a very intentional decision. This was an idea that I had kind of kicked around for a couple months, but especially working full time at Megaport, creating content full time with the travel and the events and all of the things, I didn't really have the bandwidth to put out a podcast on my own. There was just no way I was going to be able to do something and have it be a good quality product. A good quality product at the end of the day. And so hosting it with Packet Pushers made a lot of sense because we talk a lot. Kevin and I talk a lot about the community, community engagement, supporting the technical community. But Packet Pushers has a whole suite of technical podcasts. I think there's like 10 or 12 different shows that all deal with technology, with networking, with the industry. And we really wanted to support other creators and band together. And if we can help you guys discover another show like that where you can learn something or meet someone new or find something that you like, we thought it would be a great way to do that.

Kevin Nanns (13:46 - 14:29) Yeah, I mean, that's how I basically started listening to the podcast where you join. You have one podcast that kind of introduces you to the area. And then with Packet Pushers, there's wireless. There's Heavy Networking. There's security. There's operations. Like there's so many different avenues you can go down that if you're new to networking, if you're new to technology and you discover one of the other podcasts in the network, maybe it's ours. You can then pivot and not stop listening to ours, but also listen to when you have time, another area of interest and see if that's something that you might enjoy. Hearing some industry professionals talk about it will give you a great insight onto something that that's something that you would enjoy doing in the future or want to specialize in or something like that.

Alexis Bertholf (14:29 - 15:01) Yeah, I mean, they've they've got everything from basic networking. I think it's called N Is For Networking to automation experts. Really anything you could think of. Cloud. Of course, there's cloud. There has to be cloud now. There's freaking cloud. But I think that's everything that we wanted to cover. So thank you for joining us on our first ever episode of Life in Uptime. And we'll see you next time. Bye.

Kevin Nanns (15:05 - 15:27) Why was that so awkward? Why did that feel awkward? We're going to leave that part. We're going to leave this part in. If you were listening in the podcast and you felt awkward, well, it's because it was. It was very awkward. Okay. Catch you in the episode or catch the next episode. I don't know. This has been Life in Uptime. Finger guns.`,
  },
  {
    episodeNumber: "002",
    slug: "ep-002-do-you-need-a-college-degree-to-succeed-in-it",
    title: "LIU002:  Do You Need a College Degree to Succeed in IT?",
    guest: "Wes Noonan",
    guestTitle: "Cisco Systems Engineer",
    guestCompany: "Cisco",
    guestLinkedIn: "https://linkedin.com/in/wes-noonan",
    description: "A college degree can be a useful stepping stone into a tech career, and it certainly doesn't hurt to have it on your resume. But do you really need that college degree to succeed in IT? Maybe, maybe not. Today's guest is Wes Noonan, whose non-traditional path into and through a career in IT has proved otherwise. Wes is currently a Cisco Solutions Engineer, and he is the co-author of a book called Firewall Fundamentals. He carved his own path into the IT industry through hands-on experience and a passion for problem solving.",
    airDate: "October 16, 2025",
    packetPushersUrl: "https://packetpushers.net/podcasts/life-in-uptime/liu002-do-you-need-a-college-degree-to-succeed-in-it",
    youtubeUrl: "https://youtu.be/cgus1Dp0gWE",
    transcript: `Kevin Nanns (0:04 - 0:15) Welcome to Life in Uptime. I am one of your hosts, Kevin Nanns, Adjacent Node everywhere on social media, and I am joined with my co-host, Alexis Berthoff. Alexis, how are you today?
Alexis Bertholf (0:15 - 0:46) I'm doing great, and we have a really special guest for you guys today. His name is Wes Noonan. Now, Wes is currently a Cisco Solutions Engineer, and he was the co-author of a book called Firewall Fundamentals. Now, Wes had no formal college degree. He carved his own path into the IT industry through hands-on experience and his passion for problem solving. Known for his reflective and thoughtful insights, especially on LinkedIn, I'm super excited to have him here today. Wes, how are you?
Wes Noonan (0:47 - 0:50) I'm doing good. Appreciate you all inviting me on this thing.
Alexis Bertholf (0:51 - 0:51) Absolutely.
Kevin Nanns (0:53 - 0:59) Now, all that was very impressive, but more importantly, Wes, were you Alexis's mentor at Cisco?
Wes Noonan (1:01 - 1:11) I don't know if I should admit to that, but yes, I was. I am responsible for the good parts. The bad parts was somebody else.
Alexis Bertholf (1:12 - 1:17) Well, blame it on childhood trauma or something like that. Isn't that what everyone blames their problems on nowadays?
Kevin Nanns (1:18 - 1:58) That's what I blame my problems on. Well, thanks for joining, Wes. Wes's career has an interesting shape to it because, I don't know, at least for me, I come from the place where you go to college and you major in what you want to do, and then you're stuck doing that for the rest of your life. That's what I was growing up. That was my mindset of what I had to do. But Wes, you have a different path. You don't have a college degree. You went into the military and you were able to transition from the military and you now work for the largest networking company in the world. 
Wes Noonan (1:59)Correct. 
Kevin Nanns (2:00 - 2:08) Could you tell us a little bit about why you decided to forego college, get into the military and start your path?
Wes Noonan (2:09 - 3:43) Sure. Yeah. So this is going to the way back machine. In high school, I was in JROTC, did a lot of that. And in high school, I was a little bit of a punk, quite frankly. So college just didn't feel like where I wanted to be. I actually had some scholarships lined up to go to college. And my parents, we were living in Germany at the time. My stepdad was in the army. They took off for their anniversary and I took a train from where we were living down in Ansbach to Frankfurt and signed my paperwork to join the Marine Corps. Decided that was where I wanted to go. I did drill team in high school.
The Marine Corps silent drill team is hands down the best drill team in any military anywhere on the planet. Phenomenal, phenomenal group. And so I decided that's what I wanted to do. Right. And in order to do that, you've got to join as infantry, open contract. So I joined as 03, open contract, right? Rifleman. I was going to be a bullet catcher, basically. And that's how I got my start, right? I get to boot camp and decide, you know, this is what I want to do. Get to about week 11 and they sit you down and ask you, you know, hey, what are you going to do? And so I make the comment. I say, you know, I'm 03, open contract. I'm going to join the silent drill platoon. And the drill instructor starts laughing at me, right?
He goes, Noonan, how tall are you? I said, I'm 5'9". He goes, yeah, you got to be 5'11 to 6'1".
You ain't going to make it, kid. Next. And that was the end of my drill team. Wow. So yeah, it was kind of an interesting start. I didn't even join the military to join, you know, to do IT.
Alexis Bertholf (3:43 - 3:46) Also, you were in Germany at the time.
Wes Noonan (3:47 - 4:27) I was in Germany. Yeah, yeah. My parents got back and asked if anything exciting had happened while they were gone. And I was like, oh, a little bit. And I showed my mom the paperwork and I had signed a six-year contract, actually. But I was too young to sign a six-year contract without parental consent. And my mom refused to sign the paperwork. Right now, fast forward, I get into week 11 to discover my whole dream of what I was going to do in the Marine Corps for the next six years is not going to come to pass. Well, my mom refused to sign that six-year contract. She would only sign a four-year contract. Told me, look, if you really like it, you can re-enlist and stay in, no big deal. But I'm not going to sign for six years out of the gate. So the wisdom of mothers. Mom was always right
Kevin Nanns (4:28 - 4:34). Yeah. Mom's always right.
Alexis Bertholf (4:34 - 4:36) So how did you go from...
Kevin Nanns (4:36 - 4:37) Oh, man. Go ahead, Alexis.
Alexis Bertholf (4:37 - 4:48) Everyone talk at once. I was going to say, so how did you go from wanting to be in the infantry to actually getting into IT? Were you good at computers before? Is this something that was introduced to you while you were in the military?
Wes Noonan (4:49 - 6:10) Yeah, no, I had never really used computers before in my life. So, you know, my family wasn't a family, you know, this is back in the eighties. We didn't have the money for computers, things of that nature. Right. We were lucky we had a VCR and a TV. And so I joined the Marine Corps and I'm doing infantry stuff. Right. I wind up, you know, fairly smart guy, I think. And so rather than just being an 0311 infantry guy, I was 0313, which means I got to drive an LAV. And so we'd gone on a deployment, what they call a West Pack. And so I'd done the West Pack. And when you come back, you frequently have temporary duty that they give you for six months, which is kind of, it's kind of lazy duty.
Right. I mean, you've been on a deployment, you've been gone. And so it's kind of six months of easy work before you go into the next cycle of a deployment. And so I get back and the first sergeant that I had when I first joined the Marine Corps was the first sergeant assigning duties. And he goes, hey, Noonan, what do you want to do? And I said, you know, Top, I don't know. What do you got? And he goes, well, I've got supply and I've got comm. And I thought the idea of sitting in a warehouse in the heat in California, handing out gear just did not sound very much fun. And he goes, hey, what do you know about computers? And I said, you know, Top, I know as much as anybody. I mean, I know how to turn them on.
And he goes, great. I'm going to send you to Division ISMO. You're going to be our new computer tech. That was my first introduction to computers. 
Alexis Bertholf (6:11) And how old were you then?
Kevin Nanns (6:12) You're hired. 
Wes Noonan (6:13 - 8:32) I was 20 years old at that point. Yeah. So I get started with that.
And then in classic military, just, I don't know, dysfunction, it's supposed to be a six month deployment, they lose my paperwork. So instead of going to Division ISMO for six months, I wind up there for 15. So I spent 15 months just training on small computer system specialists. So, you know, PC break fix, monitor repair, the Marine Corps ran Banyan Vines Network. So I learned Banyan Vines server administration, you know, learned how to do cabling, all of that fun stuff. And then kind of a funny story. I was kind of skating in the military. By that I meant I had two places to live. So I had main side, I could live on base in main side, which is where Division ISMO was. But I still had my barracks in Las Flores with my old unit, First LAR, which was closer to the beach. So if I was going to the beach, I would stay in Flores. If I was going to like Temecula, I'd stay in main side. And I was only keeping one of those rooms clean. So like 15 months in my room in Las Flores gets inspected. And they're like, who in the F lives here? Like, who is this person? Because nobody had any idea who I was. And so originally, they think that I've gone like AWOL or something. And I'm like, no, no, no. You guys told me to go here and nobody gave me any paperwork to say come back in six months. Like I've been doing what I've supposed to be doing. But anyhow, I get back in three months to get out. And I think, all right, I like this computer stuff. Like, you know, being in infantry, there's no translatable job skill, right? But this computer stuff is pretty cool. Like, I like it. And it intrigues me. So I go to reenlist and try to do what they call a lateral move, a lat move, and switch from 0313 to 9986 at the time was the MOS. And the career planner goes, well, reenlist first, and then we'll lat move you. And I'm like, ah, no.
This is how I got in the Marine Corps in the first place. Right? Lat move me into computers, and then I will reenlist. And they wouldn't do it. So I left the Marine Corps and the rest is history. Yeah.
Alexis Bertholf (8:33 - 8:51) So where did you go after that? What was, you knew you liked computers. I know some people, at least the people I've talked to, sometimes finding a job as you're transitioning out is really difficult. There's some programs for it today, but I imagine those weren't in place back when you got out of the military.
Wes Noonan (8:52 - 10:42) No, no, there was none of that. So I moved back home to San Antonio, Texas, and I got a job at a little father and son shop doing cabling. Right? So all of the computer stuff that I did didn't really do any of that for the first year or so when I got out of the Marine Corps. I'm working for this guy and his son, and they had a big contract with Union Pacific. And I would travel all over the state of Texas running cable, right? So this is back in the days of having to like splice and polish fiber. You know, category three had just come out, category three cabling. Everything else was phone cabling. You know, learning how to work 66 blocks and 110 blocks and all of that fun stuff. So I kind of went from doing PC break fix in the Marine Corps and server administration in the Marine Corps, and then a little bit of cabling to I'm doing hardcore cable plant design and installation, you know, running conduit, running panduit raceways, all of that fun stuff. And then story as old as time, right? If you're not the father of the son, you got no future in a father and son company. And so I wound up leaving and getting a job with an independent school district, Edgewood in San Antonio. And they brought me on board as a full tilt server admin and did that for, I guess, six months while I was kind of sort of going to community college. Um, and then got a phone call from a friend of mine in the Marine Corps and he goes, Hey man, uh, I don't know how close San Antonio is to Houston, but there's a job for Banyan Vines admin in Houston. That's paying like $68,000 a year. I don't get out soon enough. You should see if you can get the job and I'm making $21,000 a year. And I'm like, heck yes, let's go to Houston. Uh, and, and that's how I wound up moving to Houston was, uh, for this Banyan Vines job.
Kevin Nanns (10:43 - 10:50) Wow. And at this point you had no certifications, nothing other than your experience in the military and your previous work experience.
Wes Noonan (10:50 - 11:01) Yeah. Nothing other than, than my experience in the military. I actually thought I had Banyan Vines certifications, right. Which is kind of a funny story because I got hired for this job. Go ahead.
Alexis Bertholf (11:01 - 11:03) Uh, Wes, what is Banyan Vines?
Wes Noonan (11:04 - 13:41) Ah, now you're making me feel old Alexis. So Banyan Vines was a network operating system that came out in the mid eighties, uh, in late eighties, um, that was used predominantly by banks and the military. Right. And so this is pre-TCP/IP and the internet and all that kind of stuff. None of that existed in the timeframe that I'm talking about. Um, not at least to the that you could run mail on, you could do file sharing, things of that nature. Uh, and that's what the Marine Corps used, right. They used it for messaging, uh, and they used it for storing data, things of that nature. Um, but it was on its, its way out, right. Um, there was a, a new, new player in town. Um, the small company called Microsoft had, uh, just come up and they released something called NT, uh, 3.51. Um, Novell Network was dominating the market. They had 60, 70% market share. It was crazy. Um, and the job in Houston was actually with a bank. So that's why they use Banyan Vines, but they were in the process of migrating from Banyan to Novell. Well, they hired me through a contract company because I was Banyan Vines certified, right? I had this knowledge. Well, the certificates that you get in the Marine Corps are different from actual Vines certifications.
And about three months into the gig, we all realized, while I have all the knowledge, the Marine Corps certificates I had weren't certified. So I wound up having to go take a Banyan Vines course real fast because Banyan required you to take the course in order to take the exam. You couldn't just go take the exam. So I took the course, took the exam, got certified, but I knew Banyan Vines was not the future. And I had in front of me on one hand, Novell Network, and then on the other hand, this new company, Microsoft. Um, I could get the Novell Network experience on the job because that's what, what Bank United at the time, that's what Bank United was moving towards. So in 1997, I think it was, I decided to take Microsoft courses. So I went and got my MCSE, right? Paid like 10 grand out of pocket.
There was no financing. There was no nothing, right? The financing was an 18% credit card kind of a thing in order to get Microsoft certified, because I thought that that's the future I would have in technology. I was betting big on Microsoft. Yeah, it's a huge gamble. Like I say, it worked out.
Alexis Bertholf (13:43 - 13:53) Wow. Which I think it's safe to say a lot of certifications have, have they come down in price since then? I don't know that I've heard of anyone recently taking a certification that costs $10,000.
Wes Noonan (13:54 - 14:48) Yeah. So this was through Southern Methodist University. They had a program for technical training that was based on, at the time the MCSE was, I believe it was six certification exams that you had to take and pass in order to get your MCSE. You had like four core exams and then two elective exams. And so this was the whole curriculum, right? And this was my first introduction actually to teaching and training was actually taking these classes. And I enjoyed the curriculum so much that I decided to become a Microsoft certified trainer. And a year later, I wound up teaching Microsoft curriculum at Southern Methodist University. So it's kind of funky how, how the world turns, right? You, you, you expect to do one thing and you think you're going to do X. And next thing you know, you're doing Y. You know, I thought I was going to do Banyan Vines.
Now I'm doing Microsoft. And then I think I'm just going to learn Microsoft. The next thing I know, I'm teaching people Microsoft.
Alexis Bertholf (14:49 - 15:07) Yeah. I think that's a lot on, especially how technology changes, right? I mean, especially in this industry, you just never know what's coming out, what's going to be next. If you stuck with Banyan Vines, I mean, I've never heard of Banyan Vines. I'm not going to lie. This was, today was the first time.
Wes Noonan (15:08 - 15:40) Yeah. Banyan Vines was, was a career that was going to end, you know, around you know, 1999, 2000, like that was the end of it. So yeah, it's, it's, it's a testament to one of the things I think you have to have to be successful in this industry, right? Which is an insatiable curiosity. Like if you're not every day curious and intrigued about something you don't know about technology, I honestly don't know why you stay in this industry. Cause that is the one thing that makes it fun for me is it's the constant challenge of learning.
Kevin Nanns (15:42 - 16:08) That's how I tell a lot of people who are interested in IT and they want to get into IT. And the first question I ask them is, you know, are you actually curious about how technology works? That's like the number one indicator for me that you are going to be successful in IT or not, is if you have a general curiosity of how things work, you want to figure them out just for the sake of learning. It's not just, you know, just to get paid, just to figure out cause it's my job, but genuinely curious on how things work.
Wes Noonan (16:08 - 16:09) A hundred percent.
Kevin Nanns (16:11 - 16:27) Okay. So you got your Microsoft certifications. Now going from server admin and Microsoft certified into networking, I feel like that's quite a leap.
How did you bridge that gap?
Wes Noonan (16:27 - 17:08) So that was another thing that was interesting. So when I was teaching the Microsoft classes, you know, I would teach exchange administration or SQL administration or active directory administration. The class that I enjoyed teaching the most though was actually the Microsoft TCP/IP class. Like I loved it. There was something about networking and, you know, the OSI model and how that all worked, the structure that it provided just clicked in my brain. Like I loved it. I joke that I can take any situation and apply the OSI model to it to fix it. Not just technical, like, you know, you've got issues in relationships. Let's work through the OSI model and we'll figure out how we fix this problem. Right?
Kevin Nanns (17:09 - 17:11) Do you work top down or bottom up?
Wes Noonan (17:13 - 17:18) It depends, but as a general rule of thumb, always start at layer one, right?
Kevin Nanns (17:18 - 17:20) Always start at the I agree.
Wes Noonan (17:22 - 18:04) But yeah, so I'm doing that and then this company Cisco's out, right? And they're talking about how they're going to change the internet and all of this fun stuff. And again, you got to keep in mind perspective, right? This is back in the late nineties, right? Cisco wasn't the force that it is today. And so they wanted to develop, SMU wanted to develop some network curriculum. And so I decided to write a course for them. So I actually developed the CCNA and at the time it was Nortel Networks. So it was a CCNA Nortel class because we weren't delivering certified Cisco training, right? This was all homegrown homebrew. And we would turn out people and get them their CCNA.
Alexis Bertholf (18:05 - 18:11) Oh, I was going to say, was this pre-CCNA or you guys became like certified to teach people in the CCNA?
Wes Noonan (18:12 - 19:08) It was in the early days of CCNA. So we were never certified by Cisco, right? I want to be clear about that. I don't even know that we were necessarily certified by Microsoft, but we were able to use various publications that were out, exam guides, things of that nature. And then we would teach people what they needed to know. So that was kind of a focus of the course that I built. So I actually started off with cabling, right? You get to punch down an RJ45 and you get to wire up your switches physically. And then we talk about how you configure a switch, right? And we get into IP addressing and we get into routing protocols and we get into layer two protocols and spanning tree and all of that fun stuff. But we literally started off with, here's a bunch of cable and here's a punch down tool. And you need to know the difference between T568A and T568B. Otherwise you're not going to be able to talk.
Alexis Bertholf (19:09 - 19:35) Was it a bit intimidating to you because you went from doing cabling, doing a lot of general computer work, then to the Microsoft admin, the Microsoft certifications, teaching those, which is probably where you got your feet wet in teaching other people. But then you pivoted into teaching networking, even though, correct me if I'm wrong, you hadn't worked in networking beforehand.
Wes Noonan (19:36 - 21:37) I had done dabbling in networking. At the time, you kind of had to be a jack of all trades because there wasn't the specialization that exists today in technology. And so it was very common for you to have experience on a help desk and experience with PC support and experience with server support and experience with networking support. By no means was I a routing guru though, and so yeah, it's super intimidating. That's one of the things that I think people constantly think it only happens to them, which is imposter syndrome. And folks don't realize everybody experiences this, whether they'll admit it or not is a different thing, but everybody has an imposter syndrome. And here you've got me. I've got no college degree. I've got no teaching certification. The closest I've got is I'm a Microsoft certified trainer. And here I am teaching at Southern Methodist University on this technical curriculum. It was intimidating as all get out and you're constantly doubting, are you good enough? But you would teach people and it's a funny story. Actually, I was in some training this February and I'm in a class at Cisco and one of my coworkers at Cisco, who I hadn't really met, he's like, hey, you're from Houston, right? I go, yeah. He goes, did you used to teach at SMU? And I said, I did because you used to use markers and you would put markers together to show how a packet is built, to show how the TCP headers work and how the IP headers work and how the data payload works and dah, dah, dah, dah, dah. And I go, yeah, yeah, that was me. And he goes, dude, I still remember that to this day. Now we're talking 25, 26 years later. So you hear stuff like that and you go, all right, maybe I was okay at what I did.
Kevin Nanns (21:38 - 21:40) It just took you 25 years to realize that, right?
Wes Noonan (21:41 - 21:44) Correct. The other 24 years I was like, ah, I was terrible.
Alexis Bertholf (21:46 - 22:06) Was there a moment during all of this when you realized this is what I'm supposed to be doing? Even with the imposter syndrome and all the hurdles and being pushed around, was there a moment you realized, yeah, I belong here. If you're reading this, you can get a free t-shirt.  Please email summerset.banks@packetpushers.net for details. Even though I'm still making my way, I'm doing this my way, maybe I didn't follow a traditional path.
Wes Noonan (22:07 - 23:30) Yeah. It was when I was teaching. There's times where I was in class where you would see things and I've got a ton of stories around that. I had a guy that went to class and he was a butcher at Kroger. That was his career. It's what he'd done for years. And he wound up becoming an outstanding Microsoft technician. You realize, man, you're changing people's lives. And that's pretty cool. I had another guy that he was a lawyer, law degree, the whole nine yards, but he didn't have a passion for it. He didn't enjoy it. And Kevin, to your point, he was curious about technology. And so he took these classes because he actually wanted to go from law to IT because he enjoyed IT. He didn't enjoy the law. So you're able to influence folks and help folks achieve more than maybe they thought that they could. And that's a pretty good ego stroke. That's when I was like, you know what, I'm where I need to be. I'm enjoying what I'm doing. Don't get me wrong. There's ups and downs. And there's been a lot of lessons learned since that time. I look back at 25 years ago and sometimes go, man, how did that guy make it out? Because holy smokes, he was not very smart. But time wisens us all.
Alexis Bertholf (23:32 - 24:02) I think that's one of the biggest things, especially doing what Kevin and I do on social media. I mean, the technology is awesome. Don't get me wrong.
Like you said, you can't work in this field unless you're curious and you actually are passionate about the technology. But I think a bigger thing for me is the people and being able to get those DMs and comments saying, hey, you know, this really helped me that I was able to use this in a meeting with my boss. You gave me a new idea of what technology I want to pursue. That to me is always more meaningful.
Wes Noonan (24:05 - 25:16) Yeah, you're spot on. But it's interesting, right? So Alexis, when I was your age, I didn't have that insight. When I was your age, I was the guy that was like, you know what, just get out of the way. Just get out of the way. Let me sit in front of the keyboard and I'll fix it. So I wasn't the most helpful person early in my career. I was arrogant. I was kind of an a-hole about things. I knew what I knew. And early in my career, I had a boss tell me one time, he goes, Wes, when you talk, there's always an implied, comma, you dumb at the end of everything you make. And he goes, you're going to have to work on that if you want to go somewhere in this industry. Like you're only going to go so high and then that's going to be a barrier for you. And nobody had ever said that to me. I'd never thought about it that way. I didn't think I was doing that, but I was. And so you have folks that mentor you that help you figure out your path through this, right? Because none of us gets here on their own and nobody gets here by accident. You've got an army that supports you and helps you whether you realize it or not.
Kevin Nanns (25:18 - 25:33) So speaking of mentors, I'm curious, Wes, how did, so Wes, you are Alexis's, quote unquote, mentor. How did that happen? How did you guys get paired up and become the mentor of our fair Alexis here?
Wes Noonan (25:34 - 25:39) So this is kind of funny and I may overshare a little bit here, but- It's fine.
Kevin Nanns (25:39 - 25:40) It's perfect.
Wes Noonan (25:40 - 26:28) So I had a buddy of mine, a coworker, a guy named Chris Moye. And Chris was an SE manager who was in charge of this program. And he and I had worked on some projects within Cisco. And one of the things I think I've got a little bit of a reputation for is I'm pretty direct about what's going on, right? If there's an issue, I say, hey, there's an issue. Here's how I think we should fix it. And one of the things that was a challenge for Cisco was the CSAP program that they had is a great program, but frequently there's a gap between what the students are taught in CSAP and how it actually works in the field, right? Because you can't tell everybody all the ugliness out of the gate, right? Otherwise, nobody would want to do it.
Kevin Nanns (26:29 - 26:32) And for those who don't know, what is CSAP? Sorry.
Wes Noonan (26:32 - 26:40) CSAP is the Cisco Sales Associate Program. My apologies. I'm used to Cisco acronyms there. So this is a program that Cisco has- Go ahead, Alexis.
Alexis Bertholf (26:40 - 27:17) I was going to say, it's basically a one-year accelerator. So as part of Cisco's initiative to diversify their workforce, typically being a Cisco lessee is a very senior role, right? You've worked a couple of jobs. You've got hands-on experience. It's something that you move to a little bit deeper into your career. But to try to diversify the train of thought, they wanted to make an accelerator program that would help younger people get into their sales engineering team or solutions engineering or systems engineering. It's changed names several times. I believe it's solutions engineers right now, right?
Kevin Nanns (27:18 - 27:18) It is now.
Alexis Bertholf (27:18 - 27:55) It is. So to help bring some younger people into the field, they decided to do this program. It's actually been around for, I think, 20 years now.
And it's gone through several phases. It changes a little bit. But when I joined, it was an accelerator program out of college where you could join Cisco with no experience.
And within one year, you'd have taken your CCNA, CCNP. You did a bunch of labs, whiteboarding. You had assigned mentors. You got architecture training. And everything was super deep and hands-on and very intensive. And then you get pushed in front of customers and told to support them. It was wonderful.
Wes Noonan (27:57 - 28:51) Yeah. So Chris hits me up and goes, hey, we've got a new crew coming through. I need somebody who can tell them how it actually works in the field.
We're turning them loose to the field and they're not prepared. So would you be interested in mentoring and helping out? And I'm like, sure, man, let's do it. And so off we went. Technically, Alexis was officially actually the second mentor that I had in the program. I had one prior to Alexis. But I haven't looked back on that. It's been an incredible source of joy for me to see all of these folks that I've been able to help in any way get to where they want to be in their lives and their careers, all of that fun stuff. So yeah, it was a little bit of dumb luck, a little bit of knowing the right people and having a reputation that's a good reputation.
Kevin Nanns (28:53 - 29:14) So many places don't provide mentorship. Don't have a dedicated person be like, hey, go mentor the new hires. And the fact that you were given that opportunity and it worked out really well is awesome because, man, I wish I had a mentor at some of the places I worked at. They just kind of throw you to the fire and go, good luck. Here, you're on call. Go have fun.
Wes Noonan (29:16 - 30:27) Yeah, it's definitely one of the things that I think Cisco does well. There's both structured and formal mentorship within Cisco as well as unstructured and informal. I probably fall a little bit more into the second category than the first. I mean, I have done some structured mentoring, but the reality is I'm not a leader at Cisco. And what I mean by that is I'm not an SE manager or a director or a VP or something like that. I'm just an SE, just like any other SE at Cisco. I've been doing it a good long while, so I've got a little bit of experience that backs me. But it's been interesting because I've mentored other SEs. I've mentored SE managers. I've mentored AMs or AEs, account executives. And they all provide growth to me. That's the secret of mentoring is everybody thinks when you mentor somebody, you're doing it for the benefit of Alexis, which is true. But I'm also selfishly doing it for my benefit because it makes me a better engineer. It makes me a better person. It makes me a better leader by doing these things.
Alexis Bertholf (30:27 - 30:32) I actually taught Wes how to post on LinkedIn, believe it or not.
Wes Noonan (30:32 - 30:37) She did. She drugged me kicking and screaming into LinkedIn.
Alexis Bertholf (30:38 - 31:08) I think what I said was, hey, Wes, you added me as a friend on Facebook. And I've noticed that when you post on Facebook, you post these giant wall of text rants about hunting, about the traffic in Houston, about the local fire department. You realize you could post those same rants on LinkedIn about technology. And he was like, really? You think anyone would care? And I was like, oh, there's so many people who would care.
Wes Noonan (31:09 - 31:30) That is a hundred percent true story. I think I actually told you nobody is interested in listening to an old man ramble about technology. And she's like, you would be amazed at how many people want to hear the stories that you have. So it's all Alexis's fault. That's what I'm sticking with.
Kevin Nanns (31:31 - 31:37) Well, yeah, it's half a social media is just people ranting and raving and kind of just putting it out there and seeing what sticks.
Wes Noonan (31:37 - 31:55) Yeah. I mean, it's interesting, right? It's another old lesson that many people have heard, right? Don't bring me problems, bring me solutions. That's one of the things I like about LinkedIn is I try to say, okay, here's a problem, but here's a solution. And sometimes it sticks and sometimes it's just me griping.
Alexis Bertholf (31:57 - 32:19) Oh, go ahead. I was just going to say, if we could backtrack just a little bit, I think we skipped ahead. You were teaching at Southern Methodist University. How did you actually go from teaching networking at university to getting into Cisco and not only that, but getting into sales at Cisco?
Wes Noonan (32:20 - 37:41) Yeah. So that is a circuitous route. So when I was doing the CCNA curriculum back in, you know, 99, 2000, 2001, 2002, that's when I was convinced I was actually going to join Cisco. I actually interviewed, Cisco used to run a tech facility here in Houston. And I actually interviewed for that tech role. I was working in IT at the time and wanted to join Cisco because it's Cisco. And it's funny, again, small world. I go in for my technical interview and the lady across the desk that's doing my technical interview, I actually see her walking down the hall and I'm like, what are you doing here? She's like, what are you doing here? And I say that because she was one of my students. So I had taught her Microsoft and Cisco CCNA a couple years ago. And she's like, well, I'm here to do your technical interview. And I'm like, okay. She's like, well, since you've taught me pretty much everything I know about networking, there's not really much for me to interview you about. What do you want to know about the job? Right. So we start talking. And the long story short is we couldn't make the money work. Cisco wasn't paying what I needed to get paid at the time. And so I wrote off Cisco. I wind up getting a job where I'm doing a lot of hardcore Microsoft stuff, Microsoft Cluster Server, like I'm getting deep in the weeds on Microsoft. And I'm enjoying it. Not doing a whole lot of networking at that point. I mean, I know networking basics and fundamentals, but my primary focus is on the server side of the house, the application side of the house, wind up getting laid off. And it started doing some security stuff at that time. And because of some contacts I had through the Microsoft communities, that's when I did the majority of the book publishing that I've done. So I'm not working. I got plenty of time to write. So I start writing books for folks and produce hardening network infrastructure and a CISSP study guide with Roberta Bragg. I wound up doing firewall fundamentals with Ido Dubrowski, a Hacking Exposed book. I did a whole bunch of books. People can look them up. But I really got into the security side of the house.
I get hired by an old boss of mine that had been at the company that I'd been laid off. He goes, hey, I'm building a new team to do what we were doing over there. I need somebody to run the lab infrastructure to help with, at the time, we didn't know it was called this, but it was shadow IT. We were basically trying to run our own engineering-led IT department because IT wasn't responsive enough to what R&D engineering needed. And I started doing that. Hardcore Microsoft, hardcore in security. And then there's this new cat on the block, this company called VMware, that they're promising to revolutionize how the data center works. And they're talking all this nonsense about how you can run multiple virtual machines on a single piece of physical hardware. And I saw the new pony I was going to attach my wagon to. And I said, okay, I've done a bunch of security stuff. I've done Microsoft stuff. I've done Novell stuff. This VMware stuff and virtualization looks pretty interesting. And this is 2005, six, seven, eight timeframe. And so I go hell-bent on virtualization. At the time, I ended up building the largest VMware deployment in Houston. At the time, we had a few thousand virtual machines running on about 120 ESX hosts and was loving it. Was doing that and got to a point in the career where the company I was at had gone through a lot of changes. It was time for me to leave. And again, I'm compute-centric at this point. I'd heard about this UCS platform that had, or I'm sorry, that Cisco had. And had Cisco actually come out when I was working at NetIQ at the time and wanted to sell me UCS for all of our virtualization servers. And I'll never forget telling the AM at the time, he still works at Cisco, guy's name is Lloyd Gazdia. I said, Lloyd, Cisco makes crap servers. I'm not interested in crap server 2.0 from Cisco. We're a Dell shop. Talk to me about switches and routers that we need. And that was the end of the conversation. That's how dismissive I was about it. But I'd been reading about how it worked. And so I actually took a job doing UCS deployments for a company. They had just purchased UCS, wanted somebody to deploy it. So this goes back to, I'd never done it before, but I was curious if it would work the way I thought it would work based on what I'd read and what I'd seen, the learning that I'd done. And so I got the job, did that deployment, and then had a buddy of mine that again, it's so much about who you know in this industry. He was at Cisco. We'd worked together at NetIQ. And he goes, hey man, they're hiring engineers at Cisco. And the guy's name is Chad Uretzky. I said, Chad, I said, dude, I'm not a hardcore network guy. Like I'm doing so much servers and data centers and storage and virtualization. He goes, Wes, we have a ton of network guys at Cisco. We need people who know servers. And long story short is that's how I got on board at Cisco. Not for my networking knowledge, for my server and compute knowledge.
Alexis Bertholf (37:41 - 37:45) That's crazy. It's crazy that you wrote off UCS at first too.
Wes Noonan (37:46 - 38:23) Oh, and you know how I am about UCS. I'm passionate about UCS. It is hands down the best compute platform I've ever seen in my entire life. It is truly revolutionary what it does, right? That's not me drinking the Cisco Kool-Aid. That was me using it as a customer. But yeah, I was that guy that was like, no, no, no, Cisco's just a networking company. That's all Cisco makes, which is even less true today, right? That was back in 2010, 2011 when I made that statement. Now, don't get me wrong, we make some cool networking gear. Cisco is so much more than a networking company.
Alexis Bertholf (38:23 - 38:53) So how going from the traditional, very traditional military leadership structure over into university and then into corporate or like very corporate America, right? You didn't just join a small corporation, you joined a huge corporation. How did your military training early on impact your transition into corporate life or was it a bit of a transition?
Wes Noonan (38:55 - 40:09) Oh, it was a huge transition, right? So there's an expression that I use that probably not the most PC, but it entertains me to tell the story. The chain of command in the military, right?  How does the chain of command work?  I take this here chain and I beat you with it till you obey my commands. Like that's the military mindset. You've been given an order, you go do that. Well, then you join the civilian side of the house and you're like, go do this. No, no, I said you need to go do this. Why do I got to go do that? Like, no, if you're going to talk to me like that, you can do it, right? And so you have to learn that what works in terms of motivation and getting things done in the military definitely does not translate to the civilian world, right? You can't just, you know, issue blind orders without providing more information, right? Folks want to know why they're doing things. And even in the military, they should be doing that. They don't always. And so that was a struggle, right? Figuring out how to communicate because I was used to communicating in the military with my military peers where, you know, we could be crass and we could be harsh with each other.  That doesn't always translate to the civilian side of the house.
Alexis Bertholf (40:09 - 40:23) I was going to ask what, uh, what would you say the biggest difference actually, actually is if you could put your finger on it? Is it just chain of command? I've had a few experiences with chain of command, which we can laugh about later on.
Wes Noonan (40:25 - 41:55) Yes. Yeah, it's, it is how to sum it up. So, so in the military, everybody is there for, for one cohesive purpose, right? Everybody has one job that they're driving towards, period, end of story. Everybody's volunteered to be there. So you're not there by accident, right? You chose to be in this situation. And so the motivation and what it takes to get people to do something sometimes really is as simple as just telling them to do it and boom, it gets done. That's not the way it works in the civilian world, right? People have choices. They can choose to leave. You treat people badly, they'll leave the company and go somewhere else, right? I'm proof of that. I have left companies because of situations like that. And so you have to learn how to speak to people and not at people, if that makes sense. That was a struggle for me coming out of the Marine Corps. Some of it's also my personality, right? That I think is the biggest thing is just that, that fundamental culture shift of not everybody is working at Cisco, for example, because they have this passion for the mission and the cause and what Cisco is doing. Some people are working at Cisco because it's just a good paycheck. And you have to acknowledge that, right? And realize that what it takes to sometimes get them to do what you may need isn't the same way as you can do it when you were in the military.
Kevin Nanns (41:57 - 42:32) Isn't, I don't know, I come from the public sector, so I don't have a ton of experience in the corporate world. But my vision of the corporate world is very militaristic, where leadership wants everyone to have a common goal, all to reach quarterly, whatever numbers. And they call things like the war room. And they hype it up so that it feels like they're trying to channel their inner military. Has that been an experience for you or is that, am I just completely imagining it wrong?
Wes Noonan (42:32 - 42:58) No, no, I think they do try to do that, right? I think what the difference is, is you get a bunch of, you get a platoon of Marines and you get them fired up about whatever it is. And they're hooting and they're hollering and they're ready to go to war, right? If you try to do that same thing about, hey, we need to get this training done this quarter. Yeah. Oh, okay.
Kevin Nanns (42:58 - 43:00) People are going, whoo.
Wes Noonan (43:00 - 44:26) Yeah. They're not hooping and hollering. All right, let's go, take this mind tickle. It just doesn't work that way, right? And so you wind up having to change a little bit about how you communicate. I think you can still bring that value, that concept of esprit de corps that the military has mastered. That doesn't translate throughout the corporate world. But I think a little bit of it is good to have. I've been on teams that have great esprit de corps and they are the most fun teams to work with, right? Because we're excited about what we're doing. We'll still gripe about the things we don't like, right? But we get it done. And then I've been on teams where it's just silence. Like, all right, let's do this thing. Okay, let's do that thing. And it's not that that's a bad team, but I don't have as much fun on those teams. I'd have a lot more fun on the teams where everybody talks and jokes and you feel like you're in the boat together. Because especially in sales, right, it's easy to be on an island. It's easy to be, you know, here's my customers and I only need to worry about my customers. Nothing else matters. And I think that's a trap you can fall into, especially it translates to technology, right? I'm a networking guy. That's a server issue, right? I'm a storage guy. That's not my problem. That's your problem. You know, that finger happens in IT all the time. It's not healthy.
Kevin Nanns (44:27 - 45:11) Yeah. And it's really easy to do. It's really easy trap to fall into because everyone's overworked. Everyone's super busy and they don't want to deal with things. But in the end of the day, they all have a common goal of accomplishing, you know, whatever service to the customer or getting whatever product done. It's we're all in it together, but it is really easy trap to get into. So my dealings with people who've been in the military, one of the benefits that I see is that they're always really confident. Is that something that the military teaches you or is that just, you know, it's just my projecting of me having imposter syndrome all times and everyone's more confident than me? I don't know. It seems like something that I experience a lot.
Wes Noonan (45:12 - 46:47) No, the military definitely emboldens that culture, right? I mean, if you think about the fundamental mission of the military, right, if you boil down all the excess, your job is to potentially go kill people who want to do you or your nation harm, right? Like you just fundamental break that down. That takes a certain kind of mindset, right? That takes a mindset of being invulnerable. That takes a mindset of being invincible because you're going to put yourself in a situation or potentially be put in a situation where you're going to be very vulnerable. And if you don't have the confidence to act, that's how people die, right? So not trying to bring the, you know, make this a depressing podcast, but that's kind of the reality. Well, that can translate to technology, right? That can translate to the corporate world. You know, I use various expressions, right? One is a very PC and the other is a very non-PC expression, right? One expression that I'll use that's PC is, you know, walk in like you own the place. Like walk in, walk with a purpose. We used to joke about that in the Marine Corps. Nobody stops you if you're walking like you're walking with a purpose. But if you're just kind of wandering around, some gunny is going to be like, what are you doing over there? Why are you guys wandering around? Right? But if you walk with a purpose, people assume you're going somewhere and you're doing something and they'll leave you alone.
Kevin Nanns (46:47 - 46:50) I have the same strategy when I go to Home Depot.
Wes Noonan (46:52 - 47:46) I'm with you. Otherwise, hey, look at these solar panels and do you have a generator? Trust me, I'm with you there, right? The other expression that I'll use, and this comes out of Pulp Fiction, right? In the restaurant, when everybody's watches and wallets and everything gets stolen, right? And Jules is like, give me back my wallet. And they go, well, how do we know which wallet is yours? And he goes, it's the one that says bad MF on it. So that's the other thing that I actually teach a lot. Alexis has heard this. Be a bad MF. You're the baddest person in the room. Never, ever forget that. Don't be arrogant about it. Don't be pretentious about it. But always remember, you are the baddest person in whatever room you're in. And then act accordingly.
Kevin Nanns (47:47 - 47:49) How do you... okay, so that's easier said than done. 
Wes Noonan (47:50) It is.
Kevin Nanns (47:51 - 48:12) It is great advice. But how do you make that mental jump? Because I'm picturing myself, if I'm just coming out of the military or college or whatever, and I'm getting my first job in IT, I am petrified. I am thinking that everyone knows everything and I don't know anything. How do you exude that confidence when you don't have a ton to back it up?
Wes Noonan (48:13 - 49:57) Yeah. So I think one of the secrets is you have to acknowledge and be comfortable with failure. Right? One of the aspects about technology jobs in general is you're actually paid for when things fail. Like I told people when I was in IT all the time, I'm not paid for what happens from eight till five. Eight till five is the easy part. I'm paid for that phone call at 2.30 in the morning that says something's down. That's when you kick it into gear. That's when you take action, right? And if you accept that failure is just the nature of the beast, failure is what happens in this job, then it becomes very easy for you to take action, right? Because if you fail, who cares? You figure it out and you fix it. The military has a philosophy around this. They call it an OODA loop, right? O-O-D-O or D-A, I should say.
Observe, orient, decide, and act. Right? So observe your situation, orient yourself, figure out where you're at, make a decision, and then take an action. And if the action is the proper action, cool, you've fixed the problem. And if the action was not the proper action, cool. Go back to observe, orient, decide, and act. That's that OODA loop, right? It allows you to make very rapid decisions and it allows you to recover very quickly in the event that a decision resulted in a failure. And so I think if you approach technology from that perspective where it's okay to fail, there's a tremendous amount of liberation in just acknowledging that, right?
That you do not have to, in fact, be perfect.
Kevin Nanns (49:59 - 50:31) You know, I've been watching a lot of House recently, the whole TV show with you, Lori, and every single episode they fail. The very first thing they try never works. It's always obviously the last thing they try that works. But throughout the entire episode, he says, well, now at least we know what it's not. And that is a win in itself. And that's what it reminded me of. Just trying something, your best guess, your best observation, and then if it's not cool, that's progress. As long as you're making progress, then you're fine.
Alexis Bertholf (50:32 - 51:18) I was going to say, I think the other thing when it comes down to building confidence, especially something that's been big with me, I am slightly earlier in career than both of you, is acknowledging, no, no, no. But just acknowledging that when you do something the first couple of times, it is going to be uncomfortable. It might suck. You might feel awkward. You might be anxious, right? You might feel like you're doing it wrong. You might be doing it wrong, right? But the only way to push through that and get to where you actually are confident and you know what you're doing is to go through those first awkward tries. I've got a little story. I know I'm not supposed to be the one telling stories here, but this was my first time.
Kevin Nanns (51:18 - 51:19) It's our podcast. We can do whatever we want.
Alexis Bertholf (51:20 - 53:42) Wes and Kevin, you both have heard this story before, so you know who I'm talking about. But when I was, this was my first customer I had ever worked with when I officially became an SE at Cisco after I graduated my training program. He worked in a government for a company that contracted with the government. They weren't allowed to have their cameras on. It was my first customer presentation ever, like ever. I was so nervous. And so I get on and I was presenting. They were upgrading some 3650s to 9200s and I was presenting on the differences between the 9200s and 9300s because Wes, as you know, we always want customers to buy the 9300s because they are just miles better than the 9200s. And I was so nervous giving this presentation. And everything I said, this guy on the other line, he's like, fantastic. That's fantastic. That's so great. Yes. Incredible. And I'm like, wow. I walked away. I was like, wow, that was the easiest customer presentation. Are they all like this? Is everyone this nice? He basically just said, yes, that's great to everything I said. And so we were working together for like three years and finally we get together at Cisco Live and we're out at the bar and I was like, hey man, I got to tell you, we realized we were the same age. And I was like, hey man, I got to tell you, that presentation I gave you guys, that first one, when we met three years ago, I was so nervous. That was my first customer presentation ever. And he goes, oh my God, that was my first call with a vendor ever. I was nervous because I was getting on the phone with Cisco and I thought you were going to think I was dumb. And so anything you said, I just said yes to because I thought, because you were Cisco, you were so much smarter than me. And I was like, damn, we had such a good laugh. We still laugh about it. But neither of us knew because he didn't have his camera on. And so I'm assuming that this is like some senior IT guy who's just playing along with my presentation to make me feel better about myself.
And in reality, it was another guy the same age as me and we were both going through it. Everyone's got their own struggles, but you build confidence the more reps you put in.
Wes Noonan (53:43 - 54:01) If it was easy all the time, there would be no confidence involved. That's the key of having and gaining confidence, is if there's not a struggle involved, there's nothing to be confident about. So I like to keep that in mind.
Alexis Bertholf (54:02 - 54:13) So Wes, we've talked a lot. I know you have hours of stories that you could tell. Are there any throughout your career that stood out to you that you'd like to share?
Wes Noonan (54:14 - 57:49) There are two stories, actually. And they're going to deal with two different aspects of I think what makes a good, long, successful career. The first is, this is back in 99. It was one of those jobs that I left because of the culture. I just joined. I've been there maybe a month. We're doing a big MPLS design. And I'm sitting in a room with a bunch of technology folks. Again, I've only been there about a month. They're doing a roundtable and asking everybody their opinion on what we should do, how we should architect it, all the things that go into building an MPLS network. And it comes to me. And so I make the case on some technical things that I think we should do and how we should do the routing and all that kind of stuff. And I finish. And I kid you not, guy across the table from me just says, this guy doesn't even have a college degree. Why are we even listening to anything he has to say? Like, I'm not flat-footed very often in my career. That one floored me. Like, I didn't even know how to respond. I was dumbfounded by his statement. And afterwards, I go to my boss and I'm like, WTF just happened. And he looks at me and he goes, Wes, you're too good for this place. Find someplace else to work. You deserve better. And a year later, the company was out of business. But you're going to deal with those people. They're out there. It took a shot to my confidence. I'll admit that. But then I got it back. The other story is a life lesson. And this one, gentlemen, God rest his soul. John LaPage was my boss at the time. And we were sitting down this early in my career. And I told you I was arrogant. I was a bit of an a-hole. And I kept bumping heads with this one guy in the department. And my boss calls me in and I walk in expecting us to have a conversation about how we're going to move this guy off the team because Wes, you're right in everything that you're doing. And that's just how we're going to fix the problem. And so I sit down across the table from John. And John goes, Wes, so here's the situation. You are my right-hand man. There is nothing I could ask you to do that you're not technically capable of doing. But I've got a situation where I can save the hand or I can save the body. And the instant he made that statement, I realized this conversation was not going to go the way I thought. And he tells me, Wes, you've got a good career in front of you, but you've got a lesson you need to learn. And while I think I could teach you that lesson, I don't have the time to do it. But I think this will teach you the lesson that you need fast and you're going to be okay. And then he gave me the opportunity to resign. Right. Wow. Which I did. Right. Because I didn't want to be fired. Like, you know, he actually wrote me a letter of recommendation that I still keep to this day. Phenomenal, glowing letter of recommendation. And he was right. I would not have learned that lesson any other way.
That lesson being, you have to work with people. No matter how good you think you are, you have to be able to work with others.
Alexis Bertholf (57:50 - 58:11) In the moment, I guess, how long did it take you to absorb that? In the moment, I feel like if I was sat down and I had that conversation, I would have gotten all hot-headed. And, you know, did you realize, was it because it was someone that you respected that much that you realized, oh, he's doing this for my benefit? Or did it take you a couple months to walk away and really reflect?
Wes Noonan (58:11 - 59:00) No, that's the beauty of John as a boss, is he actually took the time to explain. He took the time to explain what I needed to learn. So he didn't say, you know, hey, you've got to figure this out. And then he sent me on my way. He said, you've got to figure this out. And here's ways that you can figure this out. Here's how you can make adjustments to what you do and what you say that will get you where I know you can be. We left, I gave him a hug, like, you know, cried a little bit, in all honesty. He let me sit there until I could dry my eyes. And then he gave me a hug and he said, Wes, you're going to be fine. And he was right.
Alexis Bertholf (59:01 - 59:05) That would destroy me. That would absolutely destroy me.
Kevin Nanns (59:06 - 59:08) I'm tearing up a little bit over here. It's beautiful.
Wes Noonan (59:09 - 59:39) He was a good man. And fast forward, the guy that I kept bumping heads with, this happened after the fact, right? This wasn't happening at the time.
But he wound up dating John's daughter and they wound up getting married and they've got kids. He actually got out of technology. He's a custom car builder, makes absolutely gorgeous, like phenomenal custom rebuilds, old Camaros, old vets, things like that. So it worked out for everybody involved. I say, John was a great boss.
Kevin Nanns (59:42 - 59:43) Amazing.
Alexis Bertholf (59:46 - 1:00:06) Well, Wes, I've got one more question for you to wrap up the episode. If you were sitting across the table from your 18-year-old self right now, or maybe 17-year-old self, whatever age you were when you decided to tell your parents that you were joining the Marine Corps, what would you say?
Wes Noonan (1:00:07 - 1:00:11) Oh, see, y'all didn't prep me for that question. Surprise.
Alexis Bertholf (1:00:12 - 1:00:13) I came up with it on the spot.
Wes Noonan (1:00:14 - 1:01:20) Yeah. What I would say is do it, right? At the time I had a choice. Again, I likely would have had a full ride scholarship on an ROTC scholarship to the college of my choice, but I didn't think I was ready for college. Like I still had too much, you know, piss and vinegar. Like I was still too fiery and I needed to learn how to be part of something more than just be. And that is what the Marine Corps gave me. Um, and if I had the opportunity to go back in time, I would make sure that I did it because there's, there's points in your life where you realize your life was on a trajectory and it's shifted in a better fashion. If I didn't join the Marine Corps, odds are good. I would have wound up in prison or certainly not in the situation that I'm in today. The Marine Corps taught me a lot of humility, taught me a lot of discipline that I didn't have. So my advice to 17 year old me would be do it. Go join.
Kevin Nanns (1:01:21 - 1:01:22) Quoting Chet, do it lady.
Alexis Bertholf (1:01:25 - 1:01:42) All right. Well, Wes, thank you so much for spending time with us today. For our listeners on the other end, I hope you found this extremely insightful. If you have any questions about career, military certifications, any of the things that Wes talked about today, Wes, where can they find you?
Wes Noonan (1:01:42 - 1:01:47) The best way to reach me is going to be on LinkedIn. Easy to find.
Alexis Bertholf (1:01:48 - 1:01:50) I believe your banner is still old man yells at cloud. 
Wes Noonan (1:01:51) It is. 
Alexis Bertholf (1:01:52 - 1:02:14) Beautiful. Well, I'll link it in the comments. And if you guys have guests or ideas or things that you would like Kevin and I to talk about, leave them in the comments, DM us on social media. If you don't know where to find us, um, I'm Digital Byte. Kevin is Adjacent Node. And this is the end of the first episode of Life in Uptime.`,
  },
  {
    episodeNumber: "003",
    slug: "ep-003-a-chat-with-the-cloud-therapist",
    title: "LIU003:  A Chat With 'The Cloud Therapist'",
    guest: "Chris Williams",
    guestTitle: "Developer Relations Manager",
    guestCompany: "HashiCorp",
    guestLinkedIn: "https://www.linkedin.com/in/chriswms/",
    description: "Your background and experiences outside of tech can become a significant factor in your tech career. Guest Chris Williams is a good example; he talks about how his undergraduate and graduate studies in psychology influenced his work as a Developer Relations Manger at Hashicorp. Hosts Alexis Bertholf and Kevin Nanns chat with him about how he pivoted from psychology to tech, and how the work he was doing in the evening earned him the nickname of \"The Cloud Therapist\" and led to the job he has today.",
    airDate: "October 30, 2024",
    packetPushersUrl: "https://packetpushers.net/podcasts/life-in-uptime/liu003-a-chat-with-the-cloud-therapist",
    youtubeUrl: "https://youtu.be/bIoeBlJEvtk",
    transcript: `Kevin Nanns (0:04 - 0:42) Welcome to Life in Uptime, the podcast where we talk with the people behind the technology that keeps our world connected. I'm Kevin, joined by my co-host Alexis, and every episode we sit down with engineers, leaders, and builders in tech to uncover the stories behind their career, how they started, what they've learned, and where they're headed next. Our goal is to help you see how far tech can take you, no matter where you start from. Our guest today is Chris Williams. I'm super excited by this guest because he calls himself the Cloud Therapist. Chris, I know there's a story behind that.
Why do you call yourself the Cloud Therapist?
Chris Williams (0:42 - 2:44) Yeah, so hey everybody, my name is Chris Williams. So the reason I call myself the Cloud Therapist is because I actually got started, my studies at university were in psychology. I got halfway through a master's, I was starting my rotations, and I was doing conflict resolution. And then I pivoted over and got into tech. That's another story. Networking and video games was my advent. But after I went further down the path, like much later in my career, 10, 15, 20 years later, as I was working with the C-suites and a very large companies and doing these projects that were, I would be injected into these projects that were just completely on fire. Please help us fix these environments. Nine times out of 10, it was the people part that was the issue. It wasn't the technology, it was the people part. And so I found myself dipping back into my therapy skills, my psychology skills, to get these people to get along with each other so that the project could fly true. And so I would be injected into these very large problems, multi-million dollar, Fortune 100 issues, projects gone sideways, everybody's screaming at each other, dumpsters on fire, everything. And I would come in and I just start talking to people and trying to figure things out. And they're like, Chris is doing his therapy thing again. Let's go, what is happening? And all of these projects were like cloud-based because I'm an AWS hero, MVP, the expert from way back. And so it just caught on. I was like, they bring in the cloud therapist and I got a reputation for being like the smoke jumper, like the guy that you would bring in when everything was on fire and you had to just get drop shipped in there and fight your way out. And so I got that nickname. It stuck for three different positions at three different companies. And so yeah, I just carry it to this day.
Alexis Bertholf (2:44 - 2:54) That's great. I was going to say, and Chris, community is still a big part or the people are still a big part of what you do now, right?
Chris Williams (2:56 - 3:30) It's really interesting because my current role is I'm the developer relations manager for HashiCorp, an IBM company. And I had never been in dev advocacy or developer relations until this position. So when my current boss, Melissa, approached me, she was like, hey, do you want to be dev advocate manager? I was like, that sounds like a terrible idea because one, I don't know what that means. And two, how would I manage something for a role that I don't know what it does? Then she described the role to me and I was like, that's what I've been doing at night for free.
Alexis Bertholf (3:31 - 3:32) Someone's job?
Chris Williams (3:33 - 3:59) Yeah. So for the past 15 years, I've been doing user groups, talking at events, going to conferences. I have my own podcast, vBrownBag. I do a blog. I'm, like I said, an AWS hero. And all of those things were leading up to this role of developer advocate, which is literally my evening hobby is now my day job. So dream come true.
Alexis Bertholf (4:00 - 4:10) So Chris, for someone who doesn't know what a developer advocate is, I didn't know what a developer advocate was. Could you describe what they do and maybe how someone would work with one?
Chris Williams (4:12 - 6:16) Yeah, totally. So it's a really interesting role and the kinds of people that gravitate towards it are fairly, they have to be very technically advanced. They have to know their field, but they also have to be willing to stand up in front of a bunch of people and talk about the thing that they do. They don't necessarily have to be an extrovert, though it certainly does help. I do know a lot of DAs that are introverts and they have to go recharge after conferences. But they have to be very community driven and very willing to get into sticky problems that they want to see fixed. So a developer advocate, when they're in a company, they sit at the epicenter of sales, marketing, product engineering, and the customer. So we go out to these user groups and to these conferences and stuff and we give these talks about, you know, this is the cool thing that you can do with Terraform or whatever your thing is that you want to talk about. You speak from a position of expertise.
You've been there, you've done that, you show them the battle scars. This is the things that are going to trip you up. And then they come back to you and say, hey, that was a really cool talk, but these are the parts that I'm getting hung up on. So what you do is you then take that information, you come back to product and engineering and you drive pull requests and issues and you make sure that the voice of the customer and the community user is being heard. And so there's a lot of passion and love that you have to put into it and you really have to care about what's happening with your community to make sure that their voice is being heard. And it is this virtuous cycle because the better the product is based upon what the community has been asking for, the better the enterprise version of that product becomes too. So if you ask 10 people what a DA is, you'll get 11 different answers. That's my answer.
Kevin Nanns (6:17 - 6:33) Chris, it sounds like you need to have a lot of different skills, people skills, technical skills. How do you go about starting to build that? If you're an IT person right now and that seems like a dream job to you, what kind of skills should that person start working on to be in a role like yours?
Chris Williams (6:34 - 8:21) So there's the day job, which obviously that's where you're building the expertise and the acumen and getting the gravitas, for lack of a better term. But what you also want to start doing is attending meetups, going to your evening local meetups for the thing that you're passionate about. If it's open source software or Python development or AWS or whatever, go on to meetup.com and find the thing that you want to do. If like me, you reach out and you see that there's nothing in your area, you then start one. And then that's an entirely different rabbit hole. I've been a member and or started four different user groups now, and it is a lot of work to launch and to keep flying and everything, but you kind of have to love it. So you start attending meetups, you reach out to the users, the co-organizers, and you say, hey, I want to do a talk. The one thing that leaders always need is more speakers. If you are passionate about a thing and it's relevant to that user group, then they will absolutely let you do either a five-minute lightning talk, or if you've got a lot to talk about, you want to do a whole hour, they would absolutely love that.
And then you just start getting that muscle memory in. You have to practice getting up on stage. You have to practice speaking in front of people. You have to remind yourself over and over again to slow down and not freak out when you see more than three people sitting in front of you expecting knowledge. And then eventually, one day, like me, you get really, really lucky and you talk to a room of 600 people at reInvent and try not to freak out, but you will.
Alexis Bertholf (8:22 - 9:01) What I was going to say is, I think joining the NOGs and getting up there and trying to present or applying to present, that's all great. But if you're someone who's even more shy, maybe a presentation sounds really daunting to you. Even just going and meeting people, right? Maybe the first NOG or the first meetup or user group event that you go to, your whole goal isn't to present. It's just to meet other people. Can you make five new friends? Instead of sitting in the back of the room, can you sit in the middle of the room and talk to the people who sit next to you and try to build new connections? It doesn't always have to be you or the person in the front of the room.
Chris Williams (9:03 - 10:25) Yeah, no, absolutely. If you want to become a DA but you're super shy, then getting to the meeting might be the first 5, 10 things that you do and just showing up. There have been a number of times when, in the course of me running an event or something, I see the same person in the back of the room. Every single time, I approach them. Invariably, what really kills me is that that person is usually the person that has the crazy killer story. They're an immigrant that came over at the age of 18. They didn't know anything. Then they learned Fortran or some archaic language. Now, they're the lead of Fortran at a Fortune 100. You're just like, what? Oh, my God. I want to hear this life story.
I love talking to people about their journey and their trajectory and stuff like that. They're like, oh, it's nothing. I didn't do anything. I was on a boat in the middle of the Mediterranean. I'm like, gee, that is the best story. Yeah. If they're shy, then little tiny baby steps. If they've got some overeager organizer trying to encourage them and coax them up on stage, then sometimes that's helpful, too.
Kevin Nanns (10:26 - 10:43) Speaking of stories, I'm really curious. You said you started out as a psych major and you transferred to tech. Now, you have this amazing job. You're standing in front of people and being an advocate for developers. How do you make that transition from psychology to IT?
Chris Williams (10:45 - 12:27) It was actually video games. Every summer, this was down in Alabama. I worked as an electrician's apprentice. I've done a bunch of different jobs. I advocate for being a generalist and learning a lot of different things before you figure out the thing that you want to do. In the summers, to pay for my tuition and everything like that, I would lay electrical cable in housing, like housing new builds. I would lay the cable as an electrician's apprentice. I got really into video games, so I wired my dorm room up for a LAN party. This was like a year old in times when we still had LAN parties. This was at the beginning of the internet. At the end of it, I went out and I bought a little four-port repeater hub. Our friends would come over with their CRT screens and their giant 486s with a math coprocessor. We'd play Doom together. My roommate, who was a CS major, his proctor came in one day to talk to him about his courses or his classes or whatever like that and saw the layout of the room, saw how it had been wired up and everything. He was like, holy crap, Tom, this is amazing. You did a great job with the networking in this room. He said, it wasn't me, it was Chris. My university contracted me to rewire the entire CS department's layout.
I learned Cisco switching. I learned routing. This was a RIPv2 or RIPv3 routing. This was way back.
Alexis Bertholf (12:28 - 12:30) This is all off of rewiring your friend's room.
Chris Williams (12:32 - 13:12) Yeah, our dorm room. Exactly. Yeah. It's crazy. They really liked that I did a clean job of laying the cable. Old Cat 5, I did my own crimp jobs. I had my own little crimper and everything. Orange, white, orange, green, white. I still remember the patterns and all that stuff. So they contracted me and it paid for my university, for the quarters. I was like, oh, I'm making a lot more money right now than what I would be with a master's in psychology. So that's when I peaced out and flipped over, got my CCNA and my MCSE and the rest has been history.
Kevin Nanns (13:14 - 13:29) Just proves that when you're doing a wiring job, your own home, your own area, you should make it nice and clean. Because the instinct there is just to throw the hub, throw some wires across the room and be like, yeah, it's good enough. It works. But you're proof that if you actually take time, you might get a job from it. Who knows?
Chris Williams (13:30 - 13:42) Oh, yeah. I ran it through the dropdowns. I mean, I tacked it up nice and clean. And everybody thought it was over-engineered, but then it paid for my entire university. It works on them, yeah.
Alexis Bertholf (13:44 - 14:18) Has that ever come up? I'm curious. In interviews, having a non-traditional background or a non-technical degree, when you apply for a job, Kevin and I get a lot of DMs. It's, oh, well, they're looking for the perfect certification or the perfect course, the perfect degree. Or if I study this, do you think I can do this? And if I take this course, do you think that I can do this? And I think you're proof, right? You have a degree in psychology. Has that ever come up on a job interview of, hey, Chris, your bachelor's isn't in engineering, or it isn't this, or it isn't that?
Chris Williams (14:19 - 15:32) No. No, absolutely not. After I got my certifications, my CCNA and my MCSC, I did really well in the learning path there to the point that this was like LearningTree. I don't even know if they still exist anymore, but LearningTree was like the certification place where they had these training centers. They asked me to come and teach at the LearningTree. I crushed my MCSC exam so hard that they were just like, hey, can you come teach this? Because you were talking with the deliverer of the course like you were a teacher. So via that, via me teaching courses at LearningTree, I made a lot of really good connections in my local area for people that were looking to find people that knew various technologies. I've never once had somebody look at my resume. Well, I don't know. I mean, they might have like looked at my thing and then bend it, and I never heard from them again. But I've never sat across from somebody and they're like, oh, psychology, what's this?
Because if they did, I'd immediately be like, how does that make you feel? And you just make it really weird, make it really awkward for them.
Alexis Bertholf (15:34 - 15:34) Incredible.
Chris Williams (15:35 - 15:46) Are you threatened by that? Tell me about your mother. I'm dead. I love how she freezes. That's like the purpose of this right there.
Kevin Nanns (15:47 - 15:49) She freezes the worst possible places.
Chris Williams (15:50 - 15:54) I want to wait for her to like picking her nose.
Alexis Bertholf (15:54 - 15:59) I never know what's coming either, clearly. Anyways.
Chris Williams (16:00 - 16:00) Thank you.
Kevin Nanns (16:01 - 16:31) I'm full of surprises and cheese. So it hasn't had any really negative effect on you, but can you talk to the positive points of having a non-traditional IT background? I feel like a lot of people come into IT with the general CS degree, IT degree, and they're like everybody else. You kind of get lost in the shuffle. But the people who kind of stand out are the ones who came from a non-traditional path, came from the background of non-IT people. So can you talk to a little bit about the strengths that's brought you?
Chris Williams (16:32 - 18:59) Absolutely. As a current hiring manager, I will say that I actually look at resumes to see if they do in fact come from a non-traditional background, especially in like the DA role. I have found that the best DAs do come from non-traditional backgrounds simply because they had to, DAs are teachers at the end of the day. We teach people how to use the thing. So if you come from a very steeped in CS position, you have this presupposition, you have all of this baked in knowledge that you already know about. You just automatically assume that everybody on the planet knows how to use an if-else loop or a for statement or how iteration across a string works or something like that.
And that's 10% of the populace. If you want to get somebody to get excited about Terraform, if you're talking to a developer, you go, yeah, a looping structure is awesome. But if you're talking to the other 90% of humanity, then coming from a non-traditional background allows you to listen to that voice in your head a little bit better. There's a book called Generalists or it's actually just finished reading it recently. I can't remember the name of the book. It'll come to me. That talks about how generalists, people that have dabbled in a lot of different things before picking the thing that they really are passionate about invariably bring the skill sets that they learned from those other areas into the thing that they are then doing. For example, me learning how to lay cable as an electrician's apprentice, transferred over into networking, transferred into a job, blah, blah, blah. So there's all of these little skill sets that you don't know that you have, that you bring, that if you're one of the many, many, many, and I'm not knocking CS degrees by any stretch of the imagination. They can do things that I can only dream of doing. But they know what they know and people that have a wider background know what they know. And one's not better than the other. They both have their place, but depending upon what you're trying to do, one can be more beneficial than the other.
Kevin Nanns (19:00 - 19:13) Do you find yourself talking, you mentioned how it gives you easier time talking to the other 90%. Do you find that that's your audience the majority of the time or are you talking to the developer who is very technical?
Chris Williams (19:15 - 20:04) Chris Williams personally, which is weird, I don't know why I said that in third person. Me, I speak to the 90% more because I don't come from a traditional developer's background. I came from SysOps and operations and DevOps from, I'm the crusty ClickOps person. I had my vCenter and I was deploying vSphere ESXi clusters for millennia before the cloud came out. And then I flipped over and started doing that and then learning how infrastructure as code works. So the audience member that I speak to is myself from 10 years ago. And so that person is who I appeal to. And I know how to appeal to them because I know what got me excited about infrastructure as code and the cloud 10 years ago.
Kevin Nanns (20:04 - 20:26) It's crazy when you're talking, it resonates so much with me because that's kind of what I do on social media. That's what I do on TikTok and Instagram and stuff is I try to advocate for networking and also talk to myself 20 years ago and get that person interested. And so I'm just, every time you mentioned something like that, I'm like, it's clicking in my head. I go, I'm kind of already doing that. It's interesting.
Chris Williams (20:27 - 21:13) Yeah, it's super fun because I remember the things that got me excited about the technologies when I was first learning them back in the day. So, um, and, and I actually, the reason why I have my blog is my blog is I don't, I don't use it to like reach out to people or anything like that. It is my diary for future Chris. It is the things that I do one time, once every six months that I, that I invariably forget that I then have to go back. So I, so I said, well, screw it. I'll, I'll create an article for future Chris. And, and I don't start it with dear Chris or anything. I'm saying, this is how you do X, Y, and Z. Um, and so if I go back, you know, 10, 15 years, I'm like, wow, I've not only have I come a long way, but I remember the excitement that I had when I wrote that article.
Alexis Bertholf (21:14 - 21:17) It's funny looking back on old pieces of content. Really?
Chris Williams (21:18 - 21:20) Cause like, it's so cringe.
Alexis Bertholf (21:20 - 21:34) Well, it takes you right back to that place in your life. Almost like you were saying a little video diary and you're like, oh my God, like either. I looked so young or I can't believe I explained it like that or listen, like, listen to my voice. Even my voice has changed. The way I talk has changed.
Chris Williams (21:35 - 21:36) Um, my voice is much lower.
Alexis Bertholf (21:37 - 22:38) I think the other thing, um, when you were talking about CS majors and coming from a non-traditional background. And when I look at younger students today, the piece of advice I normally give them is how can you combine something technical with something business related? Because inevitably, if you are a technical person who was able to communicate your business value, you will be more successful. And if you're a business person who was able to work better with the nerds, you will be more successful, especially if you're going into any sort of technology driven role, whether that's being a business major with a CS minor or a CS minor with a business or a CS major with a business minor, right? Because either way you get to dip your toes in and understanding how to communicate with different groups of people or different types of people outside of your major, even if that's just joining a club with other people who have different majors. So you can understand the way that they think and the way they communicate. You know, I found that that's something that's been very helpful for me.
Chris Williams (22:39 - 24:33) Oh, absolutely. Um, one of, one of the most powerful tools. So this goes back to my, my firefighting days, um, firefighting, uh, the, that, that I, I, to, to me, for the people that, for the people that just jumped in, I was never a firefighter. I met the, the, the firefighting it projects thing. Um, from my consulting days, one of the most powerful tools that I would use during my, my cloud therapy sessions was I would, I would come into the boardroom with, you know, the VP, the C-suite and the engineers and the project managers. And I would be like, okay, we need to create a common dictionary of words.
When I say project, that means something entirely different than when a, when a C-suite person says project, which means entirely something different than when a project manager says project. So I would, I would go to the whiteboard and I would say, what does project mean to everybody? I would dumb everything down. What, what does DevOps mean to everybody? What does SRE mean to everybody? And, and everybody's definition was different, but when we left that room through the lens of whatever thing we were trying to fix, we got, we got closer to everybody talking the same language. Um, so you're absolutely correct. If you're in business and you do not. Yeah. If you're in business and you do not understand how the tech, what technical people mean when they say words, uh, even the word dictionary means something completely different to a developer than it does to, to a C, a C-suite person. Uh, and, and that disparity is where all of the problems lie. So get, getting people to speak the same language is, is paramount to fixing, fixing all of, all of the project problems.
Kevin Nanns (24:34 - 25:11) How did you like go down that path? Cause what, I dunno, in real life, like real life, what I see most happen is if someone has a, doesn't understand something, they kind of just roll their eyes and go, okay, that person's an idiot. It takes, it takes some extra gumption to be like, no, I think we should all sit down, start over, start from the basics. I just feel like that's, that's rare to see that. And so like, what did you, where did that thinking come from? Where did that part of your background in psychology where you're like, you know, let's get down to the root of the, of the issue to, uh, to, to paraphrase a famous cartoon character.
Chris Williams (25:11 - 25:48) You want to know how I got these scars? I, I bled and, and slogged through this for years of just people screaming it. I mean, this, this is where conflict resolution therapy came in. Uh, me talking to the C-suites and you know, the CTO and the CFO screaming red faced at each other. I need to spend this money. You can't spend this money. F you, F you. Um, and then, and then me going, this, this isn't, isn't going anywhere.
Alexis Bertholf (25:49 - 25:54) So I would be, let me sit you both down and we're going to have a nice conversation.
Chris Williams (25:54 - 26:11) Yeah, no, put them in their get along t-shirt. I mean, it's literally sometimes like dealing with toddlers. Uh, I, I do have an advantage. I am six foot eight, 260 pounds. So, um, I can stand up in a room and, and people will stop talking for a hot second.
Alexis Bertholf (26:12 - 26:28) It's true. When I saw, when I saw Chris at reInvent the video of me and Chris, I look like I'm four feet tall, like to interview him. I'm pretty, I'm pretty sure my hand and I'm five, seven. I'm not short, right? Five, six, five, seven, depending on the day.
Kevin Nanns (26:28 - 26:29) You're definitely five something.
Alexis Bertholf (26:36 - 26:51) I'm so sorry. I'm five, seven, depending on what kind of shoes I'm wearing. And when I interviewed Chris at reinvent, I literally had to hold my hand up above my head, just so the microphone would reach his mouth.
Chris Williams (26:52 - 26:56) It was, it was, it was a great clip though. Your, your edit was, was fantastic.
Alexis Bertholf (26:56 - 26:58) My arm was hurting by the end of the interview.
Chris Williams (26:58 - 27:42) I would, I would be, I could, I could use that to my advantage in, in a like, let's please get along scenario. Um, and it's, it is, it is figuring out like the, the common thing that they care about getting, getting people to talk the same language, figuring out the common thing that they care about. Um, cause everybody in the is trying to be successful. Like they want the company to be successful. They want the project to be successful and make money. They just have different opinions about how to get to it.
Uh, so getting people to wear the other person's shoes, um, is very, very helpful. Getting people to speak the same language is helpful. And, and that's, that's how, I mean, to, to bring it back full circle, that's how I became the cloud therapist.
Kevin Nanns (27:43 - 28:09) So if you are a, let's say you're not, you know, a giant among men, but the average, the average person, like I'm five 10, I'm, I'm, I'm one of the little guys, um, for us little guys, how would you utilize that same mentality with, you're like, you're just a normal person. You have to deal with your boss, deal with coworkers. How do you deal with conflict resolution just as like a normal person? Yeah.
Chris Williams (28:09 - 29:59) You know, like, yeah, no, no, you just, I mean, I, I call it, there's no dumb questions, but I say Chris's dumb questions. I say, okay, I'm going to start asking Chris's dumb questions. Um, what, what does, what does this mean right here?
Like, like breaking down a project and asking like broad strokes, like at a conceptual level, what is this front end trying to do? What is this backend trying to do? We're all trying to make money here, but I'm going to ask my dumb questions and that I'm going to ask my three why's like, okay, the front end does this because of this. Okay. Well, why is it doing that? And then, and then like really drill down into the basics and fundamentals of those things by asking my dumb questions. What I'm doing is I'm getting the questions answered for the, the other 10 people in the room that always had that same question, but we're too afraid to ask it that, that when we leave the room, they're always like, dude, I've been wondering that question for like five, the five years I've been in this project. I've been wondering why the hell we do it that way. I'm like, well, then why didn't you ask? Well, I didn't want to ask. I didn't want to seem like I was stupid. What I was, I was an obscenely overpaid consultant and I would walk into the room and I'd introduce myself. Hey, I'm Chris Williams. I am the dumbest human in this room. And, uh, you guys pay me way too much money to ask them questions. And so here we go, let's do it. And it would disarm everybody and it would get them a little bit irritated at me and it would cause them to be like overly honest. I would, I would, I would artificially set up this kind of not friction, but I would, but I would set up this, this pattern where they would want to like, Oh, I'm going to get this guy.
I'm going to, I'm going to, I'm going to like show him that, not show him up or anything like that, but I'm going to like, and then, and then I would just ask my dumb questions. And I just, I just keep hammering at them until they like fully divulge the honest truth of what it is that, that, that they actually meant.
Alexis Bertholf (30:00 - 30:12) I was about to ask, um, we talked about you going into a DA role and how DAs are very technical. Where do you, where did you develop the bulk of your technical skills?
Chris Williams (30:12 - 31:01) That, that was my day job. So for, for 25 years, I was a systems administrator, a enterprise consultant, an architect. Uh, I mean, I was, I've been in the weeds on the technical side from building servers to installing software on servers, to then building data centers, to then migrating physical data centers, to then virtualizing physical data centers, to then taking those virtual centers and moving them up to the cloud and moving them back down. I'm really good at migrate application migrations at this point. Um, so, so my community stuff was, was the things I was doing at night. The things that I was doing at day was the hard tech that I could then use to feed my evening stories of like the, the battles. Like these are the lessons I learned today on how not to do, you know, uh, RDS restores.
Alexis Bertholf (31:02 - 31:20) Chris, if you're someone like me, where maybe you're a little bit earlier in career, but you are super interested in the people-y side, you feel like that's one of your strong suits. Um, but maybe you don't have as much technical hands-on experience. I'm asking this question for myself and maybe for others.
Chris Williams (31:21 - 31:22) Um, totally.
Alexis Bertholf (31:22 - 31:47) Do you feel like there's a jumping off point where there's a certain amount of years or skills or things you picked up where you can take your foot off the gas a little bit to go into a DA role? And also, how do you stay technical once you are not owning all of those projects? You're not owning a network and most of what you're doing is labbing or studying. How do you make sure you stay relevant to continue sharing with the community and, and keeping yourself up to date?
Chris Williams (31:49 - 34:02) That is, that is a fantastic question. And I get that a lot from, uh, early career DAs, um, as to, as to when, when, when is, when is a good, when is good enough? And it is an entirely subjective answer. The, it, it depends on a human. It depends on the role that they've been in. It depends on, you know, how the, the kinds of things that they are exposed to during the day versus what they want to be a DA in. Um, if a person is in a very large organization, there is a tendency because it's a large organization that they're doing very one specific thing. Um, and if you're, if you're trying to become a DA, you want that going back to that generalist mentality. You want to have like a large swath of exposure and experience. Um, I didn't feel like I would, was going to be a good enough DA until after I was, I had been doing, uh, the enterprise architecture work and the consultative stuff where I was being dropped into different large companies every six months. Cause I was able to then see how these people were doing it wrong. And then how company B was doing it wrong and how company C was doing it wrong and realizing that, Oh, they're all doing the same things wrong. And then, and conversely, they're also doing a lot of the same things, right? There's, there's motions to companies that, that just happen over time. Once you add in a certain amount of humans, all big companies do certain things good and certain things poorly. And that's just the nature of the beast. And if you haven't done that, then you, then you don't know. And you can't, you can't do that wink and a nod when you're on stage about like, eh, we, we know how it is, right? Fellas wink. I said, fellas, I mean, folks. Um, so it is, it is very subjective. I mean, I would say minimum five years, but I didn't, I didn't even flip the switch until 25 years into it. So, so I, I don't have a good answer. I know that there's a lot of people out there that want to just immediately become a DA. Like, like they, they just got that CS degree and they're like, Oh, I want to be an influencer. And I would, I would discern.
Alexis Bertholf (34:02 - 34:21) I found that with, I found that with myself. Right. I mean, I spent five years as a Cisco SE before I flipped over to doing evangelism full-time. And even now I'm like, man, I wish I spent two years in a NOC. I wish I, you know what I wish I wish I wish. And I can't really go back in time at this point, but it does beg the question.
Chris Williams (34:21 - 35:02) Five years as an SE though. So, I mean, you've, you've got the chops. It's it's when, when see as a DA, you're talking to, you could always have more chops.
What it could have showed up. No, as a DA, you're talking to every single potential job function out there. You're talking to the NOC dwellers. You're talking to the other SEs. You can speak to the other SEs very well because you did five years of it, but you can't speak to the NOC dwellers as well as you could. If you hadn't, if you hadn't lived in their shoes, but, but nobody can do everything until they've been doing like all the jobs for 20 years, like me.
So it's, so it's not, it's a, and even I can't, I don't, I can't speak to like.
Alexis Bertholf (35:03 - 35:06) At that point, I think you run out of time or you clone yourself with AI.
Chris Williams (35:07 - 35:15) Exactly. Exactly. Which is why I created the DevOps mentor.
Wait, that's a terrible segue. No. Buy my, buy my product. What? No, I don't have a product.
Alexis Bertholf (35:16 - 35:17)
Did you?
Chris Williams (35:17 - 35:30) No, I, I, so yes, I did build a clone of myself on ChatGPT. It's called the DevOps mentor. It is, it is the highest clicked on and questions answered DevOps mentor on ChatGPT.
Alexis Bertholf (35:30 - 35:30) Really?
Chris Williams (35:31 - 36:00) But I do not profit. Yeah, I don't profit from it. I just dumped all of my, all of my articles and a bunch of old emails. I said, speak in my voice and know what I know. I got permission from a couple of authors on books that I really, really admire that I read all the way through. And I, and I use them in the rag for the, for the backend of it.
And I was like, answer questions about the topics that you know about go. And yeah, I, I actually chat with my mentor frequently.
Alexis Bertholf (36:01 - 36:05) That's so cool. I want to try chatting with Chris Williams AI.
Chris Williams (36:06 - 36:08) I'll send you the link for it.
Alexis Bertholf (36:08 - 36:10) Yeah. Maybe we all will be.
Kevin Nanns (36:12 - 36:14) How would you find that? How do we, how do we search for that?
Chris Williams (36:15 - 36:26) I'll, I'll send you the link for it, but if you go to ChatGPT and look for the depth, so if you, if you put in the search bar, the DevOps mentor, it's, it's the one that has the most responses.
Alexis Bertholf (36:27 - 36:47) So Chris, I'm curious out of your career, either as a cloud therapist or as a developer advocate, were there any moments where you wish you either did psychology full-time and actually went into or you thought that maybe you picked, maybe you picked the wrong path?
Chris Williams (36:48 - 38:03) No, no. I really have enjoyed the things that I've done over the course of my career. I loved, I loved doing tech because I'm, I'm a, I'm a nerd at heart.
I still have my, my home, my home lab downstairs, three, three blades, a couple of switches, a NAS device. It's linked up to my, my VPC in, in, in AWS. And I loved the, the consulting.
I really liked the aspect of being able to go out and have large companies, you know, hit me up for, for the knowledge that I've accumulated over the years. And then when I found, you know, when I became a DA, I was like, oh my God, this, this I'm doing my evening hobby as my day job now. So if, if I had started being a DA earlier, I probably would not have had the confidence to do it because I didn't, I didn't, if I hadn't been exposed to like a new fortune 100 every six months for seven years, then, then I wouldn't have figured out like, you know, the patterns that all of these giant companies do and, and understand how to talk to them.
So yeah.
Alexis Bertholf (38:03 - 38:11) Being customer facing with a lot of customers, you really start to see all of the parallels. I can attest to that at least.
Kevin Nanns (38:13 - 38:13) Yep.
Chris Williams (38:13 - 38:14) Absolutely. Absolutely.
Kevin Nanns (38:15 - 38:28) So if you had to give one piece of advice for a, for a younger person, early career, who may not come from a traditional background, what should they start focusing on or should they start doing right now that would help them in their career?
Chris Williams (38:29 - 40:35) Right now in the year of our learn leading to AI that, that is, that is the thing that everybody is, is very excited about for, for better or for worse, that, that is the, the hot topic. And I we've, we have seen, you know, a number of, I'm not gonna say fads, but like, you know, the, the passing trends, the, the silver, the technological silver bullets that invariably end up not being silver bullets. But right now leverage AI judiciously, use it as a teacher. Don't use it as a replacement for your brain. Learn how to ask, you know, ask good critical questions of AI. Don't ask it to spoon feed you the answers. That's kind of that's, that's very important to not lose your critical thinking is an extraordinarily valuable skill. And AI is uniquely geared to impinge upon your critical thinking. Uh, if, if it, if it feeds you the answer every single time, then you, then you stop thinking critically. Uh, there's, there's actually currently studies coming out about exactly that right now. They're doing functional MRI studies where they're like, Oh, wow. AI is genuinely making these students dumber because they're not learning the information. They're just learning how to ask AI better questions. And that's, that's not good because AI can lie. It's a very confident hallucination machine. Uh, where was I? What would I do? Okay. Sorry. Um, I would, I would tell people, uh, getting into it nowadays to stay hungry and stay excited and pick, pick a thing, pick one thing, because you're going to find a whole bunch of things that really, really get you going, but get good at one thing and then branch out from that one thing. Don't, don't dabble across a whole bunch of different things and, and not gains gain true mastery over any one thing. Um, I, I like to see what the, are you, are you guys familiar with the concept of T shaped and M shaped engineers and all of that stuff?
Alexis Bertholf (40:36 - 40:38) T shaped. Yes. I'm shaped now.
Chris Williams (40:39 - 41:46) So, uh, a T shaped engineer is they, they have a marginal set of knowledge across a whole bunch of different domains, but then they're really deep on one. So, so it just, it draws the letter T M is you've got a, you've got, you're deep on a, on a couple of different things, not as deep as the T shaped engineer, but you've, but you're, you're lower on three, four or five things than, than you, than you would be. I, I would say that I'm more of an M shaped engineer because, you know, I've got the, I've got the three or four things that I'm really good at, but I have knowledge across literally everything from backups to security to networking, to, to development, to enterprise architecture, to, you know, therapy. So, so there's the, the, the more you generalize, the better off you're going to be as long as you make sure that you have that, the thing that you're good at and make sure that that thing isn't some kind of like passing fad or some, something that's going to be, you know, here today, gone tomorrow, pick up, pick a fundamental thing that, that isn't going to be gone tomorrow.
Kevin Nanns (41:47 - 42:10) Yeah. I think that's great advice. A lot of times we get stuck in the newest fad, the newest buzzword that comes out and we think we should jump on it right away. Cause if we jump on, you know, AI or whatever it is right away and dive deep into it, we'll be one of the first people, one of the first experts in this field, but inevitably you shoehorn yourself into a field and you have nothing else to back it up with. And it just hurts you in the end. Yeah.
Chris Williams (42:10 - 42:34) Yeah. And it's, it's super exhausting. I mean, it knowledge is coming at us faster and faster nowadays. So by picking one thing and marinating in it, you're, you're doing your own brain, a, a good, it's, it's a good thing to like find, find the thing that you get excited about, make sure it's not something that's going to be gone tomorrow and, and get good as the kids say.
Alexis Bertholf (42:35 - 42:46) Well, Chris, thank you so much for spending time with us today. I hope this was very insightful for everyone listening along. If people want to connect with you outside of this, where can they find you?
Chris Williams (42:46 - 43:45) So my online handle is mistwire M I S T W I R E. If you put that into Google, I'm literally like the first seven pages of hits for all the things. So you can find me through that. If you want to engage with me on the podcast on vBrownBag, it is a weekly technical podcast where we bring in people that are excited about the thing that they want to talk about. We encourage both long-term speakers and people that are new in the field and want to get their feet wet in presenting to come on. It is a, it's a, it's a live thing, but we moderate and curate the audience to make sure that, that it's a friendly environment for every, for all comers. And, uh, and we love having new voices come onto the show that are trying to get their feet wet. So back when you were asking, like, how, how does a DA get into it? Get some explorer, get some experience, come on, vBrownBag and do your first talk with us. And I will actually give you genuinely constructive, critical feedback on, on how to up your game.
Alexis Bertholf (43:46 - 44:09) Well, that is it for this episode of Life In Uptime.  Huge thank you to our guest, Chris, for sharing his journey. And thank you for listening. If you enjoyed this conversation, be sure to follow our show. So you never miss an episode. And if today's story gave you something to think about, share it with a friend or colleague who might need it until next time, keep learning, keep building and keep your uptime high.`,
  },
  {
    episodeNumber: "004",
    slug: "ep-004-from-fast-food-to-leading-operations-at-an-isp",
    title: "LIU004:  From Fast Food to Leading Operations at an ISP",
    guest: "Matthew Oborne",
    guestTitle: "Director of Operations CBO",
    guestCompany: "Charter",
    guestLinkedIn: "https://www.linkedin.com/in/matthew-oborne-4a3b93ab/",
    description: "Think you need a degree or a ton of certificates to succeed in tech? Think again. Matthew Oborne joins our hosts Alexis Bertholf and Kevin Nanns to discuss how he went from working fast food to leading operations at an ISP. Your starting point doesn’t define your ceiling; resilience, adaptability, and a willingness to learn can take you further than you think. Matthew shares his career journey and emphasizes the value of building personal and business relationships.",
    airDate: "November 13, 2025",
    packetPushersUrl: "https://packetpushers.net/podcasts/life-in-uptime/liu004-from-fast-food-to-leading-operations-at-an-isp",
    youtubeUrl: "",
    transcript: `[Kevin Nanns]
Welcome to Life in Uptime, the podcast where we talk with the people behind the technology that keep our world connected. I'm Kevin, joined with my co-host Alexis. In every episode, we sit down with engineers, leaders, and builders in tech to uncover the stories behind their careers, how they started, what they've learned, and where they're headed next.
Our goal is simple, to help you see how far tech can take you no matter where you start from.
[Alexis Bertholf]
Today, guys, we have a very special guest. We're here with Matt Oborn, who started his career working fast food at Checkers before pivoting into IT. He doesn't have a degree, he doesn't have a ton of certifications, and he's mostly navigated his career by hard work and networking with the people around him.
He's navigated a couple of mergers, relocated across the country, and transitioned from video engineering into network engineering, and then moved into leadership as a director of IT. What we want you all to take away from this today is that it doesn't matter where you start as long as you have the drive to keep moving forward. Matt, welcome to the show.
How are you doing? Hi.
[Matthew Oborne]
Thank you. Good. How are you guys?
[Alexis Bertholf]
Great.
[Kevin Nanns]
Now, I have to be fully transparent on this episode. Matt is one of my oldest friends. We've been friends since middle school.
I think we actually became friends after he bullied me on a bus one day.
[Matthew Oborne]
Yes. Yes. I'll equate that that was fair.
It was a highlighter incident that happened, and yeah. I was a jerk when I was in middle school.
[Alexis Bertholf]
Weren't we all?
[Kevin Nanns]
Still is a little bit, but that's why we love you. Matt, you started out, your origin story is that you were flipping burgers at Checkers, working in high school, probably working too many hours that were illegal.
[Matthew Oborne]
Definitely underneath the table a little bit, yes. I enjoyed the job.
[Kevin Nanns]
You transitioned to tech. Can you explain to me how you got your first job in tech? What was that transition like, and why did you choose to go into tech?
[Matthew Oborne]
Yeah. At the time I was a first assistant manager, so that's equivalent to right below store manager, which really in fast food work, that means you do all the work and store manager takes credit. School, I actually didn't really mind it at all.
It was just a lot of hours, a lot on your feet. How I got the opportunity was honestly through networking. I had a really close friend who had gone through my military and stuff and then after he got out of the Marines, he went into an MSO company as a leadership within a NOC and a network operations center.
For those who aren't sure that term, that mainly means the center that monitors, creates the tickets and does some of the initial troubleshooting before sending to different groups. We were really close friends and he knew me as a hard worker, and so he gave me a couple opportunities to move into the NOC as an entry-level engineer one, which at the time in my life, I was also getting married, so I was looking at a little bit change of pace because those who work in hospitality food, it's a different beast of a schedule. You close one night, you wake up the next morning at 7 AM, and you work in godly hours and probably you might work 18 days in a row and not have a day off.
I was looking for more of a, not necessarily nine to five, but a nice one where I actually had two scheduled days off and not on my feet constantly. Plus, I'll be realistic, like fast food was never going to be the endgame. It was trying to get through college and stuff at the time.
I decided to pivot to the IT thing. Luckily, my friend tried to get me three times. First time he asked me overnights and I was like, no, I'm not going to work overnights.
People who love overnights, great, and sometimes we have to do it, but I couldn't do that life for that long.
[Kevin Nanns]
That's always the first shift they try to get rid of. Like, oh, do you want overnights? Here, we'll take this.
We're like, oh, no, I'll make you.
[Matthew Oborne]
Luckily, I got a swing shift, which was like a three to midnight position. I was able to at least get an interview. At the time, the MSO was just growing, so they were fairly new, so it wasn't like you needed a level of certification or anything.
It was more of how's your work ethic and how would you manage with the team and do you have some sort of technical knowledge? I'll be all open with anyone. I didn't even have cable at the time, literally.
I think I was still using AOL broadband, which ironically, I probably was still paying for it at the time before I realized you could give it free after they got rid of the dial-up service and stuff. But so that's how I got the job. Transition, again, part of it was a personal interest of just trying to change my work-life balance type situation.
Plus, I mean, I've never been one. I'm not like, I don't know. I'm not really a tech nerd.
Like, I don't build a lab at home and stuff. I do enjoy troubleshooting, I would say. I think I like working on cars.
I like sports. I like doing certain things like that. But I don't consider myself a tech nerd.
I think it was a good opportunity to change the work that I was doing and try a new avenue of life and see what kind of stuck. I mean, I did do some tech, like we were in web design together and nerdy fact, we were in computer game club together.
[Kevin Nanns]
Yeah, it's a little different than wanting to make that your career, though.
[Matthew Oborne]
Yeah, yeah.
[Kevin Nanns]
I feel like computer classes in school were always kind of an easy class. As long as you showed up and tried a little bit, they usually just gave you an A or a B. Especially if you copied off of me of everything you did, so.
[Matthew Oborne]
No, we were a team. We had the team of three. A team, quote unquote a team.
One of our third person didn't do anything. I did a middle amount of work. And you did, you made everything look pretty and professional.
[Kevin Nanns]
What I find interesting is that you did this transition not because you were interested in IT, not because you had a passion for IT or that you loved messing with technology. It was literally just because you wanted a better life, you wanted something different. And I think that's a cool or an important distinction to make because especially with kids these days coming into tech, you have, I always say kids these days, every episode I have to point out how old I am.
[Kevin Nanns]
Kids these days, no, I'm actually, a lot of people who are very public about being in tech to talk about tech, make videos about tech, we do so because we're passionate. And you get this perspective that you have to be passionate to be in technology. That if you're not absolutely in love with staying up 12 hours to figure out why your code's not working because you missed a semicolon, unless you have that passion, then you're not gonna make it.
But you are a testament to that not being true at all.
[Matthew Oborne]
Yeah, I mean, again, I think I'm kind of a weird build because I don't like to say I'm a mercenary because I haven't moved companies in 20 years. So like, I'm loyal to a felt sometimes, but also, yeah, I don't really like, I guess a long time, a long laid back in my life, I realized that you're not always gonna have your dream job, but you're gonna have to pay a mortgage. So, you know, at least enjoy what you do.
You don't have to necessarily be immersed in it, but as long as you enjoy what you do, who you work for, and the overall people you work with, usually the job really is a kind of second thing to me.
[Alexis Bertholf]
So, so Matt, I have a question. When you, was there any points where you got that job at the knock, and you were sitting there, and you were brand new, and you were learning all these things, and you thought, oh my God, what did I get myself into? Oh yeah, 100%.
Was this actually the right thing? Was there any points where maybe you started looking outside of IT? Because again, you weren't doing it because you loved it, you were doing it because you had to pay your bills.
You got options there.
[Matthew Oborne]
I did. I mean, so one, I don't, I'm not really a huge active looker for jobs. If I, I mean, again, I liked who I was working with.
I liked the people I was working with. But yeah, there was a complete time where I was like, maybe this is way above my head. Just because it's big difference.
Like when, I mean, of course, completely different fields, and you know, things were a little bit different, like in regards to just technology wise. Like again, I remember one day, like we would get phone calls from techs at the house, and we're expecting you to be like the guy who has all the answers. You're getting the guy who just started like four days ago.
And you know, like we would get questions like, and this was back in the early days. So it'd be like, how's HDMI work? Or I'm having a problem with this thing.
And I remember like looking over one of the guys who were there for a year, and I'm like, hey, can you give me like a 10 second rundown on how to troubleshoot HDMI? I mean, now looking back, it's silly, right? Because you unplug, you power up, plug one, you plug the other in, and sooner or later it will sync, went after trial and error a couple of times.
But completely, completely was, I think there's been a couple of times in my career where I've shifted to either a different organization or a different role, and I'm like, ooh, maybe I don't want to go back. Ironically, I did get counter-offered to checkers to go back, and I thought about it, but I didn't. Just really to your like, who gives you a counter-offer?
Like they're like, we'll pay you the same, we'll make you a store manager, and we'll give you health benefits. So I was like, it was, yeah, no, there was definitely a time I was scared, I would say.
[Kevin Nanns]
You weren't tempted at all to go back, because that's what you knew.
[Matthew Oborne]
Oh no, I was tempted to go back, 100%. Like it was, again, in checkers, I'll be fully transparent, is like one of my favorite timeframes was I was working for one of my really close, still long-term friends, seem to get a lot of jobs through friends, who was my store manager slash mentor, really. And so like, he was like, hey man, I got some, would you come back if I got this?
And I was like, in my mind, I'm like, there's no way they're gonna give me health benefits. Sure, if you get me this, this, and this, I'll come back. And like, he called at the end of the day, was like, he said, okay.
And I'm like, oh, now what do I do? Sorry, I didn't, sorry, you can add that part in.
[Alexis Bertholf]
No, you're fine, and I think when stuff like that, when stuff like that comes up, when you're in the middle of making a pivot, because I know there's multiple people who have been in that situation before, you're not happy at your current job, so you go looking, and then you find one, and then your current job's like, whoa, whoa, whoa, whoa, wait, and now we'll give you everything you wanted. And then you really have to do a bit of internal reflection of like, is this new job? Is this something that's aligned with what I want, with the future?
Was I running towards something, or was I running away from something? And then also, at my old job, you know, I was asking for these things before, but I was asking for these things for probably months or even years before I started looking, and you refused to give them to me. So now that I'm on my way out the door, like, that's so disrespectful.
Is that something you still wanna tolerate, or just cut your losses and walk away and start something new?
[Matthew Oborne]
Yeah, I mean, again, I think everyone, I honestly think most of us have some sort of that feeling when we transition, just because there's a comfort level, and there's a change, and there's gonna be expectations that maybe you're not aware of or new to you. I guess maybe that's probably my greatest thing is that I don't really get, I get scared, but I don't really run away from it. Like, once I pot commit, it's what it is, and better or worse, you know, I always look at it as, the thing I always look at is, like, I don't necessarily work, and this is gonna sound bad, I don't work for a company, I work for myself, and at the end of the day, my whole thing has always been, no matter what job I'm doing, if I gave 110%, whether I succeed or fail, there's nothing more I could've done, so at least I know I left it all on the, quote, unquote, court, you know? And I think that's kinda where that takes over in me, and plus, I do like, I like growth to a certain extent, right? None of us like to be overwhelmed, but it is nice to have new things and challenges and things that you have to learn, because you should learn, like, I try and say I learn something every day, I don't necessarily do, but you know.
[Alexis Bertholf]
So, I'm curious, for someone who openly admits you don't go to sleep at night thinking about work because you love it so much, what are the aspects of your job that you do really enjoy? Have there been things that you have grown to love, or?
[Matthew Oborne]
So, like, I don't go to, I don't go to sleep necessarily thinking about tech, like, I don't, Cisco router, Juniper router, you know?
[Alexis Bertholf]
Oh my God, did you see that Cisco HyperShield just came out, and EBT has packaged over it.
[Matthew Oborne]
Like, I'm probably, like, the worst person to talk about, like, what type of devices are new, and of course, unless I deal with them on a daily basis, but, like, I do like the work aspect of life, like, I like the being, I'm probably overly involved in regards to, like, reading emails and stuff like that, and following up on stuff, so I do kinda have a workaholic aspect on that part, but in regards to, like, what makes me kinda tick is, one, I like the troubleshooting, right? There's a problem, if I figure out the problem statement, let's work our way towards it.
Now, I might not know all the jargon and stuff that's going on, but it's interesting to figure out how to get past that, how it kinda came about, things you can do in the future to look for improvements or ways to either catch it before it becomes visible to the customer or other people, also ways to automate it, or ways that, you know, to prevent it from getting designed or put in place in the future, so there's a lot of things that it's kind of, to me, it's like a board game, like a mystery game, I don't know.
[Alexis Bertholf]
Like the systems or the process side.
[Matthew Oborne]
Yeah. Yeah. So, like, because there's a lot of interesting things, like, we'll have issues, and I'll be like, I don't know how that was a network issue, and then I have talked to someone who's a lot smarter than me, and then, you know, they'll be like, hey, this is what happened, like, okay, cool, that makes sense to me, and then, one, it kind of clicks, like, there'll be, I guess I'm weird in the fact that there'll be issues where I'm lucky where I'll just have, like, oh, we experienced that, like, six months ago, I kind of remember what we did, and then, but, like, a lot of it is interesting on how certain integral parts either just can sometimes cause issues that you don't expect.
[Kevin Nanns]
And so you've admitted you're not the smartest man in the room, that you're not like this huge techie nerd who's studying and doing all these certifications and all that stuff, but you've found a way to go from the knock to engineering to a director level. What has been, would you say, is the biggest quality that you have that has allowed you to progress over the years to this level?
[Matthew Oborne]
Yeah, I mean, again, like, I will be the first to admit I'm not the smartest, the fastest, the strongest, any of that stuff. One thing I will say is I do have, I think a strong work ethic is very key because I don't want to compare it to future generations because I think everyone's kind of built their own ways, but certain people just don't have that extra gear.
[Kevin Nanns]
Were you about to call kids lazy?
[Matthew Oborne]
Yes, yes.
[Kevin Nanns]
I don't think they're all kids. Matt and I are the same age. We both do it.
Like, kids these days.
[Alexis Bertholf]
I think there's a generational. I feel old now, too, but it's fine.
[Matthew Oborne]
Well, I think there's a generational difference that occurs every so often, and I feel like, again, me and Kevin, we're a little bit weirder generation because we're kind of split between two generations where we're not full, like, get off my lawn. Yeah, exactly, but we still had like that. You go to work.
I mean, I will be fully open. I don't, I haven't called in sick in like five days, or five years, so there's no like, like, I literally, I mean, I know I'm pretty much wasting money that way, but I don't really call in sick. I will always be there, and that's not necessarily because, you know, I wanna prove anything.
I more feel bad when I'm out because I will feel like I'm on my team down, and that's just a feeling inside of myself, so that's an example. Like, it's a work ethic aspect. Like, not always do you have to know everything, and I think people get fixated on how many certs I have or how much my technical knowledge is.
Like, there's a lot of people who are very, very technically smart, but they don't have either troubleshooting skills where like, you know, if you have, I'm gonna just go to a car, right? Your car doesn't start. You're gonna look for gas, air, and spark, you know?
But like, some people don't know where to start with that, even though they have like, a complete knowledge of what the engine's built like.
[Kevin Nanns]
Right, they'll check the tires.
[Matthew Oborne]
Like, stuff that doesn't make any sense at all. Correct, like, I'm gonna try and turn the key three times, and that's gonna do anything.
[Alexis Bertholf]
Is there a reason you didn't end up going for any certifications throughout your career?
[Matthew Oborne]
So, I got a CCNA, but in all actuality, I'll be honest. It was just more of, for the most part, I didn't need them as I progressed. When I was in the NOC, we had certifications that were semi-required, but most of them were field-related.
So, it was a lot of like, RF stuff. And then, and again, I was pretty much part of the NOC. They're like, at the infant stage.
So, like, I joke, like, I'm Homer Simpson. Like, you're building the building. I just kind of showed up and was like, hey, I'm here, woo.
You know, I've been here forever, guys. No, and then, a lot of the stuff.
[Alexis Bertholf]
You came with the building.
[Matthew Oborne]
Yes. And then, like, video, they never really, honestly, pushed for a lot of Linux certification until much later on in life. So, like, even though I was doing a lot of Linux stuff, or working on a lot of servers or video equipment, I didn't have to have any certification.
And it was more like, as long as you had the practical knowledge, it was okay. And then, same thing with network, I have the CCNA. But the other thing I kind of stress with certs is certs are great, but certs are a perfect-wise network, right?
Or a perfect-wise system. Like, I hate to break it to everybody, but when you get into smaller systems where you have control over, it can be a little bit different. But when you get into some of the other bigger systems and stuff.
[Speaker 5]
They're all clusters. They're all the mess.
[Matthew Oborne]
Doesn't matter, you know, what the perfect scenario is. They're all built completely opposite, you know, completely different way and sometimes it's paper clips and bubble gum that puts it together. I don't know, you know, like.
[Kevin Nanns]
Most networks grow organically, where they start small, and then you kind of just paper clip things and bubble gum things together, until you have this 20-year-old network that has been piecemeal together by 30 different network engineers, and none of them were on the same page doing it. Exactly. So, it's kind of like.
[Alexis Bertholf]
I can see anxiety here.
[Matthew Oborne]
Well, like, especially when.
[Alexis Bertholf]
I know that's all of this in real life, but I like to pretend.
[Matthew Oborne]
Yeah, it's like when you get to an MSO level, between mergers and stuff, it's a simple idea of like, how do we make it work? Not really what the best design always is, you know? So, like, that's one thing is.
Okay, so like, if we go back to the question. I'm sorry, I went off topic there, but one, I think my dedication, hard work is one thing that I kind of outshine. Like I said, I'm not smarter, faster, stronger than anyone, but I will outwork most.
I don't mind late nights. I don't mind early mornings. You tell me what days or whatever, I gotta be there, I'll be there.
Two, I think part of it is understanding your shortcomings, but also learning your resources when you hit those shortcomings, right? So it's important to understand like, I'm not the smartest guy. Now, my counterpart is incredibly smart when it comes to network.
I like, I think he's probably the smartest guy I've known in a long time. There's other guys when I was in the server world that was incredibly smart when it came to Linux and servers or video on demand stuff and that type of stuff. You know, it's building that relationship with them where I don't wanna lean on you all the time.
Like, I'm not gonna come to you for every question, but I'm gonna come to you when I have a question, learn from that answer, retain that answer, and then also be able to kind of build upon that, right? And over time, I think with that, it creates an adaptability that you're able to learn on the fly, grow, and then also grow your knowledge so the next time you have that little bit extra. Like, you don't have to go from zero to 100, but little breadcrumbs as you go along will build your abilities 110% comparative to just trying to learn it all.
[Kevin Nanns]
So is that how you, going from a NOC where you're dealing with, you know, a monitoring board of different alarms going off, you create a ticket, and then you push it off to engineers, and then it's goodbye, you're moving on to the next thing. You were thrown into an engineering role. And by the way, I did the same thing.
Matt actually got me my job at the NOC, at the ISP, and I kind of fell at the same path where I went from there to engineering. And for me doing this, it was a whole new world. Like, at the NOC, you had basically read access to everything, so you can't really do anything, and you have a giant, what we called spectrum at the time, where it was just colored alarms.
You're like, red is really bad, orange is like, you know, check it out and see what it is, that kind of stuff. How do you go from that to, like you said, you're not technical, you didn't have any certifications. How do you go from that to fixing stuff, or being in charge of actually going in and configuring stuff right away, without training, without a degree, without any of this stuff?
[Matthew Oborne]
Again, one was, as for the alarm board example, when I created a ticket, even though I knew who I was assigning it to, and this helped with the relationship building too, later on, is I didn't just want to assign it. I wanted to know what I could do to do whatever initial troubleshooting I had the ability to, because like you said, at NOC we couldn't, I couldn't even shut down a port, right? But I could at least say, okay, this port goes to a video device, probably not a network ticket, it's really a video ticket, where like 70% of the time, other technicians would just be like, oh, network device on the alarm name, boop, who cares what the port goes to?
You know, and things like that, but even like, when I was in a NOC, I gravitated more honestly to video than I did network, because video in my mind, for some reason, made more sense to me, and not gonna lie, it's also a lot more GUI based, so it's a lot more, you know, pretty pictures, green, red, you know? Yeah, exactly, you know, no scrolling logs and stuff, but a lot of times- It's okay, Matt, I also prefer pictures. Yeah, exactly, like MRTG compared to like show monitor interface, you know, it's, oh, I have green traffic, great.
But I think there's the opportunity there, again, I use that example as like, maybe I didn't know everything, but I would ask small questions, try to learn from them, and then as I learned from that, one, it's building my relationship, because the engineer's like, oh, well, he's at least trying to get me all the information I need so I can pinpoint what's going on, and two, it allowed me to grow my knowledge as things came about, and like, also the important thing is, you know, is the work smarter, not harder, like, get to know your tools real well, like, that's why companies spend millions of dollars on tools, because guess what?
Sometimes they can help you find the problem when you don't know the command, you know? So there's a lot of that part, I think. With the video world, we did have some break-fix capability, but it could be a little bit of a thing, but since I was there from inception, like, restarting MQAMs and GQAMs back in the day and stuff wasn't really that big of a deal for me, because, again, it mainly came from the knowledge of, hey, what can I do when I get this ticket?
But we're just gonna go in here, click this, QS it, and then restart it. It's like, oh, well, can you show me those three steps, and I'll do it before I send the ticket over. Cool.
[Alexis Bertholf]
Well, and I think, Matt, I think what I'm hearing, a common thread is just taking pride in your work, making sure that you are doing things thoroughly, or you want a generally good result. You're not just trying to push this ticket off your desk so that you can get to the next thing or go back to checking fantasy football or whatever else you prefer to be doing. You actually care about the end result, and I think that says a lot about, like you said, your work ethic and drive, and also how people perceive you.
I know, Kevin, we've talked a little bit about personal branding on here and your reputation, but things like that really do go a long way in the workforce, and people remember you for it.
[Matthew Oborne]
Yeah, like I said, I think it's a big thing because resources are important. Again, I'll continue to stress that. It's important.
You're not gonna know everything. If you are expecting to know everything to get a promotion, it doesn't work. It's usually the people who develop that ability, one, to take pride in the work, like you were saying, or take it seriously, right, take ownership.
I consider any time I put my name in a ticket that that has a certain value to me. I don't honestly care what other people think, but I care that when you see you're going through a ticket, you're like, okay, maybe this wasn't done right, this wasn't done right. Oh, there's Matt's update.
Okay, it was right. He did this, he did this, he did this. Cool.
One, I don't get yelled at that way. Two, it's more of like, again, I work more for my thing, so that's my 110%, right? I'm giving you all my effort.
I'm just not going, click it, take it, send it, yay. But again, I don't like to say that. It's important for me to gain knowledge as I go along because I want to know what I can do for that one.
And I want to know what options I have. Is there something I can learn to do or something I can learn to check? Even if it's a log message, like, I don't know.
Working in a NOC was incredible because what I don't think people get or realize with the NOC is you get to experience every technology. Like, it's not just network, it's not just video, it's voice, it's, you know, whatever application services you have, it's caller ID on TV, it's caller ID on a phone, it's 911 calls, it's SIP traffic, you know? So like, coming from the NOC is very entertaining because then you can kind of say, okay, well, what do I like troubleshooting to an extent?
And then kind of move from there. And that led me to video.
[Kevin Nanns]
And I get asked a lot because I get a lot of followers that are entry-level and a lot of them start out at help desk or in the NOC position. They're like, I want to move up. No one goes to help desk or NOC and is like, I want to stay here forever.
There are a few. There are a few, there are a few.
[Matthew Oborne]
Yes, there are a few who are like 50 years old and they're still, I mean, again, they're comfort zone.
[Kevin Nanns]
Yeah, and that's completely valid. But there are a lot of people who go into those positions as entry-level positions that don't want to stay there forever. And they ask me, what's the easiest way or the best way to move up?
And I always say, whenever you're done with your ticket, you've escalated or whatever, follow the ticket. Don't just be done with it. Follow the ticket, see what the engineers actually did to fix it, what the problem was.
You can learn, number one, you can learn from it. So if you do want to apply for that job eventually, they're going to be asking you technical questions and you have some background of how they fix things and how their methodology is and troubleshooting and that kind of stuff. But also you can start doing some of the legwork for them, doing some of the show commands they would need, some of the output, some of the logs, that kind of stuff.
So when they do get your ticket, they start associating your name with doing the hard work that the, I don't want to call it, the grunt work of doing this stuff with them.
[Matthew Oborne]
It's the first, you're doing the first level troubleshooting that they would do. So it allows them to get past the first 20 minutes. Okay, let me first figure out where this device goes.
Okay, now let me see how long it's been down. Let me see what's in the logs. Like all of that stuff is honestly, it's not easy necessarily, but it's something that if you want to grow, those are things you want to do.
Because like you're saying, they're going to associate, your game is making that brand, that name of branding, right, association. Matt, I get Matt, he's on a bridge. He knows what's going on.
He's paying attention. He's following through. He's getting whatever I need.
Plus he's following along with the ticket and he'll help me get whatever additional logs I need while I'm doing, maybe sharing stream with Cisco or Juniper or whatever. He'll pull the logs or whatever, you know? So I think that's the twofold, right?
Like a lot of people think, okay, I have to, if I'm the smartest guy on the team, I should be the highest paid or highest promoted. One, I hate to break it to you in the real world. There's always going to be someone who's paid higher than you that necessarily doesn't know or is as good as you.
Two, it's just a matter of circumstance. And two, it's one of those things like, it's not, there's a lot of smart people who just don't take the extra effort to do the bare minimum, right? Like, or even the extra step, right?
Like I joke, like you have percentage of people I feel like, you'll have certain people who will go above and beyond. You have certain who are happy just doing, okay, I click it, I take it, I send it. And you have certain people who are like, I don't even look at the board, I don't know, you know?
So like different, yeah, just for me, just, okay, I'll click it, no problem. But you know, there's different levels. And if you want to progress, yes, search and knowledge is great, but you could have all the knowledge in the world.
And, but people just see you as not effective, then it won't suffice. Like I've been working, I've been growing a lot on my interpersonal skills because, hey, tech world, you know, we're not all the most personal people.
[Kevin Nanns]
What are you talking about? No idea what you're mentioning.
[Matthew Oborne]
But one thing I've always been throughout my career is no matter what you perceive me as personality wise, I will get the job done for you. So like, come to me, you know, I might not give you the exact personal response you want, but you'll know I'll get the job done and get to where it needs to go.
[Kevin Nanns]
So- You say that you're like, you're a problem solver? Is that like your brand is like, no matter what, your boss comes to you, your director comes to you, and they have a problem and you may not be able to fix it yourself, but I will find someone to fix it and the problem will get resolved.
[Matthew Oborne]
Yep, well, usually go through. And I mean, that's my goal is in the end that if you give me an issue, whatever it is, is I need this activity done by a certain date or I need to fix a certain problem that's been going on for months. Cool, even if it means we're sitting on a call with a vendor for like every day at 2 PM until we figure out the problem.
Cool, you know, it's fine.
[Alexis Bertholf]
Depending on those calls and they're not fun.
[Matthew Oborne]
They are not like, oh, what's different today? Well, we still don't know.
[Alexis Bertholf]
The first three days, it's like, yeah, let's get the team together. This is so exciting. We're gonna fix it.
And then by the fourth day, it's like, hey guys, no updates.
[Matthew Oborne]
We're still looking at the logs. Our development team is trying to lab it up. Yeah, I know.
[Alexis Bertholf]
It's not fun to be on either side of those calls.
[Matthew Oborne]
It isn't, but like Kevin said, I guess my nerdy tendency is not necessarily, I'm interested in certain issues. Like if I have an issue that was going on for a long time and or it was something completely strange that I, either one, my initial thought was like, hey, this isn't gonna be something that should be a network related issue or video related issue or whatever. And then it ends up being like, those are the ones that I still follow them a lot because I care about what the outcome of the impact was.
So that way I can equate, how do we get to the end result faster? Sometimes it's just having the knowledge that, hey, we had this ticket. Again, we had this ticket three months ago.
Same thing, same exact standard. Let me see if I can find it. Okay, we did this, this and this.
Can we try that? Sometimes it works, sometimes it doesn't.
[Alexis Bertholf]
I'm curious, Matt, because we've talked a lot about like going the extra mile, working hard, being there early, staying late, doing what it takes. Have you had a point in your career almost where you took a step back, right? And that's a personal question for me because I'm at a point, not a point in my life, but like the past six months just personally have been really, really rough.
And I'm really struggling with, I feel like I need to go zero to a hundred in my job with content. And also it's okay to take a step back and just let stuff ride and have a season of pause. Have you had one of those?
[Matthew Oborne]
Okay, so I have. What I'll honestly tell you is working for the same company for 20 years in different organizations, you get ebbs and flows. I think every person, any type of job will get ebbs and flows.
Like there may be a period where you're dedicated 300% and then there's a period where you're like, you know, and it's okay, right?
[Alexis Bertholf]
It's okay sometimes to be like- I just don't care that much. It's okay if there's some slides.
[Matthew Oborne]
Well, I don't think it's care. I think it's just that it's like anything. If you do anything for too much at such a high level, you're going to feel burnout, right?
If you're taking care of elderly people and they're your parents, you're going to have a burnout at some point where it just tires them. You know, if you're working a car for six months and you know, it just seems always giving you problems, you're going to have a burnout. I think everyone has that period of time where it's like, well, maybe I'm not giving my 110%, but I'm giving 80%.
But you know, again, I can joke and I feel sometimes like my 80% is still pretty good. Someone else's 100%.
[Alexis Bertholf]
You trained that, you trained that.
[Matthew Oborne]
I did. At first, like I've had a lot of good mentors in my life and I've had a leader who was literally like, look, Matt, because I would get so frustrated. I would come to him and be like, look, I'm beating my head against the wall and this is happening, this is happening, this is happening, but we're not going anywhere.
I don't know what else I could do. And I review tickets every day and blah, blah, blah. And he's like, look, Matt, it's okay.
Just take it to 80%. Take a break for a couple of weeks, couple of months, whatever. Your 80% is fine.
I'm happy with your 80%. When you do 110%, I'm even more happy. But you know what?
I'm not mad at you if you're just like, look. I can joke there's been times where I've certain quality checks that I do. And I just got honestly tired of emailing when I did them.
So I would date them on the last time I did them, stop for three months and then wait for someone to be like, did you stop doing the quality checks? Well, yes, I did.
[Speaker 5]
It took you three months to notice.
[Matthew Oborne]
What date do you think I stopped? Oh, around this week. I'm like, bingo.
So I don't think it's a bad thing. I think we all need to learn to adjust sometimes our energy levels based on what's going on in life, how we feel, that type of stuff. Like I don't take any days off, mental health days, anything like that.
But there are days that I go in there and I'm like, okay, not gonna work. Now I'm gonna do my meetings. I'm gonna get the tape if an outage comes in or anything, but I'm not gonna go too in depth on everything.
And I think there's also ways of doing that throughout your week. Like what I've learned, what I learned most from fast food world is it's gonna sound bad, but like you in fast food, you had to cut labor throughout the week. So you would hit a percentage of labor comparative to sales, right?
So you never wanted to have to cut labor on Friday and Saturday, cause those are your two busiest days. So you would work your butt off Sunday and Monday and Tuesday. And then that way you could kind of coast Friday and Saturday through the busy stuff and not have to have like only one guy doing fries or something.
You could have like literally the one guy just running back to get whatever product. So that's kind of how I do it as well is like I don't necessarily not give 100% all the time. I just think I stagger my week to where I know, okay, Sunday's my slow day when it comes to impacting events or ticket wise.
So I'm gonna try and push through everything I can paperwork wise or project wise. And even though most people book out at like one o'clock, okay, I'll stay till five, my normal shift, but I'm doing paperwork and stuff or numbers or quality checks or whatever. And that way when Monday and Tuesday come, which are like the days where everything's gonna break, you're like, okay, well.
I'm ready. I'm focused on mainly just this. This is what I got.
And I'm in this headspace and that's good. Like all I gotta do is worry about the influx. I don't gotta worry about all the side objects.
And then Wednesday is kind of my day to again, sink back into that. Cause I have a second, my counterpart's there. So it's like, well, you're here.
I'm gonna sink back a little bit. You do the main stuff and I'll do whatever work I need to do to make sure that when I leave you're set up for success the rest of the week.
[Kevin Nanns]
It reminds me of like the ant in the grasshopper story where like the ants working all the time and then when the emergency happens, he has all that surplus when the grasshopper has been slacking off, the emergency happens and he's got a pile of crap that he has to deal with. It's kind of the same thing where you kind of front load your shift week. So you get all their paperwork, all your stuff out of the way.
So by the end of the week, you can kind of take it easy a little bit, still do your meetings, still do what you have to do, put out fires, but you're not waiting until the last moment to finish all your stuff before your end of the week.
[Matthew Oborne]
Correct. And like, I don't, it's just not overloading you. So like there's also ways to do that.
And like, I consider that as taking a step back. Now, of course, the weird part was when I go into leadership, then it's, as you go up different levels of leadership, you have to kind of, it was really hard for me when I went from manager to director, because manager, I was very much kind of hands on like, okay, we're doing this. Okay, I see it's costed.
Okay, I see this, I see this, we're good. Where director, you kind of have to take that little bit of control factor away and be like, okay, I trust my manager's gonna check this. And in the beginning, that was a little hard for me.
Still, still work through that as days go by. But there are certain aspects that you'll take off your plate as you progress as well.
[Kevin Nanns]
That was gonna be number one, great segue. Thank you, that makes it easy for me. Because I was gonna ask you, now we've been talking about being a tech and being an engineer for a while.
And I wanted to transition to your leadership role and how you made that transition mentally of going from, you know, I gotta work 110%. I'm concentrating on my tickets and my outages and that kind of stuff. You're thinking more of a team level, more of a company level, which to me, like I couldn't even, that big a picture where I'm thinking company wide, I'm making decisions for not only me and my team, but for the benefit of everybody.
That's a lot of pressure and a lot of change in the way you think. So how was that transition like for you?
[Matthew Oborne]
So again, I think there was a lot of changes as I progressed through that, right? Like I think, I'll say there's been different stages in each one. So like I went from engineer to manager, not necessarily, again, I'm gonna be all honest, transparent, not necessarily because I chose that.
It was more of a, hey, we need this at this time and we feel you're the best guy to fill in at that position. But in all honesty, I was probably a better manager than I was a network engineer.
[Speaker 5]
Well, that makes sense.
[Matthew Oborne]
Again, I just think I wasn't, again, I had gone from video to network fairly quickly without very much training. So I could trace an M trace or I could trace a multicast route with nobody, like nobody's business, but could I necessarily do all the configurations you need me to do on stuff? Probably not.
But I think when I first, the first problem I experienced when I went into a manager from engineer was I was too focused on trying to be an engineer and a manager at the same time. And so, and I think in the tech world, it is great. I think it's very much, I don't necessarily hate it, but I do dislike the comment, like I don't need to be technical for a management role because yes, you don't need to do technical things, but you need to have the ability to, sometimes, again, it goes back to like the knock thing.
You need to be able to at least check like an interface description sometimes or a log message sometimes, or at least understand what this might mean. Do you need to know how to- Yeah, do you, like I can look at a device and tell you I have an Apex on it, which means that Apex is my video background is gonna feed channels. I don't know what channels, I don't know what type of channels, but it's gonna feed channels.
So likelihood is I can't reboot this device in the middle of the day because I'm gonna cause some sort of impact. So like, I think it is good to have a technical understanding, not necessarily, you don't have to be able to rebuild the network, fix the problem, but I digress. So I, when I first started, I was trying to be twofold engineer and manager, and that, my direct report at that time actually took away my config access to stop me from doing that.
Like one day my boss came up to me, he was like, hey, go to config T. I was like, oh, it says I'm not authorized. He's like, awesome, I'll try to be a manager.
[Kevin Nanns]
They're gonna force you to take a step back.
[Matthew Oborne]
Yeah, but like I needed, I honestly needed that because it was very important. Because again, like you said, the dynamic shift, like it's not just your ticket now, it's your overall team, right? So like, how is my team doing with their tickets?
Where is my team at with their tickets? Is my team doing the correct things with their tickets? Are they following processes?
Are there processes we need? Is there training we need? That kind of stuff.
And as I evolved, I think that helped a lot. Again, I think when you go into leadership, I'm a very big component of like, I have a certain structure I build and whatever, but like, it's always, I have certain generals who I rely on, who are my engineers, who you tell me in all honesty, I'm gonna take it almost as it's gospel. Now, I might check you a couple of times and then I joke with you and be like, ha, ha, ha, you lied to me.
But there's certain ones I put certain levels of responsibility based on, again, a lot of it is knowledge, work base, or work ethic, that type of stuff. Just because you're the smartest guy on my team doesn't mean you necessarily are the guy who I trust full-heartedly.
[Alexis Bertholf]
Is it hard, because you do have such big, or such a lot of like work ethic and drive, is it hard if someone on your team isn't responding to something the same way that you do? Or you would?
[Matthew Oborne]
No, again, as I've, again, this is a growing process, right? So when you first start, yes, it is. Cause you're like, everyone should work like Matt does.
But unfortunately, that's an unfair expectation, right? Cause I put myself, there are certain things, I'm probably my hardest critic always. So like, I always feel like there's something I could have done better.
And on top of that, I work at a certain work level effort. I look at it now as I've grown, as I think it's important, as you grow up, especially as in the management level, when you're managing a team, I think it's important to have some sort of, not personal relationship, but ability to be personal for a person, like what's going on, how's life, blah, blah, blah. But also understanding what their desires are.
Cause there are some people who, they're happy being an engineer three for the rest of their life, taking their 3% increase. They don't want the extra stress. They wanna do their thing, you know?
Like I always equate it to a basketball team. Like if you had three Michael Jordans or three LeBron James, you wouldn't win the championship because you don't win on pure talent, right? Like in a good basketball team, you have to have the Jordan and the Pippen and then the Rodman, right?
Jordan is the guy who can do everything and he's amazing. And you have Scottie Pippen, who's pretty good, but he defers to Jordan. So he knows, hey, Jordan's still my, if the end shot comes, I'm passing the ball to him and he's taking the shot.
I know that's happening every time. And then you kind of have the Dennis Rodman, who's the underappreciated guy who, you know, he gets the rebounds and does all the dirty work that necessarily Jordan and Pippen don't ever have time or want to do. And then you have other role players, right?
People who like, look, I just need you to come off the bench one time and make a shot. I just need you to take this one type of ticket and roll through it every time, you know, like, and I think the big part is understanding that part. This is your jam.
Yeah, you are great at this type of ticket, you know? I mean, there's been engineers where I'm like, look, man, I don't want you to take advantage. I just want you to do like the basic optical stuff because you're great at that.
When you set that next level, things go bad.
[Kevin Nanns]
But that plays a role. It's like it frees up the other engineer who is good at outages to take that on instead of trying to fit a round peg in a square hole.
[Matthew Oborne]
Right, it's just like understanding. There's certain engineers who love to do the little, I don't want to say the projects, right? Like they love to be like, hey, I need you to investigate this.
This has been happening and I don't know what it is, can we figure it out, work with the vendor, work with the SD, whatever we have to do to figure this part out. And they love that. And they'll give you an amazing email write-up on everything they've done.
And then there's other ones that are like, you want me to do what? That's so much work. And I'm like, all right, fair, get it, you know, so.
Fair, it's like, fair enough, all right. I mean, I don't want to push you to do, like if you put, there's a difference between trying to push you to take that next step, like, okay, hey, next time, let's look at the logs and check this part. This is what we were looking for.
Comparative to like, I want you to give me 110% when I know that's not your 110%. Cause then you're just, it's just, you're not gonna get the outcome you wanted and you're probably gonna get more stressed out and then you're just gonna stress them out. And then, you know, again, I think, and I didn't know this when I first became a manager, when I first became a manager, and I'm sure Kevin can attest to it.
I was sometimes very hard on my engineers where I was just like, I was very much like, I need you to do this, this, this. Why are we getting here? And, you know, and it didn't work out well sometimes.
[Alexis Bertholf]
I was gonna ask Matt, what was the push to go into leadership? Was it just the next logical step in your career or was there a burning desire to grow and develop young talent?
[Matthew Oborne]
Um, again, this is not probably the perfect answer. It's weird. Like throughout my whole life, I've never aspired to be like, I wanna be the manager or I wanna be the leader or I wanna be anything like that.
But it just seems like I naturally fall into that realm. So like when I worked at Checkers, I was a cashier and I was a line guy and whatever. I was a normal food person.
But then when they noticed my talent, they're like, hey, maybe you should try for a shift manager. And then from shift manager, it's like, oh, you're doing good as a shift manager. Let's go to, you know, second assistant.
And, oh, Matt, I want you as my first assistant. And it kind of worked that way in the knock too, I think, was it was a, go ahead.
[Kevin Nanns]
What is the talent you said? Like they saw your talent. Now your talent wasn't just like, because you could flip a burger really well, right?
It's all in the wrist and you were flipping it up. It was, it was not that kind of talent, right?
[Matthew Oborne]
No, no, no, no. A hundred percent not that kind of talent. Now I could run line in like 30 seconds during lunch.
So I was okay. But no, I think the talent was that there was an aspect of critical thinking, like, how can we do this quicker, better, easier, not because I'm lazy, just because it's silly to do inefficiency, right? Like in hospitality, it's like, how can you eliminate steps or mistakes?
And tech world, it's kind of the same thing, but it's just in a different world. But I guess it was the attention to that part. Plus the fact that, again, I'll put it, I'll stress the work ethic and availability.
Like I can always be count on, I'll always be there whatever time you needed. And then I think there was also just the aspect of, I don't feel like I have it. And I don't know if you do, cause you're my friend, but like, I, people were like, oh, you have this like somewhat sort of charisma around you.
It's not necessarily the most politically correct always.
[Kevin Nanns]
Matt's got the Riz, we heard it here.
[Matthew Oborne]
I don't think I do. Like, I don't, like, I've never been great at, you know, other ends of life. Yeah, I guess it's my aura, right?
[Kevin Nanns]
I can tell you, I have known Matt in multiple capacities. I've known Matt as a kid. I've known Matt as the drunk guy in Las Vegas.
I've known Matt as a manager. So I've had all spectrum of Matt. And I'd say that your ability to talk to people on their level, I think is what it is.
Like you can talk to your employee or whatever. And like, I wouldn't say you're trying to be your friend, but you talk to them in a way that is like comfort, like it's comfort, it's a comfort level. They're not scared of you as much, but then you can also elevate yourself and talk to directors and write emails that are like, you know, that go to the director's level.
And you can adapt to your audience and who you're around.
[Matthew Oborne]
Yes, yeah, I agree with that. So like, so like the manager thing, I've always just kind of gravitated that when I was at the NOC, I ended up going into lead, supervisor, and then I went to video. And I swore that was gonna be the last time I got in management just because I got tired of the politics within the NOC.
And then I went over to network and my manager at the time was like, hey, I need a manager. I'm like, I didn't want to be a manager. Remember, that's why I went to video.
And he's like, no, no, no, you're not understanding what I'm telling you.
[Kevin Nanns]
You're being volatile.
[Matthew Oborne]
All right, yeah. You're gonna be the manager because I can trust you and I know you'll make sure things get better. And I'm like, all right, cool.
And then again, like I also have never been one who stresses for titles. So like, for instance, I was a manager for seven years till I got senior manager. Not because necessarily I didn't deserve it because there was times where like for three or four months, like my director was on a health leave and that was me and no other managers.
And Matt ran the ship, we kept it afloat and people were happy. But at the time you'd have to be a senior manager before you get promoted to a director. So there was that HR limitation, which I didn't care at that point.
So, and then I got senior manager and then I went to director and director was kind of, again, I slid, like it was an admiration after I had gotten a management role. Cause of course you want to continue to progress. Like I don't want to just sit at a manager for the rest of my life.
But so when that avenue opened up again, same leader came to me. It was like, hey man, you're the best I got. You ready for this role?
Sure, I'll take a swing at it, let's go. Whatever you want.
[Alexis Bertholf]
Do you think that's a big part of the reason you never went looking outside the company? Because I think that, I mean, today, the general rule of advice that people give my generation is every three years, at least every three years you need to be looking if you're not getting what you want, if you're not getting promoted. Even if you are getting promoted, you'll get promoted faster if you continue hopping, whether that's roles internally to the company or externally to the company.
And there just seems to be a lot more movement.
[Matthew Oborne]
I'm sure that's probably part of it, just my loyalty to certain aspects. And again, on that topic, I probably am not the highest paid and I'm gonna go okay with that too. I feel like I'm making enough money to live comfortably and I'm not rich, I'm not poor, I'm not starving or anything.
But on the same note, I don't know, again, my outlook is if I enjoy the person I work for, and a person for the people I work with in general, I'm complacent on being whatever role I am as I move through it, right? Now, do I wanna sit and be the same role for 15 years? No, do I understand that there's a process and there's also a numbers game that you run into?
So maybe that three years turns into five years, cool. But a lot of times what I've realized out that aspect is one, name branding, right? If you're constantly moving, how do they know your name brand, right?
Now, I'm not saying 20 years of a company is what you should do always, because I will agree it probably doesn't get you paid as much as you would like to get paid in life and stuff, but there's a name branding. So like I have a certain brand that goes with my name and I don't wanna say I get some get out of jail free cards, but because of my loyalty and my name branding, when others might've gotten into more, got a little shorter of a leash, I probably got a little longer of a leash in regards to disciplinary action or even just expectation-wise.
[Kevin Nanns]
I also feel like the ISP world is a, so in tech in general, I feel like we're kind of a small niche of people, right? There's like seven degrees of Kevin Bacon, where I feel like I can pretty much run into anyone in tech and someone knows someone. And I think the ISP world is even smaller.
There's only a few ISPs out there. And it's harder, much harder to jump around at an ISP. Is that accurate?
[Matthew Oborne]
It is, it is, it is. It's a little easier depending on situations, but it is, what I always joke is like nine times out of 10, you end up coming back to the company at least one time, right? So it's like, you're not really leaving the company.
You're just leaving, like, I get it. There's pay increases and stuff, but sometimes there's also that, you get, again, I will go back to that name branding aspect, right? Like the name branding aspect is the company equates you to a loyal employee who does more than is expected.
And so sometimes when they're like, oh, well, Matt missed this, you're like, but he's been, you know, he's called this like 37 other times.
[Kevin Nanns]
So you have a pattern of success.
[Matthew Oborne]
Right, and it's hard to develop that when you're constantly changing jobs and students to further your financial situation.
[Kevin Nanns]
Yeah, that makes sense. So you talked about not, not leaving the company and staying where you are for your brand, but even though you haven't moved companies, you've had mergers and buyouts as all ISPs do every few years, it seems like have you, like I've never been through a merger. I left the ISP right before they got bought out and everyone moved to Colorado.
So I didn't have to experience that, but did you have to experience that? Like back to like, trust me, I've been doing this for a while when you have maybe a new leadership team or a new, like they're trying to find out who's the fat to cut.
[Matthew Oborne]
Yep. Yep. A hundred percent.
One, one reason why I went to network was because it was fairly the same leadership chain as previous, but even within that, when as manager role, like you deal with different organizations within your own organization and they were all different leadership who had no experience of who you were or what you did or your capabilities or anything like that. Same thing with engineers and stuff like that. And everyone being in different roles.
So, yeah, it is a rebuilding to a certain extent, but a lot of times what you're lucky in those regards is a lot of times there'll be someone who's on that team who has some knowledge of, you know, like, Hey, I'd probably go talk to Matt. Cause if you need something done, he'll get it done for you. And again, the work ethic is a big part, right?
So like, it's great to have knowledge, but when you have those mergers, they're going to look at who's dependable, who's the one who works, you know, goes a little bit the extra mile, who's the one we can count on. Again, for a corporation, you are a number. Don't ever get that through your head.
Like the corporation honestly cares that you're Matt Oborn or anything like that. Employee number 115.
[Alexis Bertholf]
We've been there for 20 years.
[Matthew Oborne]
Doesn't matter. My login is still a P and a number. So, you know, I'm literally the boring, like I'm P2175553 reporting for duty, but it's fine.
You don't have to get my password. Good luck. But that being said, like it is a, it is good because other people will be like, Hey, you'll get certain people who vouch for you, right?
Like, Oh, Hey, Matt's really good. You should go talk to him. Oh, Matt came off like a jerk.
Don't worry. He's not really that, you talk to a person. He's just a little short guy who's pretty much likes Christmas.
[Kevin Nanns]
And that's kind of weird, you know, that's how we should describe it in the podcast. Like our guest today is Matt. He's a little short guy who likes Christmas.
[Matthew Oborne]
So like, it's good. Cause you still carry the brand over. And then as you said, like, since ISPs are so smallly intermingled, that like a lot of times there's been times I get on Cisco calls or Juniper calls or someone and the engineer was literally someone who worked with me, for me, part of me, or I interacted with.
So like that branding can still go across, but it's a small industry. It is a, it's a very small pond. Like I'm waiting for the day.
I keep trying to call Kevin back when he says no.
[Kevin Nanns]
You can't pay me enough. At Colorado life's expensive, man.
[Matthew Oborne]
I got a basement, but I got a basement bedroom for you, buddy. It's free.
[Kevin Nanns]
Did you get to reapply for your job? I've heard that as a, as a thing.
[Matthew Oborne]
I, when the, when I was with the knock and we transitioned, I don't even know what we naturally transitioned to because the roles and everything were the same. We just transitioned name. I did have to reapply back then video.
I never had an adjustment. So it was just whatever you were in charter. Whenever you apply, whenever you go a position in management, you will have to technically reapply for that for like, if I want to become a director, I got to apply for the director role.
I can't just not go through that process. But from an engineer perspective, the only time you'll have to reapply is when you go from like an engineer for their principal engineer. And that's more just them verifying.
You're actually knowledgeable enough to be a principal engineer is that's a good technical interview. Cause it's a fairly large pay scale slash reward jump. And then on top of that, most of the time, whenever you get a normal promotion, you'll have to have some sort of new cert.
Nowadays in the MSO world, it doesn't have to necessarily be like CCMP, CCIE or anything like that. It just has to be like, oh, I got my optical certification, which like the Sienna optical is an open book test. So cool, took some time.
Or I did like basics of Linux or something like that. But so I've only officially had to interview for my job one time. And that was within the NOC when we transitioned from the original precursor NOC to the TSO NOC, which in all actuality, the responsibilities and everything wasn't different.
I think it was just their way of cutting the fat without having to call it a layoff or whatever.
[Kevin Nanns]
Yeah, that's what I was talking about.
[Alexis Bertholf]
Matt, I do have a question for you. And I know we're almost coming up on time here, but for someone who doesn't have a degree or certifications and they're listening to this story and they're wondering, where do I start? How do I actually do this?
What is one thing you want them to take away from your story?
[Matthew Oborne]
I would say, one, don't feel that you don't have abilities because of the degree. Yes, it gets a little harder to open some doors. But again, the more and more you network, the easier that becomes as well.
Like there was my, the person who hired me, even me to a certain extent, there's been people who I've hired who have no like technical background, but they are very hard worker, whether I see it. I mean, I remember the person who hired me, they hired someone out of a restaurant just because, well, I was out of a restaurant too, but just because they knew the work ethic of that person. So, even when you're trying to work to get into the tech field, whatever you're doing, just know that there might be someone out there who will see the effort you're putting forth and that can even get you an opening to the door.
So, it's not always what you have on paper. Like, I'm terrified to death if I ever go into the job world today because I don't have a cert, I don't have a degree, I don't, you know, I have a high school diploma, some college and a lot of experience. Now, of course, once you get your foot in the door, that's where your opportunity is, right?
So, focus on getting a foot in the door, not necessarily how skilled you look. And once you get in the door, then it's your opportunity to run with it, right? Like there's been plenty of people who I've given a position where I'm like, well, giving you an opportunity, what you do with it is your choice, right?
Like if you decide to just completely throw it away, then you'll end up getting terminated or laid off or whatever. And then, but if you take it, run with it, put forth effort, you can become successful, make a career. I find that's what I felt.
I mean, that's what I felt I did. I just got a foot in the door, luckily through a friend. My friend never guaranteed me anything.
And because of the effort I've put forth, I've made a career out of something that probably I honestly shouldn't have got a foot in the door nowadays.
[Kevin Nanns]
Yeah, like it's crazy that you and I both wouldn't get hired now at The Knock.
[Matthew Oborne]
Right, yeah, I'm like, okay, great. You like, look where I am now. And so I don't ever want, I don't think people, the biggest thing I can always tell people is don't doubt yourself just because of lack of education or certification.
If you can network successfully and you have a good personality and good work ethic, you can also be successful. You don't have to have a paper trail that shows it. You paid $9 million just to say that you're a Cisco engineer.
[Kevin Nanns]
You summed that up. That was the summary of the episode perfectly. Good job, Matt.
You did the hard work for us. See, 100% effort.
[Alexis Bertholf]
All right, guys, well, that is it for this episode of Life in Uptime. Huge thanks to our guest, Matt, for coming on and sharing his journey. And thank you for listening.
If you enjoyed this conversation, be sure to follow the show so that you never miss an episode. And if today's story gave you something to think about, share it with a friend or colleague who may need it. And until next time, keep learning, keep building, and keep your uptime high.`,
  },
  {
    episodeNumber: "005",
    slug: "ep-005-the-importance-of-community-in-a-networking-career",
    title: "LIU005:  The Importance of Community In a Networking Career",
    guest: "AJ Murray",
    guestTitle: "Demo Architect",
    guestCompany: "Zscaler",
    guestLinkedIn: "https://www.linkedin.com/in/ajmurrayvt",
    description: "AJ Murray joins Kevin and Alexis to share his unique journey into tech, pivoting away from aviation maintenance into networking. Together they explore the importance of person-to-person networking and building a community in order to be successful. They also talk about the reality of burnout, which ultimately led AJ to step away from his podcast. AJ also shares the steps he's taken to recover from that burnout.",
    airDate: "December 11, 2025",
    packetPushersUrl: "https://packetpushers.net/podcasts/life-in-uptime/liu005-the-importance-of-community-in-a-networking-career",
    youtubeUrl: "",
    transcript: `[Kevin]
Welcome to Life in Uptime, the show where we talk with the people behind the network that keeps our world connected. I'm Kevin, joined by Alexis, and every week we sit down with engineers, leaders, and builders in tech to uncover the stories behind their career, how they started, what they've learned, and where they're headed next. Our goal is simple, to help you see how far tech can take you, no matter where you start from.
[Alexis]
Well, we have a really exciting guest today. We are joined by AJ Murray. Now, AJ is currently a demo architect at Zscaler, and he has more than 15 years of experience working in the technology industry, and I believe he also has a bit of experience podcasting.
Am I right, AJ?
[Kevin]
A little bit.
[Alexis]
Wow.
[AJ Murray]
Yep.
[Alexis]
A little rusty now, right?
[AJ Murray]
And I don't know, I mean, if you're watching this on video, if you do any sort of video, you might see the cat bite marks in the microphone, because it's just been, like, tucked out of the way for a little bit, and we got some kittens, and, well, they thought they should play with it, so.
[Alexis]
I think you should have brought the kittens on the show with you, personally.
[Kevin]
You could, like, dust off the mic and get all the equipment back out.
[AJ Murray]
Oh, yeah, there was, like, tons of dust on the headphones. I had to clean them off as a whole thing.
[Kevin]
It was funny enough, your podcast is actually The Art of Network Engineering that you are no longer a part of, but it's still out there, was, like, the first podcast I ever listened to trying to find networking stuff. And it was instrumental in, like, I don't know, building that connection where, like, there are multiple careers out there that can connect different people, and it's really surreal to me that you are now a guest on my podcast, our, Alexis and I podcast, that is kind of doing the same thing, but, like, it's very cool that how things have come kind of full circle for me.
[AJ Murray]
Absolutely. When you asked me to be on here, I was very excited and honored, so thank you very much for having me.
[Alexis]
We're standing on the shoulders of giants.
[AJ Murray]
I think that's the right phrase. Oh, wow, I don't know. Those are, oof, too kind words.
Too kind, too kind.
[Alexis]
So, AJ, to kick us off, can you tell us a little bit about how you got started in tech? I feel like when I look at your career history, you've done a little bit of everything from working to a partner, working at a vendor, working in a NOC. Like, how did you actually get started working in tech?
[AJ Murray]
Yeah, so your career and my career have some parallels. I actually started out with, you know, my track, my original track, was to do aviation maintenance. There was a program in high school that I was attending.
They had a tech program. They had several different, like, you know, tech-focused programs, like automotive. You could do auto body, auto repair.
You do all sorts of things, but they had an aviation maintenance program. And I went through that with the intent of going on and finishing my AMP, my airframe and power plant mechanics certificate. And what happened was, was September 11, 2011.
And the first move the airline industry made was to lay off mechanics. Because for every one certified mechanic, you could have 10 uncertified folks working under that person to sign off on their work. And I watched a lot of friends continue on that path, get their certifications, and then struggle for years to find work.
And so, you know, I was just like, well, this is probably going to be an uphill battle. I got to find something else. And so, I just kind of puttered around for a few years.
My father passed away unexpectedly. And that really kicked me in the butt to, like, okay, it's time to do something. So, you know, I started to attend a local community college.
I didn't really do well in high school, if I'm being completely honest. And it was while I was taking classes at community college, I found networking. And this is my jam.
This stuff is really cool. I can see this. Networking is not going away, right?
Like computers, you know, they're connected now, they're going to be connected forever. They're obviously more powerful connected than they are. Individually, you can do a lot more fun things with them.
So, I kind of decided then I wanted to be a network engineer. And so, I continued down that path. I got an associate's, a bachelor's and a master's in IT.
And I kind of just did a bang, bang, bang, because I had that momentum after I got my bachelor's.
[Alexis]
That's how you got to do school. If you leave, you're never going back. I'm convinced.
[AJ Murray]
Exactly. I know myself well enough. As I say, if I walk away, I'm not going to finish this.
And so, I got my first IT job in 2005. I was working at a car dealership, and I needed an internship. And they decided to take me on and work in the IT department.
And the IT department was one guy. And so, I got to help him out. And even after my internship ended, I did way more IT work for the car dealership than I did at my regular job.
So, that's kind of where things started. And then from there, I kind of formalized it by jumping into a formal IT position. I started at Helpdesk for a local construction company.
And then I hopped around from different places. And the first hop I had to make was actually due to a layoff. So, it's like 08, 07, and it's really tough economic times and they have to start laying people off at the company.
And so, my boss calls me into his office and he's just like, I've never had to do this. He's like, I've had to let people go. I've had to let people go that I don't like.
I've never had to lay someone off or let someone go that I really like. And he's just like, I've known for weeks that I was going to have to let you go. It was kind of like last in first out kind of thing.
I was the most recent hire. So, I had to be the first one to get let go. And so, he did the work and I'm so incredibly thankful for this.
He told me he had to lay me off and then he gave me a job. I had an opportunity to go work with a consultant that we had been working with for basically the entire time that I had been there. And he said, if you want the job, it's yours.
You just got to call him up, talk to him a little bit and he's already interested in hiring you. So, it's yours. So, there was like a month of in between.
I got let go. The next contract wasn't starting for a month. So, I got to take some time off, relax a little bit, recharge and then start the new job.
[Alexis]
I think that just goes to show how important doing good work and your brand and your reputation is. I mean, you're the... We are early on in this podcasting journey.
I think we've interviewed maybe 4 people so far and this is the second story. So, 2 out of 4 that have had something like that happen and been immediately referred just because of the quality of their work.
[AJ Murray]
Yeah. I decided very early on in my professional career, not just my IT career that I'm going to treat myself like a business. And a lot of people talk about, well, I'm a customer facing.
I talk to interact with customers all day or I'm not customer facing. And I just decided, I'm always customer facing. Whoever I talk to, whoever I interact with, those are my customers.
They might be other internal employees, but those are my customers. And so, I just decided I'm going to try to handle things a little bit differently. You see stereotypical IT folks, they get annoyed when there's a problem.
And some people tend to talk down to some other people like, oh, you don't know how to fix that. And it's just like, there's so much to learn in IT, you can't possibly know everything. And when it came to the help desk thing, I tried to never make a person feel stupid because they called and asked for help.
Let's face it. Let's have some appreciation for that. If IT was so easy, anybody can do it.
You wouldn't need a help desk. You wouldn't need engineers. You wouldn't need architects.
If anybody can do it, then there goes our job. So, I appreciated the fact that people didn't understand what they were doing with IT stuff. It gave me a reason to be there.
[Alexis]
I mean, even like working at a technology company. I've worked my two jobs out of college have been in tech and I still call the help desk. You never grow out of it.
There are some things you need the help desk for.
[Kevin]
Absolutely. I can't bring myself to do it. I would spend hours, hours Googling something, trying to figure it out myself before I call someone for help.
I just can't. I can't do it. My pride won't let me.
[Alexis]
Kevin, are you saying you've never opened up a help desk ticket?
[Kevin]
Not for something that was a technical issue. If it's like a procurement or something like that, that I have to do, I don't have the access. I literally don't have the access to.
But if it's something that I should be able to figure out, there's no should. But if it's something that I'm technically able to do within the system, then yeah, I spend hours. I'll go to a co-worker before I'll go to a help desk just because it's so embarrassing for me.
[Alexis]
Oh my God. It shouldn't be.
[Kevin]
It shouldn't be. Everyone needs help. No one knows everything, but there's still a bit of my pride in there that I'm like, I can't do it.
[Alexis]
AJ, I had a question that came up when you were talking about you got your bachelor's and you got your master's in IT. I feel like something that Kevin and I get asked a lot is about certifications and degrees and what path to take. If I want to end up here, what degree should I study?
Did you take certifications in line with your degrees or did you do them at the same time? Did you do one before the other?
[AJ Murray]
Yeah. So I got my degrees done before I got my certifications. I actually had my master's degree before I had my CCNA.
If I had to go back and do it all over again, I will tell you that I would put more emphasis on certifications. And that may simply be because of the track that I was on. I eventually went from the customer side and started working for a partner.
And partners, just like OEMs, really value the certifications. That's what makes them the money. If you're going to have somebody work on your Cisco switches, you want somebody Cisco certified doing that work.
So that may not apply to everybody. Getting the degrees was a ton of information in a very short amount of time. And I was fortunate enough that I could go to class, and most of my classes were night classes.
I was working full-time the entire time I was going to school. So I could go to my night classes, walk into work the very next day, and apply the things that I was learning, which was great.
[Kevin]
Would you say that your master's degree was worth it? I get asked that question a lot about, you know, you have a degree already, a bachelor's degree, you're already working. Does the master's degree actually benefit you?
Have you found that in your career at all?
[AJ Murray]
So that's a really interesting question. Because when I was doing my master's degree, I thought it was this like, holy grail, this is going to unlock the next level of my career. I'm going to graduate, and my boss is going to be like, congratulations, AJ, and slap me on the back and give me a big raise, because I did this thing.
But that didn't happen. There was no monetary reward tied to me getting my master's degree. And my master's degree is in managing IT and it's like, master of science and innovation and IT management, right?
And I was an IT manager for a global company at that time. And I just kind of thought like, you know, yes.
[Kevin]
Makes sense.
[AJ Murray]
Yes, this makes sense, right? But it didn't immediately benefit me in the ways that I thought it would. Immediately, I have a ton of debt, right?
I've got to pay for my master's degree. And this could just be like happenstance, right? Whereas when I completed my CCNP, I was immediately rewarded and promoted, right?
Like, we're going to make you a team lead. We're going to give you this. Now that you have the CCNP, you have the credentials, it makes sense to promote you into this position.
You obviously have the leadership experience, but it really hinged on me having that credential before that promotion happened. And so, just again, from my experience, it seemed like or it felt like the master's degree didn't really benefit me as much as getting my CCNP. Now, I think in the long run, having a master's degree does separate me from probably other candidates, right?
And I think when I go to eventually apply for a director level position, a C level position, something like that, having that degree will help me stand out in a crowded room.
[Kevin]
Is that part of the plan? Or is it going to be C-suite AJ soon?
[AJ Murray]
It's always been the plan, right? I've always wanted to do CIO, CTO, and maybe that'll happen eventually. I don't know if I'll be the CIO.
I'll just go out and say, I'm not going to be the CIO Zscaler.
[Alexis]
Hey, never say never. Never say never, AJ. You're limiting yourself.
You don't know who's listening.
[Kevin]
I need to get that job.
[Alexis]
You don't know who's listening to this podcast.
[Kevin]
Yeah, they never know. And I run Zscaler in my network, so I need someone who I can go to and be like, hey, this thing's not working or this thing is great. Fix it for me.
Okay, so you got into IT, and then you are really big also, not to skip ahead a little bit, but you also are really big in the community. You had a podcast, you're big in the NUGs, the network user groups. Can you talk a little bit about how being a part of the community has really, I don't know, I'm assuming it's helped you.
I don't want to put words in your mouth, but I assume in your career and being a part of these social groups, it's helped you. And we have a lot of early career people who are maybe scared or nervous to go to NUGs, go to user groups, and get out there and be social. Can you talk a little bit about how that's helped you or if that's benefited your career at all?
[AJ Murray]
Yeah, absolutely. So before a time where content creation is all the rage, I was thinking about my brand and putting myself out there and going to events, local events is part of the marketing plan. If I want to get somewhere, I have to tell people where I want to go.
You can't sit around and wait for stuff to happen to you. You have to let the world know, this is where AJ wants to get. And through that, you can find ways to get there.
So by attending these local events, you can let people know, hey, I want to break into networking and you can have these conversations. And then as you're talking to these hiring managers, or it might not even be hiring managers, just might be people that do the work. The next time a position opens up in the team, like, oh, hey, I talked to that AJ Murray guy who said that he wanted a shot at a network position.
And he was really sharp when I talked to him. So maybe we'll give him a call and have an interview. And so I started blogging well into a decade into my career.
I think it was like 10 or 12 years before I actually bought my domain and wrote my first blog article. And I did that as a result of every time I had to troubleshoot a problem, I went to the old Google machine, and I landed on somebody else's blog that had been through a similar issue, and wrote about how to fix it. And after a while, it's just like, you know, I've fixed some pretty unique and interesting problems.
I could give back by doing the same thing, right. So I started my own blog, and I posted about the things that I was doing at work, problems I'd run into, how did I fix them? And that's, that's how I started to get back.
And then, you know, Twitter comes along, and I and I jump on Twitter, and there's this huge network engineering community on Twitter, now known as X, right? So, and that's just Twitter. Yeah, yeah, formerly known as Twitter.
And I heard about this thing called Cisco champion, and it's like, that's really cool. I think I want to do that. So I started to make more of my content Cisco focused, and I eventually caught the attention of the Cisco champions program.
And I was asked to apply, and then, you know, subsequently, got got in. And that was a really fun program to be a part of, because you got early access to, you know, what's coming, like, normally, you would hear about what's going to be announced as Cisco Live, like maybe a few weeks ahead of time. So you could prepare some content and post it when it goes live at Cisco Live.
And it was just kind of really exciting to be a part of to be like, first in the know kind of thing.
[Alexis]
So I will say, I've been to three, maybe four, nugs, nugs, nogs. There's network operators, groups, and then network user groups. They're, they're different depending on where you are.
There's some big ones. There's some small ones like, yeah, there's nogs, nugs, that have hundreds or thousands of people that go. There's also nogs that are like 20, 20 engineers at a brewery in the back room.
[Kevin]
Yeah. That's the Tampa one is literally, it's like 10 people. Yeah.
[Alexis]
It really, it really depends. So you can find one that suits your fancy. And also, what I've noticed, especially going as a younger person, because there's not that many younger people that go, no offense, I feel, I feel like I'm aging myself.
Every episode, you call me old Alexis. It's not my fault.
[Kevin]
She finds a way to do it.
[Alexis]
Well, I just wanted to get my perspective, Kevin. Isn't that what this is about? But the younger people kind of group together because there's not that many of you in the room.
And so you kind of like make eye contact and you're like, oh yeah.
[Alexis]
One of us.
[Alexis]
You too. And then you guys get together and a third person joins and goes, look, now there's three of us. That and that everyone that's older is just excited that you're there because there's not that many young people.
So you walk in and everyone's immediately super friendly to you because they're like, oh my God, you're under 30. That's great. Welcome.
Join us. Yeah, it's been great.
[Kevin]
Exactly.
[Alexis]
I've had a really positive experience.
[Kevin]
I think that's what's really cool. And AJ touched on it a little bit was that when you're looking for a job or if you're looking to advance your career, when you apply for a job, you are a faceless piece of paper. You are just a resume that blends in with every other resume.
Everyone else has pretty much the same thing. But when you go to one of these events and you put face, you become a person, you become a real person with real hobbies and real desires and all that kind of stuff. And it can change.
It doesn't sound like it would, but it can change drastically how someone perceives you. I don't know what it is. I've been in that position too, where like I've been a hiring manager, but I've met a kid who was really excited about networking and I talked to him about 15 minutes at a nug or whatever.
And like that made more of an impression on me than his resume did that it just blends in. So like I can't understate, I can't overstate, overstate, I can't overstate enough how important it is to get face time with people. And you never know who, you know, who you're talking to.
It could be a person who's a hiring manager or just someone with influence of their job. So it's really important as a, as a younger career person.
[AJ Murray]
I just want to emphasize your point, because if you look at my resume or my LinkedIn profile, I've, I've had a number of drops over the years. I can honestly say that probably only two of those jobs I've got through the application process. Everything else was because of social networking, networking at events.
It was because of people I talked to, the connections I made that got me in to those positions.
[Kevin]
Yeah. A hundred percent. AJ, what, so you were talking about how your first foray into the public sphere was blogging.
What part of your career, where were you in your career when you first started blogging?
[AJ Murray]
I was actually an IT manager.
[Kevin]
Okay. So you were a little later in your career. Did you feel like you had to wait that long to start creating content?
Like, did you feel like you had to have some knowledge or have some like, you know, experience to do that first?
[AJ Murray]
No, I, I just don't think it was a thing to me. I don't know. I didn't, I didn't feel like I had to wait until I had certain experience.
I just noticed that when I go out looking for help, when I don't know how to do something, I'm not hitting manufacturer help articles or forums. I'm landing on people's personal blogs. They're making this contribution to the sphere.
Right. And, and I just thought like, Oh, you know, in addition to these problems that I'm solving, because somebody is helping me, I think I could give back in this same way.
[Kevin]
Gotcha. Okay.
[AJ Murray]
But I mean, if it definitely start early, right? Like even if it's just micro posting on LinkedIn, you know, like again, put the intentions out there. I'm studying for this.
This is what I'm learning. Share, share the failures, right? Like that was my big thing when I first started posting online is everyone's posting about, Hey, I passed my exam.
I passed this. I failed 10 Cisco exams in a row before I passed one. Right.
And it's just make failure like, okay. You know, every everyone's going to do it. It's okay.
Failure is not the end of the world.
[Alexis]
You're talking about how learn as you go or posting as you go. And that's been a big thing for me. I mean, I'm, I'm not an expert.
I cannot claim to be an expert in any means. I'm still relatively early in my career. Um, but it's funny, you mentioned Cisco champions literally right before this, I was presenting to the Cisco champions on personal branding.
And a big thing I talk about is that there's studies out there that show when you are learning something with the intention of teaching it back. So if you're studying material and you know, you have a presentation on it the next day, or, you know, you're going to have to explain it to your coworker or your boss or someone, you actually learn it more deeply and retain it better. So part of the reason like creating content was a big deal is because I'm learning all of these new things.
If I know I'm creating a video about it, where I'm explaining it in my own words, and then I have to watch myself present it, I'm going to pay much more attention to the information as I'm learning it so that I remember it later on.
[AJ Murray]
Yeah, absolutely. I, I love to share my knowledge. And after I got my, my master's degree, one of my advisors at the college that I was attending, actually invited me, he's just like, now that you have this credential, you, you can teach, you know, that bachelor level courses and associate level courses at the college here.
So, you know, I know you, I've advised you for the last four years, you're you've been working in career the entire time you have really good experience. Why don't you come share this with other, you know, college students. And so I jumped on the opportunity because it's something that I truly love to do, you know, whether it was through the blog and net and then to have an opportunity to do it through college courses.
And I taught college levels courses for 10, 12 years.
[Kevin]
And you currently are no longer in the community other than nugs, right? You're in the spot.
[Alexis]
You never truly, you never truly leave the community, Kevin. It's one of those things once you're a part, you can't just screw up.
[Kevin]
I'm not as active as I used to be. I'm trying to, I'm trying to pivot, Alexis. Let me do my transition.
Okay. Um, well, what I was saying is you're no longer currently on the podcast. You're not, are you blogging still?
[AJ Murray]
Um, I've, I've written a few articles that I haven't clicked publish on yet. I'm in recovery.
[Kevin]
Oh boy. Well, what are you recovering from? Cause that's, that's the next topic I want to get at.
Um, you, you were very big, at least in my world. I don't know. You were very big in my world.
You were, um, I was on your blog. I listened to art network engineering. And if I was just a normal viewer who I wasn't part of the podcast, I didn't have this insightful, uh, like access to you kind of like you, you dropped off the face of the earth.
[Alexis]
But Kevin, Kevin is saying he misses you, AJ.
[Kevin]
He knows that we, we, we chat every once in a while. He knows that. But my point is you had to step away from the limelight for your own mental health or whatever.
If you talk a little bit about like, why, why'd you step away? Why are you no longer in the limelight?
[AJ Murray]
Yeah. Uh, burnout. Uh, it burned, it was definitely burnout.
Um, so as a, as a content creator, uh, no one prepares you for the dopamine hit that you will get when somebody says you've changed my life. What you said helped me. I used to do this crappy job and now I'm in it and I've doubled my money and you know, I'm getting married and buying a house and I'm doing all these things.
Like these are the kinds of comments that I got. Um, while doing the podcast. Right.
And when we started the podcast, it was the pandemic. It was the height of everybody stuck at home. And you know, what are you going to do?
You're going to watch YouTube videos and you're gonna listen to podcasts. And we took off almost immediately after we posted our first few episodes. And so, um, you know, nobody prepared me for that.
And as somebody who likes to teach and share knowledge, getting that kind of feedback, like what you're putting out into the world is helping me was addicting. Right? Like I wanted to continue to help people.
I wanted to share my knowledge. If my knowledge and experience is helping you, that's what I want to do. And after a while, I got so fixated on doing that, that it, it shifted my priorities, right?
Like I was spending Saturday mornings, editing videos and preparing content schedules when my wife's taking my son out sledding. Right. And, and now I'm not participating.
I'm not doing these things. Right. I, I, I really remember one time I put out this article about, you know, like I'm a father, I travel a lot.
And when I know I'm about to travel, you know, go away for a long period of time, I ramp up, like I really try to help out with my son and, you know, try to take the pressure off my wife so she can relax a little bit. And then, you know, I go away and she's shouldering everything. And then I come back and I try to, you know, do the same thing.
I really tried to dive back in. And she said to me, she's just like, that's not you. Wow.
You don't do that. And I was just like, Oh, Oh, okay. Yeah.
Uh, and you know, I, I honestly, you know, through, through the content creation and losing that shift in priorities, like whenever, you know, my, my wife let me, and we can get into that, right? Like she, she let me do the editing and I thought that that was this nonverbal, like, okay, like I approve kind of thing. And it was just this unspoken, like, oh, you're doing that again.
Okay. Well, uh, and so after a while that kind of boiled over and it really only almost cost me, my family is what it comes down to. And so there had to be this big adjustment and okay.
I'm not the father that I thought I was. I'm not the husband that I thought that I was, I was putting way too much effort into this thing. And I'm really not getting the return on investment on that.
And that's where the burnout comes from, right? Like when you're putting way more into something than you're getting out of it, it's like, gosh, why am I doing this thing? I mean, for a while, the views and stuff were up so high that it always felt like that big moment of, you know, I'm going to be this major content creator or, or, you know, we as, as the A1 team, uh, was always just around the corner, right?
Like just one more video and we're going to make billions of views. And the, this'll be like this, this side hustle thing that I can finally, you know, yeah, go full time and pour more energy into it. And that just never, it never happened.
It always felt like it was just too far out of reach. So, um, at the end of 24, I left the podcast. It, it had to happen.
Um, you know, there was some talk about shutting the podcast down, but you know, Andy stepped up and he's just like, I want it, like, I want to take the brand and I want to run it with it. And it's like, I'm not going to fight you. I just want to walk away.
[Kevin]
I'm tired. Yeah, absolutely. I relate so much to what you're saying about content and just like having to spend hours.
I was telling before the podcast, Alexis and I were talking about editing and the other night I spent, I have a hard time letting other people control stuff. Cause especially when it's editing, when it's like, this is what is being put out there. I want to have control over what's being put out there.
So I spent the other night just editing all night. And my, my wife was in her room and she's watching a TV and it's usually the time we spend together and like connect and stuff. And I didn't because editing was the most pressing thing in that moment.
Um, and it just, I really connect with that.
[Alexis]
It's hard to make those decisions too, because sometimes at the, in the moment, it feels like the most important thing, right? When, I mean, we're talking about content creation here, but I can also relate, you know, when it comes to work, right? I look back or studying for certifications or anything, it seems like you're, you're pouring into this thing because it's so important to you.
And like you said, it's just around the corner. If I could just do this thing, then I'll be happy and then I'll get the promotion. Then I'll get the raise and then I can go full-time and then people will love me.
And you know what I mean? And it's always, and then I'll go back and spend more time with my family. And sometimes it really is a drastic life change or a shift or whatever it is that happens.
It really forces you to go and put things back into perspective or your priorities back into perspective and go, wow, is this really actually that important to me? I mean, in a not unsimilar situation, I just walked away from a seven-year relationship, sold all of my things and now I'm traveling full-time, right? And it was for so long work was, you know, oh, I just have to work a little bit more.
Oh, same thing. Saturday, Sunday, I'm editing videos, I'm doing content and work was so important. And my partner, I mean, same, same.
We were, we both worked in high-stress jobs. He was always working too. And now I have work and travel, which are both great things that I love, but man, you know, it just really forces you to put things in perspective.
And sometimes I think it, it takes a big wake up moment like that.
[Kevin]
Yeah. Yeah. Time is finite.
You know, it's, if you're, if you're adding stuff to your life, that means stuff has to be taken out of your life and you have to choose what that stuff is. And not always an easy choice and not always what you pick it to be. Like, like if you're married, no one picks, Hey, you know, I'm not going to spend time with my wife tonight.
I'm not going to spend time with my kids. No one makes that conscious choice, but if you don't consciously do the opposite, then you will consciously like unconsciously make that choice.
[Alexis]
Yeah.
[Kevin]
And that's true. Like, how do you balance? So we've all been in the industry, at least AJ and I have for a while.
Alexis, as she reminds me over and over again. But there's always going to be another certification around the corner. There's always another project that you're want to spend extra time doing outside of work and all this other stuff.
How do you, how do you balance that? I know that the content creation was too much. And so you stepped away from that, but you can't always step away from it.
Sometimes it is work. Sometimes it is a certification that you have to get by a deadline to keep your job or something like that. How have you and your career kind of managed that where it's not taken over your life?
[AJ Murray]
It's, it's boundary setting. Right. And for a while I was really good at that.
And then, and then I let it like overcome and I made some poor decisions. But, you know, if you have to grind for a little bit and we all have to grind every now and then, right, there is, like you said, there's work that's got to get done. There's deadlines you got to meet.
Get to those things and then take a break. Right? Don't, don't get to that thing and then be like, okay, what's the next thing, right?
What's the next certification? What's the next? If you're always looking for the next, you're never going to, you know, relish in success and never take a moment to kind of celebrate and then breathe.
Right. Like if you're just always on and you're always going, you're, you're, you're absolutely going to burn out. Right.
Consider it later. Like, it doesn't matter how many certifications you have. There's only so much money a company can pay you.
That's true.
[Alexis]
I mean, but at the same time, like, I don't know if you're someone, and I feel like a lot of people in technology relate to this, like, I feel like I've always been someone, I need to have a thing. I need to have a project. And if you are, I wouldn't even say like, I don't think high performer is the right word.
But if I'm not actively driving towards something, I feel like I'm not pushing myself hard enough. And then when I look back, I'm like, oh, I wasted so much time. Oh, I could have done, I could have done one more certification.
I could have done this. I could have done that. And it's, it kind of goes back to like, when is enough enough?
How do you know? Does anyone really know?
[AJ Murray]
Yeah, you don't, unless you put some goals around it, right? Like if you, if you say, okay, you know, getting my CCNA for right now is enough, then you get your CCNA and then have some other outlets, right? Like blogging and podcasting was a big creative outlet for me.
I might not be blogging or podcasting, but I still do photography, right? Like I've got a really nice camera. I've got a drone.
I, those are still things that I go and do. You know, right now it's fall. My son's really into soccer and I love doing sports photography.
I take a ton of pictures of him and his team out playing. I share it with the parents and it's nothing I'm going to post publicly online, right? Like I'm not going to take pictures of a bunch of kids and post them online, especially kids that aren't mine.
But, but I get the feedback from the parents because it's one thing when you order the photos and you know that you get the nice pose with the soccer ball and you hand out the trading cards. It's not an action shot, right? Like it's not somebody making this really sweet kick and you know, jumping in the air and freezing that action.
So that's the creative outlet that I have right now. So having a couple of different things, you can throw your energy at and not just always work, work, work, work, work. It really helps.
[Alexis]
I was going to say, I think that goes back to like, you were saying you were getting such a kick, excuse the pun, out of, you know, out of writing blogs because you felt like you were helping people. And in the same way, if you're able to take these photos of people's kids in the moment and then give them to them, I'm sure you get a little bit of that, maybe a similar level of satisfaction of, well, I was able to give Sally this photo of little Bobby and it's going to hang on their fridge and she's going to be so happy. Yeah.
[AJ Murray]
Yeah. I mean, you're definitely not wrong, right? Like there's the appreciation and the gratitude that comes from, oh my gosh, like, you know, it's one thing to watch them play.
It's another thing to like see this awesome freeze frame of them, you know, making an incredible save or making a really awesome, you know, kick or something like that. So there's, there's definitely that kind of same appreciation feedback loop, right? Like if I posted an article, hey, you really helped me.
Thank you for posting this. Now I was able to do, you know, this project at work. It's, it's very similar, right?
It's, it's very satisfying.
[Kevin]
Um, we are getting, we're over the halfway point here. And before, before we get too far away from what you're currently doing, um, I have a question about a demo architect. Like what is, like, that seems like you're just creating slideshows, like demos, like demos, like what do you actually do as a demo architect as a Zscaler?
[AJ Murray]
So I would have to say that my current job as a demo architect is the most fun job I have ever had. I absolutely love it. I love working here.
Um, the, the people are great. The company is great. They take really good care of us.
Um, and demo architect is just really different. It's, it's the culmination of all of my years of experience working in enterprise IT and part content creator. My, my audience is not public facing, so you might not ever see any content that I create on a website or anything like that.
Um, but it's directed towards our internal teams, right? Like our Zscaler SEs. In my role, I manage, I help to manage a large environment.
We have a demo environment. It's, uh, it's referred to as the solutions demo center and it's a tenant of Zscaler that has just about every bell and whistle that you can think of that we produce, right? Uh, and we have a bunch of enterprise workloads that make it look and feel like a business, right?
We have, uh, you know, data centers with applications, internal labs, and stuff like that. And we enable the Zscaler features that our SEs can then turn around and demo and, you know, sell to our customers and prospects. And so, uh, I get the, I don't know, the benefit of, of my experience of running enterprise environments, but I don't have maintenance windows.
And if, if something breaks, it's just a demo environment. You know, when I was a partner, I used to have these really tense moments of, I'm doing a maintenance window and I've got like four people staring over my shoulder, watching me enter in these codes. Like, I don't have that anymore.
[Kevin]
It's great.
[AJ Murray]
And you know, we're a very large global company. So if there is a maintenance window, if there's something I have to do, well, I do it during my normal business hours. I don't have to, you know, wait and do it, you know, outside normal business hours.
Now I still have to support things outside of hours. So, um, we, we have demos and labs that are customer facing that, um, you know, there are some conferences going on, uh, in Singapore, Tokyo and Australia right now. And, uh, I had to stay up late last night and support those a little bit.
So, you know, there still is that part of it, but that's, it's very far and few between compared to what it was, uh, in, in the past. So, you know, I still have deadlines. I still have things that are stressful, but nowhere near the level of stress that I used to have, you know, working in, in enterprise IT or at the partner doing cutovers and stuff like that.
So it's, it's very different.
[Alexis]
I think it's also really interesting. Um, it is still a creative role. Like you're still creating demos, you're still making videos or resources for customers.
Um, and there's so many of those. I mean, I didn't know what a sales engineer was before I joined Cisco. I had like a very vague idea.
I didn't know that you could be a developer advocate or a technical evangelist or a demo architect, right? Like there's all of these, um, these roles in IT where you can be, if you can be social, if you're creative, if you still enjoy technology, like there are roles for you. Um, I get asked a lot about, you know, how do I get, how do I get your job?
You're out there. And not just like technical evangelism roles, but they might go by many different titles in many different industries, including demo architect.
[Kevin]
And how did you, how did you find this job? Were you already, you know, a Zscaler expert and they've had this job on the, on the job board and you just applied for it and you were like, Oh, this is a perfect fit. Or did your creative outlet kind of lead you to this job or the job led to you?
Like, can you talk about that process of how you found this job?
[AJ Murray]
Yeah. So I, I know people that work at Zscaler, uh, or, you know, I knew people that were here prior to my arrival. Right.
And, um, one of them happens to be the person that, you know, is now my manager and she used to live up here in this area in Vermont. And, uh, him and I used to co-lead a VMware user group together. Um, and so we never worked together, but we, you know, every like once a quarter we'd get together, we'd plan these meetings, uh, and then we would host them.
We, we would share MC roles and, you know, we, we were the face of the local VMware user group. Um, and so, you know, he later took a role, he moved out of the area. He took a role working for Dell and then, uh, he was an SE, he started to travel the country.
Um, he was like a nomad with his family. It was really cool. They like, they bought, and this was before COVID times, like they bought an RV, they piled into it and they drove around the country.
And so, uh, they, they did that. Uh, and, and, you know, I, I kept in touch. I watched the adventures that they would share.
It was just really, it was really fun to, to, to do that. And then, um, he posted about a couple of different roles. Um, and he reached out to me and said, Hey, I got this role and I think you'd be a good fit.
You, you know, I know that, you know, you work in enterprise IT. So if somebody says, Hey, I need this application set up, you'll know how to do that. I know that you were an adjunct professor at a college.
And one of my duties there was to create labs that the students would have to take and complete. So neither of those things were foreign to me. Right.
So, um, he, he thought that I would be a good fit for this position. And, and so I took a look at it. I was just like, you know, this is very interesting.
I didn't think that there was a role like this out there, but it kind of was this mashup of things that I really enjoyed doing. Like I always like deploying the technology, figuring out how to work it into an environment, learning new things, uh, and then getting a chance to create a lab or write a blog article and having somebody digest it and learn it. That's, that's exactly what I do, right?
Like I work closely with product managers. I learn about the new features that are coming out and then I create content that the SEs can use to digest and learn the new features and then pitch it to our customers.
[Kevin]
It's amazing. So it's basically what, kind of what I do now with TikToks in that take a complex topic and break it down into more of a digestible bite-sized thing. So if you're, if you're out there listening, network architect, demo architect, Kevin at adjacent node.com.
[Alexis]
I keep, I keep telling, uh, I keep telling Kevin, I'm like, one of these days you could be a sales engineer or a technical evangelist or a developer. One of, it's going to happen. I'm just, I'm just waiting for it to happen.
I'm shocked it hasn't happened yet.
[Kevin]
We'll see. We'll see. It's going to happen.
I can, I can feel it. It's always my answer. We'll see.
[AJ Murray]
Now, you know, I will say that working for OEM, that's, that's one of the reasons why I'm like, I want to go back to content creation, but I don't exactly know what I want to do. And as much as I love Zscaler posting publicly about Zscaler is not what I get paid to do. And I don't necessarily want to go back to, uh, or want to go back to content creation and teach you about zero trust, because I think I would probably feel obligated to teach you about the Zscaler, but I don't want to do that because that's what I get paid to do.
I think, right. So I, I need to find my niche again. I need to find what I'm going to educate people about.
Um, you know, it would be fun to go back to do some of the Cisco stuff, but they're kind of a competitor to what I do. So I don't think that my employer would look that.
[Alexis]
I think there's, well, there's multiple ways we could talk about this. I started creating content while I was at Cisco. Um, and the way I made all of my content was if a customer asked me a question and I was prepping for a demo or answering an email or whatever it was, I would make a video about it once I learned it better, but two under the premise of as a customer has this question, we're due to, and that's how I grew my platform from zero to, I don't know, 50, 60,000 followers, on whatever platform.
And I do agnostic stuff too, but you can only make so many videos about what is DNS, what is ARP, what is whatever, how do you use this? How do you use that? Right.
[Alexis]
Right.
[Alexis]
And I think that Sean Nunley, if you follow cloud security office hours, um, they're another community just about cloud security. And he put it the best when he opened up cloud security office hours, he was like, we talk about vendors because the space that we work in includes vendors. And it's dumb to think that making vendor specific content can't help someone when these solutions are so prevalent in our industry.
Think about how many people use, um, I don't know, like I have cloud flare on my computer right now. Think about how many people use cloud flare or, you know, Cisco 9300 switches or Zscalers, Zero Trust, whatever. I'm tired and I can't think of the product name.
You know what I mean? Right? Like there's ZIA, ZIA, ZKA, whatever you want to call it.
I know those are the actual, those are the actual solution names. Anyways. But to think that there's, there's hundreds, if not hundreds of thousands or thousands of people who are using those solutions, implementing those solutions in charge of managing those solutions and putting that content out there can help them too.
Even if it's not vendor agnostic, right? I try to circle around. That's part of the reason I came to Megaport is so that I could talk about other vendors that are not just Cisco.
It was Megaport or a partner or start my own thing. I'm at Megaport because they're great people. But, um, I try to circle around to a lot of the vendors when I can, but that vendor specific content is equally valuable in my opinion.
[Kevin]
It is. And I can tell you, AJ, so my company just recently adopted Zscaler and I can tell you the majority of people have no idea how it works, like the basics of how it works, like where their traffic flows. And so, I mean, I don't know if this is related to podcasts at all anymore at this point, but just in general, I would benefit from you making content.
[Alexis]
It's become life advice in uptime podcast.
[Kevin]
Which has given us advice at this point. But if you could start making just basic content of basic how Zscaler works and access and all that stuff and make it in a digestible way, I will be your first follower, your first subscriber. And I will paste that to everyone in my company because it is, it's a good product, but it's very complex sometimes.
[Alexis]
Just don't turn into a AJ Z. Murray.
[Alexis]
I was going to suggest that. Dang it.
[Alexis]
So AJ, I know we've been talking for a minute here, but for someone who's listening to this and maybe they're in a hands-on role, but like you said, they really enjoy teaching. They want to get into content creation or evangelism. You know, what is your advice for taking that first step?
[AJ Murray]
Well, that's a good question. I should have known that you were going to ask me something like this and I, I probably could have prepared an answer, but I didn't. So find, find a way to convey that information that you're comfortable with, right?
Like there's a hundred different ways that you could put information out on the internet. I feel like there's a couple of platforms that you guys might recommend, but you know, I think whatever you do, it has to feel natural because being authentic is a big part of putting yourself out there. Right.
And that's to protect yourself as a brand, protect your brand and protect yourself really. Right. If you're, if what you're doing is not authentic and you have to, you know, turn on into a person that you're not actually doing sooner or later, like you're just going to gas yourself out being something you're not actually.
So, you know, if, if writing comes naturally blog about it and you don't have to like buy domain and start your own blog. Like there's plenty of, you know, micro blogging websites out there that you could just sign up an account for and just, you know, put the content out there and start out, just do it for yourself, right? Like just, just type for yourself and see how it feels.
Like, is it, does it feel good? Does it feel forced? Does it feel fun?
Um, you know, if you're, you're comfortable with video, record yourself, you know, pitching a few things or sharing a few ideas and get comfortable with that before you start to put it out on the internet. But at some point, and especially if you're early in career, put it out there and don't let, you know, perfectionism stop you. Right.
Just get it out there. Like the first one's going to suck. The second one's going to suck a little less than the third one's going to suck even a little bit less than that.
Just get it out there and you'll start to get comfortable with it as, as time goes on. You know, I think letting the world know what you want to do and where you want to go, somebody's going to find you and they're going to help you get there. Um, but if you, you just like sit at your desk all day and do your job and wait for somebody to, to find you when you're not talking about what you want to do, like that's, that's never going to happen.
[Alexis]
Yes. Yes. I want to stand up and applaud literally, literally.
Um, and I don't know if this is a specific, like Alex Hermosi take. Um, but a lot of what he talks about is just net volume, right? You can't do something a hundred times and still suck as much as you did the first time by the hundredth time.
You are going to improve by force of nature. Um, and heavy, heavy on the, if you are talking about what you're doing and where you want to go, someone will help you because there's AJ Murray's in the world that really like helping people. And that's where they derive their personal satisfaction from.
And if they find you and go, Oh, I can help them get there a little bit faster. They will help you just because they get personal satisfaction out of seeing someone else hit their because they felt like they had a little piece in your journey. They will help you.
[Kevin]
I feel like technology as a career, there's a lot of people who gravitate towards technology or at least last in technology because they do enjoy helping people. We all have to go through the help desk, like the, the basic customer support era in our life, where if you don't, if you don't like helping people, you get really annoyed by people. You typically don't last.
You typically get burned out early in your career and don't make it past the help desk era. So if you make it that far, it's probably because you do get a little bit of enjoyment of helping people. So I think tech just gravitates.
We have the people who want to help, but to do that, we have to be able to find you. You have to be visible. Exactly.
[Alexis]
Well, AJ, super insightful conversation. Thank you so much for coming on the show. If people want to keep up with you, when you finally do start creating things again, where can they find you?
[AJ Murray]
Well, I, I will say I have been using the same name, brand name online for a while, and I don't think I'm ever going to change that. So you can find me at NoBlinkyBlinky on most social platforms. I have a blog blog.
NoBlinkyBlinky.com. You can find me, of course, on LinkedIn. And if you're interested at all in the photography side, I'm I've got AJMurrayPhotography.com and my Instagram is AJ.MurrayVT. Awesome.
[Kevin]
Well, thank you. And then I think that's it for this episode of Life in Uptime. Huge thanks to AJ for sharing his journey.
And thanks to you for listening. If you've enjoyed this conversation, be sure to follow the show so you never miss an episode. And if today's story gave you something to think about, share it with a friend or colleague who might need it.
Until next time, keep learning, keep building, and keep your uptime high.`,
  },
  {
    episodeNumber: "006",
    slug: "ep-006-stay-technical-while-expanding-your-influence",
    title: "LIU006: Stay Technical While Expanding Your Influence",
    guest: "Matt Starling",
    guestTitle: "Senior Director of Product Marketing & ECSE",
    guestCompany: "Ekahau",
    guestLinkedIn: "https://www.linkedin.com/in/matt-starling-03913633/?originalSubdomain=uk",
    description: "Is it possible for IT professionals to remain technical when moving into roles that expand influence, scale, and reach? Matt Starling, Senior Director of Product Marketing at Ekahau and co-founder of the WiFi Ninjas podcast, joins Alexis and Kevin to share how your career can evolve beyond on-call operations without losing the technical core. His path shows that you don’t have to abandon your engineer identity to succeed in product marketing, education, or evangelism.",
    airDate: "January 15, 2026",
    packetPushersUrl: "https://packetpushers.net/podcasts/life-in-uptime/liu006-stay-technical-while-expanding-your-influence",
    youtubeUrl: "https://youtu.be/WJTFOYbv08I",
    transcript: `[Kevin]
Welcome to Life in Uptime, the podcast where we talk with the people behind the technology that keeps our world connected. I'm Kevin, joined by my co-host Alexis. In every episode, we sit down with engineers, leaders, and builders in tech to uncover the stories behind their careers, how they started, what they've learned, and where they're headed next.
Our goal is simple, to help you see how far tech can take you no matter where you start from.
[Alexis]
Alrighty, guys. Well, today we're joined by Matt Starling. He is a senior director of product marketing at a company called Ekahau, where he leads their university program, and he's also a CWNE, an ECSE instructor, and the co-founder of the Wi-Fi Ninjas podcast.
You may have seen him online. He does post frequently on LinkedIn. Welcome to the show.
How are you?
[Matt]
I am very good. Thank you, Alexis and Kevin. And what a pleasure and honor to be on a podcast with my two favorite social media influencers.
[Alexis]
So fun.
[Matt]
Yeah, we've had the pleasure of working together for a few years now and doing lots of really cool things together, whether it be coming to some of our events, bumping into each other at events, and you guys doing some amazing posts for us in the past. Sometimes you may have noticed that Alexis does make me do things that I'm probably not too comfortable with.
[Kevin]
You don't like the dancing? Come on.
[Matt]
The very first time me and Kevin met, I was then dancing by our booth. And then the last time I saw Alexis, I was having to pop confetti in an office at a specific time, which is more difficult than it seemed, and then had to clean it all up after.
[Alexis]
Yeah, we keep it interesting around here. I don't know. I'm not apologizing.
I think it's fun.
[Matt]
Neither am I. I love it. And I've really enjoyed working with you guys over the past couple of years.
So when you said you'd put a podcast together, I was like, damn, it's really going to be my favorite podcast.
[Alexis]
Matt, you're one of the most passionate people about Wi-Fi I know. So why Wi-Fi? Where did you start in the industry?
How did you pick your niche? I get a lot of questions. When I'm first starting out, should I be a specialist?
Should I be a generalist? It seems kind of strange to just pick a technology out of a hat. So could you tell us what's so special about Wi-Fi?
[Matt]
Oh, okay. Let me try and unpack that. Why Wi-Fi?
I mean, I just found it super interesting. And it's something that everybody uses. So it doesn't have to be technical people.
You could be speaking to your family members or to colleagues or customers or whoever. Everyone uses Wi-Fi. So it's something that everyone can relate to.
It's a critical part of everybody's lives these days. Everywhere you go, Wi-Fi is almost seen as a utility now. It's expected like water, electricity.
You need to have Wi-Fi. How are you going to connect your devices, work, communicate, keep up to date with Alexis and Kevin on TikTok, Instagram, LinkedIn?
[Alexis]
So you were 18 years old coming out of university and you were like, man, Wi-Fi is just the coolest thing. I want to be a senior director of product marketing at Gehau for the rest of my life.
[Matt]
Yeah. So I didn't go to university and I was pretty sure once I started working in Wi-Fi, this was going to be the career path for me. I found it super interesting.
And you're probably going to think that I'm saying this because I work at Gehau. It was actually really when I first started to use Gehau products, which is what made me really fall in love with Wi-Fi. Being able to take a problem for a customer that were having issues with their business or connectivity or whatever it was, and solve that problem with the tools and the knowledge that I'd obtained from working in Wi-Fi.
And also seeing something that the satisfaction that I used to get from engaging with a customer, finding out their requirements, turning their requirements into a design that you build in Akahau. You figure out where to put the access points, you build out your simulation, you go on site, you do your survey, you work out if you can put those APs in those locations or if you need to tweak them. And then seeing your design come to life, get deployed.
And then the satisfaction of seeing people actually use the Wi-Fi and how much improvement it makes on their day to day lives. And they can just get on with whatever work they're doing. I've worked in so many different verticals, whether it be typical office spaces.
I did so many hospitals when I was working in professional services. So I think I've probably been, I feel like I've been to like every NHS hospital in the UK and I know it by the back of my hand now, surveying all of the hospitals. But it's really critical Wi-Fi in these environments because the way that the nurses and doctors will communicate, you have a Wi-Fi, they'll be using Wi-Fi enabled phones.
They have patient connected devices that are sending critical information over the Wi-Fi. So the Wi-Fi goes from like a nice to have to a must have to make work. And there's so much like in between that and little finite details and nuances that make Wi-Fi work.
And Kevin, when we was talking about this podcast the other week, he said, you know, you're getting into learning a bit more about Wi-Fi and learning out some of the different weird quirks and rules and things about Wi-Fi. People probably just assume Wi-Fi is such an easy, simple thing to get working. I take my phone out, I connect it to my Wi-Fi at home or my Wi-Fi in the office.
And, you know, most of the time it just works. When you dive deeper into the different calculations that you can do, the different modulations, signal processing, all the other bits and pieces, you're like, wow, this is how Wi-Fi really works. And I just found it really interesting.
[Kevin]
What I find interesting is that it's really, really complicated. It can get like you can get down to turning every little dial and power and like it gets really. But at the same time, you could just throw an AP up in the middle of a room and be like, OK, everyone's got Wi-Fi, we're good to go.
How do you how do you navigate that where Wi-Fi is such an easy thing to deploy? Anyone can do it. You get an ISP, your ISP gives you a router, you plug it into your living room next to your TV, and now your whole house has Wi-Fi.
It might be crappy, it might not be perfect, but it works. How do you like make that transition between, no, it's working is not just good enough. You need to actually have good Wi-Fi.
How do you convince people that they have to have that?
[Matt]
Yeah, I mean, I think you said it there, pretty much most people, they can buy an access point or Wi-Fi ISP router you get at home, plug it in and make it work. On a small scale, it's quite easy and simple to do. But when you ramp that up to when you need four or five access points, then turn that into tens of access points or hundreds of access points or thousands of access points, then getting it to work well is very difficult.
And I think probably everybody that is listening to this podcast at some point in your life has experienced going somewhere where the Wi-Fi has not worked. And then the knock on implications that then has to the rest of your day, whether you can't join calls, whether you can't communicate with family or loved ones, whether you can't check things that you need to do, it has a real knock on effect to your day to day life. So being able to manage large, even like mid to large size Wi-Fi networks and keep them, not just design and deploy them and make them work well initially, but keeping them working throughout their lifespan over the four, five, six, seven years that you are having those access points until you upgrade again is really, really important.
So having the knowledge really helps, but also having access to the tools that's going to help you understand this, because Wi-Fi isn't something that we can see, smell or sense with our human, uh, tools. You can. We need to rely on tools like our, like our hardware device, the Echo House IQ2 that can scan and measure everything in Wi-Fi and then show you your heat map, show you the way that your network's configured, show if you have any interferers that are out there causing you problems on your network, and then leverage that to be able to design and maintain a great Wi-Fi network.
[Alexis]
So Matt, I want to back up just a little bit, because I think we glossed over it. You said you didn't go to university, but you still got into technology. How did, was that then a pivot out of high school, high school Matt, or what do you, do you call it?
You call it high school in the UK?
[Matt]
We, um, secondary. I don't know how we align terminology for what you call different times in life at school in the US to the UK, but in the UK, how we would refer to it is that if the first school you go to, very, very first school when you're a tiny baby is that you go to that nursery and that's when you were very, very young. And you go from nursery to primary school, which is probably from like four to, I don't know, like 11, 12.
I want to say maybe like 10, been a while since I was there. So I don't know. I don't have any kids.
So I don't know the ages that you're supposed to be there. Then you go from primary school to secondary school and you're there until 15, 16. Then you can go to college for a year or two.
And then you go from college to university.
[Alexis]
Oh, so college and university are separate.
[Matt]
Yeah. Well, the how we, yeah. Yeah.
So how we refer to it in the UK might be slightly different to how other parts of the world are referring to this here. But, you know, I went to nursery, primary school, secondary school, and then after secondary school, I decided that I wanted to go and start working. So my very first job was not in tech.
I started working in, I think my very first proper job was working in like a juice bar. So you wanted a nice smoothie, you wanted a nice, I don't know, protein shake or something. I used to work and, you know, put all that together.
And then I did those kinds of jobs for a little while. And I did some other bits and pieces. And then eventually I got a job.
Um, I went on a training course that would teach you about technology, but the kind of like intro basics about how networking worked. And then from that, they would then recruit you into some of the companies that they had on their kind of like database, where if you pass them their training and from there, I went in and become like a field service technician for a couple of years. So I used to drive around to some, what kind of stores would you have?
So I don't know, like a Walmart, for example, in the US would have those handheld scanners that would scan inventory and then send it to a printer to print a label and things like that. So, and, uh, and tills were the point of sale tills. So I used to drive around and fix a lot of these kinds of devices all around the UK for a couple of years.
And then the position came up for basically one of the largest ISPs in the UK, or telcos, however you want to refer to it. They're called, uh, they were called Sky. So they provide a TV and internet for, I don't know how many households in the UK.
A job came available to go and work for them in the support team because they had. I could dedicate a branch called the cloud at the time that was putting in a wifi solutions for high street coffee shops and other places like that. And they needed people in the support team to go in, provide support for the different venues across the UK.
And that was my very first role in wifi. And at the time, uh, I knew very little about wifi to the point where I tell, tell this story to some people that I'm a little bit embarrassed. But when I was like going through the process of learning and wifi, I had a few people in the team that was a little bit more experienced than me.
And I remember overhearing the conversation that a more senior member in the team had with a customer and the way that they was able to fix the issue that they were having on site with the wifi was that they changed the channel that the access point was using. So the customer was having some problems. They called up, spoke to someone, the guy sitting next to me in the support team changed the channel of the access point he was using.
And then the issues went away. I was like, Oh, I was like, I'm going to remember that one. That's a good one.
Just change the channel. Yeah. And then Alexis calls me up and I speak to Alexis on the phone and Alexis is like, Oh Matt, I'm in the coffee shop.
The wifi is not working. I said, don't worry, Alexis. I got you.
I'm going to change your channel. And at this time I was, it was, uh, access points going back a little while ago now where predominantly 2.4 is a little bit more popular than five gigahertz. I changed the channel of the access point on 2.4 from channel one, the channel two. And I went, there you go, Alexis. That's going to solve all your problems.
[Kevin]
Here's your overlapping channel.
[Matt]
And, uh, funny enough, like a few minutes later, Alexis calls me back up and goes, Oh Matt, wifi has got worse. What have you done? I said, Oh, every channel two is a little bit busy.
Let me, uh, change it from channel two to channel three. And I'll fix everything. Little did I know that I was actually causing worse interference than just co-channel interference and creating a JSON channel interference on 2.4 gigahertz. I had very limited knowledge when it came to wifi. And over time I, um, went from, went through some different trainings and learned a little bit more about wifi and gained some more skills. And I then learned that, you know, doing that on 2.4 gigahertz probably wasn't a good idea.
[Alexis]
So for someone who it's funny, I was just talking to someone yesterday. Um, I was renting a car and we ended up talking about what I do for work and the podcast and all the other stuff. But for someone who maybe isn't in technology yet, that first field service job that you got, do you think that's a good jumping off point?
[Matt]
It definitely, it definitely helped me. And I, um, I very much liked going in and around to different places and seeing and meeting like different people and working in the field. Um, but it was quite, I'm not supposed to say like a lonely job, but it wasn't really something that, because I was typically on my own, it wasn't really something that I could get to a level.
And then it wasn't really that much of an opportunity to then learn more because you didn't really have someone that you could shadow or learn from or ask, you know, you know, just like someone in, like, I didn't have the same situation where I could overhear someone helping fix a problem and ask them to find out more information about that. Cause I was on my own. It did give me some, some good skills for sure.
But I definitely found, you know, working as part of a team and having some, some mentors and having people that you could bounce and ask things to them to get their opinion on and share their experience with you really helped me. So I definitely found that being in that, I would say that the pivotal point really was going into that, that support career, cutting my teeth in support for, I think I did it for probably around three, four years before I then moved from the support team to a wifi engineer where I was actually going out, surveying, designing, installing the wifi networks for the company I was working for at the time.
[Alexis]
We get a lot of questions of what certification should I take? Can I take my CCNA? If I get my, if I get this cert, then can I do this job?
And sometimes just getting into the industry point blank, right? Can you work with technology in any capacity as your first role and then grow from there? I guess that's the reason that I'm asking, because I feel like sometimes the certifications are great for base knowledge, but just getting a little bit of hands-on experience like you had and kind of figuring out what you like.
[Matt]
Yeah, for sure. I mean, sometimes it's a little bit of a chicken and egg situation. Like, do I try and get the knowledge first?
So I try and go for a job that I can then obtain the experience. Ultimately you want to have both because that's where you're going to really learn. If you have one without the other, it's probably going to, you're probably going to find it very difficult to grow.
And I was lucky because the company that I worked for, they were willing to put me on some training. So you mentioned like Cisco CCNA, uh, the, I did that training for getting like good generalist knowledge around networking. I found that to be pretty helpful because wifi access points, they have to connect to cables that go to switches that go through firewalls and yada, yada, yada.
So having like a basic understanding of how all of that works is really important. And then there was two other training courses that really helped me. And that was the ECSC design training course, where it was not only just great theoretical stuff that you learn, but really practical hands-on ways to use EchoHow in real world solutions was really beneficial to me.
And then I took the CWNA training from CWNP, which is vendor agnostic, how wifi works. And I think Kevin, you mentioned you've been reading some of that book recently.
[Kevin]
It's really nice. It's, it's a really awesome certification because same with EchoHow really, that's something I've told you guys before. I appreciate in this, this episode is not sponsored, but I do have to puff up EchoHow a little bit because they do a really good job of staying vendor neutral, talking about the technology itself and how wifi works.
And they don't commit to, you know, this way with the vendors, the right way versus ways, the better way. They're just very vendor agnostic and all of their webinars and trainings are, are fabulous.
[Alexis]
I think one of, I think one of the coolest things about, uh, AI pro is you can put your, your whole wifi design up and then just switch the APs to different vendors. It's like one button and you just go through and click them all to see what the difference is. I thought that was pretty cool.
[Kevin]
It was very cool.
[Matt]
One of the nicest things is working for EchoHow is that we really listen to the feedback we get from our users and the community. And one of the like biggest pain points that some of our users were telling us is that a question that, and I would come across this all the time as well, is going into a conversation with a customer and the customer would be like, Oh, my wifi is so bad. I use vendor X, vendor Y have come in and told me if I just swap out all my access points to the new vendor, all my problems are going to go away.
And that's not necessarily true. So, um, having a tool that can show you, you know, swap, swapping out all your access points from one vendor to another one. If you have problems, if you had a bad design with problems with coverage and roaming paths and interference and et cetera, et cetera, just swapping out to a different vendor access points, it might fix some of the issues going to a newer technology and make some slight improvements.
But the foundational fundamentals of why you're having problems with wifi are still going to be there. So the fact that you can just show that in a nice visual way to people and they can then understand the story a bit more and then know, Oh, you know what? Maybe I should take a step back using my actual requirements, design it properly in the first place, make sure it's configured optimally.
And then it stays optimal. It's kind of like getting a car and keeping your car MOT and service. Like once you've got a car and you're driving it for a long time, things start to, you know, get some wear and tear, some changes happen and you want to fix it and then make sure it's going to be able to be nicely driven on the roads for a long period of time.
[Alexis]
So I'm, I'm curious talking, talking about vendor technologies. I've seen a lot lately come out around AI channel planning and AI wifi design. And I feel like, especially in the wireless space around, uh, channel planning, channel interference, um, all of those things, there's been a lot of talk from certain vendors about almost like a self-healing wifi design.
It'll optimize, self-optimize. How do you feel about that, Matt?
[Matt]
I feel great about it. I think the more that the vendors can integrate AI and channel planning to be dynamic, to avoid things in the environment. And what I mean by that is that you might design an office.
You might get called it. Kevin might call me up and say, Hey Matt, I need you to come and do my office wifi for me. But Kevin may only occupy floors seven and eight out of a 50 story building.
And if you go in and put the APs on the floor seven and eight and configure the channels in a way that they don't overlap or interfere with each other. However, in like a 50 story building and you've got, you know, 48 of the floors that have all of their own wifi, there's a strong chance that's going to bleed through and come into your space for wifi is as well. And depending on how these other networks are configured, they're going to be changing their channels.
Sometimes, sometimes they change once a day. Sometimes they could change 10 times a day. So what you do really want in a, in an environment like that is a vendor's algorithms be smart enough to understand when there is a lot of.
Co-channel interference, other interference out there happening on the channels that you're working on to try and like scan and find like non-busy or best busy channels to make the connection as good for the client devices as possible. I don't get me wrong. There may be some specific scenarios where you may want to go with a fixed static channel plan where you've got, maybe it's a very large public venue and there isn't that much outside, uh, wifi around you.
And you know that if you go with these specific channels in these specific locations, it's going to minimize the amount of interference. And you don't want anything to come in and tweak and change that. It could even be in a warehouse environment where you want to use specific channels and you've done your design, you've done your validation, you know, that's not going to cause any problems and there's no other wifi networks around you that should be causing you any kind of issues.
So the smarter the systems get to avoid this, they make the connectivity better for the client devices. Ultimately is, is better for everybody.
[Kevin]
Do you, do you feel like you're. So with echo, how, and a lot of these vendors, how AI is really, you can just upload the map, hit a button and your APS just populate and everything's done. Do you feel like AI is going to be taking people's wifi jobs?
I get, do you feel like it's going to be so easy that you don't, you don't need a wifi engineer. You don't need to know RF. You don't need to know all these minute details.
You can just upload the map and boom, you're good to go.
[Matt]
So from my personal perspective, I would say, no, the way that we're using AI in our platform and tools is to speed up the workflow for our users. So what you said there about just uploading a floor plan and then being able to see the access point populated on a map, there's a whole bunch of steps that need to happen before that to show you the heat maps accurately, like scaling your floor plan, drawing all of the walls of your floor plan, drawing in your areas, et cetera, et cetera. So the way that we're using AI is to try and leverage that power to make what would take our users a really long time, manual work to do, to speed it up so you can get to the fun part, like designing where the access points are supposed to go and we get users at Ekahau that could be anyone that has never designed a wifi network before, their very first wifi project, just starting off in wifi to complete experts that have been doing it from Twitter for the last 20 years. And anything and everything in between.
So we do have a AI auto planner that can, once you pick the vendor, the access point you want to use and the specific types of antennas, we can place them on the map for you, or we can make suggested locations on where to put them. Ultimately, the person doing a design should always check to make sure, can I actually put these APs in the place? Have I got the materials accurate?
So you should still always go on site, validate, measure, look around at your ceilings, see if you can put the AP or antenna there and then come back and update the design, what way that we're using AI is to speed up the workflows and help users maybe like with a starting point, maybe sometimes what I call it, like writer's block. When you're looking at a blank page and you think, Oh, what, how do I have started this very first podcast? Like what do is the open, right?
If you have, if you have like an AI that can, you know, just put something down on a page for you, even if it's just a few APs in a few locations, you go, okay, some of these make sense, but you know what, maybe I need to move this here or add one there or move this over here. And it's a nice way to kind of like get you started. And, um, you know, even if it's helping you with calculating things like capacity to make sure that you are going to have enough radios in your access point to support the amount of devices you're going to have in your environment, then you tweak the locations based on that.
[Kevin]
Okay. So our jobs are still safe, you're saying?
[Matt]
I think so, but, um, yes, uh, time will tell.
[Alexis]
And all of that to someone, I'm, I'm, I was just thinking like, man, if I knew nothing about wifi, nothing, I wasn't technical at all. And I was listening to this episode. I'd be like, whoa, that's a lot.
That's a lot. There's a lot there. How long have you been working in the industry and how long did it take you to feel like you knew what you were doing?
Right. There's always a certain level of ramp up from beginner to even just understanding the jargon, right? I've been in situations.
Um, I remember it's funny. I was about to, uh, record this video for TikTok, but it was when I learned what a colo was. So I took my CCNP.
I was a CCNP. I knew what a data center was. I'd done data center training at Cisco and I walked into a customer meeting with my AM and they're talking about Equinix this and you know, whatever, DC, DC three.
And, and I'm like, man, why, what are you talking about? And Brian's like, oh, Equinix is just a colo. And I'm like, what's a colo?
Don't talk about colos in your CCNP. They talk about data centers. They don't talk about like the data center industry or the fact like there's 15 different levels you can like buy, rent and use data center space from all the way from like a colo to the cloud.
There's so many different ways you can run a server. Right. And I had no idea.
And so I feel like if you're brand new, even just becoming familiar with some of the terms that people are using is really intimidating. And I was just thinking about like, we're throwing out a lot of terminology here, everything from channels to interference to, you know, antenna design and all that stuff. How long did it take you to feel like you really had a grasp on what was going on?
[Matt]
So I feel like Alexis is always trying to age me. Last time we spoke from the phone, she was like, your hair's got more salty than it is peppery for me. And I was like, wow, okay.
So how long have I been working in the industry? Now I would say that properly, properly in the industry since like 2010, I would say is that when I was really, really, really focused on wifi and then it ramped up a lot when I left working for that ISP Sky that I was talking about. And I went to a, a Cisco gold partner based in London.
And I was, I went from being like one of few people in the team doing the wifi. And then I moved from there being the main person doing the wifi. And I was, like I said, I was going around all of the, the big hospitals and stuff like that.
So I had to take, you know, push myself outside my comfort zone, go into this role. And I was there for a couple of years and then I moved to another Cisco gold partner based in, in central London. And that's where I met Mac.
Uh, actually he, um, yeah, yeah. So, um, that's where I met Mac and he was just as excited and passionate about wifi as what I was. And then when we joined that company together, we, um, we really pushed each other on to go and get to the highest level of certification that we could in the wireless industry.
So CWNE is the top level expert on that you can get from CWNP and we, we pushed each other along to go and get those certifications. So one of the, one of the things to get become like a CWNE level, it was, you had to have some form of publication. So we had to be talking publicly about wifi.
And I still remember that there's still a video out there to the day, our very first video that we ever made. And it is so bad. We're going to link it.
[Alexis]
We're going to link it in the comments.
[Matt]
Absolutely. Not swearing now here anyway, it's out there on YouTube still with like 21 views. So I'm glad that not many people have seen it yet.
We were so nervous. And I was, I remember watching it back and I was, I was like swaying side to side and I was terrible in front of the, in front of the camera. But from that, it really kind of pushed us on.
And that's why we started the podcast that we did all those years ago. The Wifi Ninjas podcast is so we, it would force us to really learn more about the technology we're talking about. Because if you're talking about technology and trying to educate people online, you can't be wrong about what you're talking about.
You don't want to get that. I feel personally responsible. I didn't want to give out any misinformation.
I didn't want to, I didn't want to tell people, Oh yeah, go and change your 2.4 channel from channel one to channel two. You know, I wanted to make sure the information we was giving out was accurate. So pushing yourself, I would say sometimes you did learn and grow more.
You have to push yourselves outside of your comfort zone. And there's a few, there's a few pivotal moments in my career. I look back on where I did that.
I'm putting yourself out there in front of all of these people for the podcast. We didn't actually think anyone was going to really listen to it. We thought it was just going to be like a checkbox for the application for the, for it.
And then we started getting invited to speak at different conferences, different events. So we spent a lot of time researching, studying, and really getting to like home in on our kind of like craft and learn about the industry and the things that we'd want to speak about. And then we would then talk about it publicly, which if you're going to be doing that, you want to make sure the stuff that you're talking about is accurate.
So that is probably when I, I would say that I felt the most like going from, Oh, yeah, I know a little bit about wifi and I feel pretty confident about it doing all of these like projects and stuff like that. But when I was really putting myself out there publicly to talk about it and I got to the, the level of CW and E that is probably where I felt the most comfortable talking about wifi and sharing it with other people.
[Kevin]
That's just a testament to like, we, we talk about all the time where if you want to teach something or if you want to learn something, the best way of doing is teaching it because that is the one surefire way of making sure that you will make sure that every, you know, T is crossed and dot is period. What's that saying? I don't know.
[Alexis]
I don't know. The dots period. T's crossed and I's dotted.
[Matt]
Put your T's in your eyes.
[Kevin]
Hold on, I need more caffeine. Hold on. But you know what I mean?
Like it's, it's, we, we, Alexis and I talk about it all the time where a lot of the videos that I make will be from things that I'm still learning and I'm just wanting to like, I learned the topic and then I will put it in my own words and my own way of thinking and put it out there. And it's the best way of, of learning something.
[Matt]
You guys do a fantastic job. I see so many people when I'm in and around other places, I've been walking somewhere and then someone would get out their phone. I'd be like, Oh, that's Kevin.
I'd be like, Oh, I'm like, Oh, okay. Um, but people see that we've done a few things together in the past. They love to come up to me and talk about to you guys as well.
So kudos to the great job that you guys are doing as well.
[Alexis]
So I did want to, uh, talk about Matt. Seems like you've gone to the dark side a little bit. You had all this operations experience.
You were a very hands-on engineer and now you're working in marketing. How did that happen?
[Matt]
That's a, that's a good question. So my, my usual response to that is I tell people, I kind of like tripped, fell, and then now I've landed in marketing somehow.
[Alexis]
You woke up five years later and you were like, Oh my God. What happened?
[Matt]
I'll be completely transparent. It was never a part of that, the plan. Um, it was just something that kind of naturally happened, which I feel is a real like nice, it's kind of a nice thing.
It's quite organic how it all materialized. So back when we was working at the professional services company, we started the podcast, um, we was presenting at different wifi conferences around the world, it was hosting events and stuff. And then we actually started teaching ECSC classes.
We, we, we became ECSC instructors. So we were still working for that company before we was doing professional services work, we're doing the podcast, we were teaching classes and then going to different events, talking about wifi. And probably like the kind of like perfect storm happened at Eckerhau and there was an opportunity where they wanted us to come on board to work at Eckerhau full time.
So we, uh, made a decision to transition from being professional service engineers and instructors to coming on board as a doing product marketing and then looking after the ECSC and the training program over here at Eckerhau. And it's been a great journey ever since then, really, I feel very, uh, lucky to be in the position that I am to talk about. Uh, wifi to so many people.
I, I still kind of feel like I am that wifi techie nerd. That's just about wifi and love Eckerhau tools. And that's just what I do really.
I just, uh, come here, look pretty and talk about Eckerhau.
[Kevin]
Did you know anything about marketing ahead of time? Or like, or did you have to do a crash course of like marketing one-on-one for dummies or something?
[Alexis]
I feel like a lot of people don't know what product marketing is.
[Matt]
I'll be, I'll be honest. I still don't know anything about marketing. I, um, I, uh, I just, I just talk about Eckerhau and wifi is how I am.
I look at this and if I, uh, if you ask my wife who went to university, studied marketing, has a degree in marketing and has worked in marketing her whole career. And now somehow we both work in marketing. It doesn't feel like it's kind of, I don't, I don't know a little bit.
[Kevin]
Yeah.
[Matt]
You get the, yeah, I'm not, I'm not too sure really how, how it will happen, but it did somehow, but no, for me. I don't, I don't even, I don't really necessarily, I probably just don't even really think about it from, from my perspective. I I'm very passionate about wifi and I love using Eckerhau and now I get to speak with our product team on the daily basis, talking about ways to improve our products, the real ways that our users are actually using our tools and applications and ways to make it better and more efficient for people and also get to work with them on new things that are coming out.
So, um, people might've heard recently as well, that Eckerhau is actually a part of Ookla and Ookla announced just recently their speed test certified a program that is going to be launching very soon. So I've been fortunate enough to be a part of that conversation from where it's pretty much just like an idea on a whiteboard, uh, months and months and months, months, months to coming out is when it got announced a couple of weeks ago. So I feel very fortunate to be able to be, you know, having those kinds of conversations and speaking and working with the team to kind of launch these new things as well, which is very, uh, very exciting.
[Kevin]
Yeah. It sounds almost like you're a tech, uh, a wifi Eckerhau, evangelical, evangelist.
[Alexis]
My God, I still can't say the word evangelicalist, evangelist.
[Kevin]
So yeah, I did it.
[Alexis]
Thank you, Kevin.
[Matt]
I would, I would say I am an evangelicalist for sure. Yeah. Uh, no, definitely.
I feel probably more of an evangelist than, than officially working in marketing, because like I said, I, I still make sure I stay hands-on with the tools. Every time I get the opportunity, I'm taking Eckerhau with me. I'm doing surveys.
I'm still working on, you know, like designs and projects and things like that. So I keep myself sharp, you know, like every time we go to one of our offices, I was just in New York recently. I was taking, taking the stuff there and doing, uh, surveys and analysis and working with the team.
And we do case studies with, you know, different types of verticals. So I still get to be hands-on and keep myself technical. And there's so many.
One of the questions you asked earlier, Alexis, is that how do people that maybe that just getting into this, into wifi or into technology, like where do they stop? There's so many free, so much free content out there now you can join. There's so many webinars.
There's usually a lot of like low cost events that you can attend. You can find videos on YouTube. There's like dedicated training stuff that you can go and find.
Even some, some places will have like some portion of it that is free. I think that's such a great resource to be able to get yourself started and kind of like learn about the features or something that doesn't have to be wifi. And because I know everyone, I know there's gonna be a big portion of the people listening to this that are not really excited about wifi as what I am.
They might be a cybersecurity that really gets you interested or excited, or it could be the wired side of things. You really enjoy the routing and switching side of things. I think the main thing is finding something that you find interesting and you're passionate about, because I'm not gonna BS you or anything.
If you want to learn about technology and, and really home in on your craft and. Uh, find out more about how it really works. You're going to have to give up so much of your spare time, especially I did anyway, like early, you're probably going to have a nine to five job, but you might not even be in, you may be in tech at this point.
You may not be, but on your way to work, you might have to be listening to technical podcasts in the evenings. You might have to be doing some labs or watching some videos. You might have to give up some of your time on the weekends to learn about these things because technology, uh, you don't just learn it and you know it.
Even me now, I'm still learning constantly. The technology is always evolving and there's new things coming out and you've got to constantly stay on top of what the technology or whatever it is that you're, uh, interested in, whether it be wifi security, routing, switching data center, uh, you have to constantly be keeping up to date with what is going on. So you are going to have to put in the time.
Probably give up some of your own personal time to find out about these things in more detail.
[Kevin]
Matt, I have a personal question for you. Um, my personal, I mean, like, I personally want to want to know the answer, your, your opinion on this. Not like I'm going to dig into your trauma or something.
Um, that sounded like a weird tier to you. Uh, so wifi seven is the newest rage, right? Do you, do you feel like it's mostly marketing or do you feel like it's actually going to change the game where it's going to improve wifi that much?
[Matt]
Hmm. No, good. That's a, that's a really good question.
I think that the game changer in wifi in more recent years is getting access to the six gigahertz frequency band. So for the longest time, we only had access to 2.4 and five gigahertz, 2.4, very small amount of spectrum. We can use congested lots of other things work there.
Five gigahertz became the go-to de facto for corporate connectivity. However, again, limited availability there now. And with so many wifi devices out there that was even getting congested.
So the jump to now being able to support six gigahertz frequency band with our wifi client devices, that is the biggest game changer in most recent times for me. Wifi seven is going to be a great thing to drive. It's optional six gigahertz as well.
And there are some really nice features that come with wifi seven that wouldn't be available to you with previous generations that you can, in theory, if you have a wifi seven client device connected to a wifi seven access point, what you can actually have happen automatically is if the device is supported, if you're connected on, let's say the five gigahertz frequency band, and that starts to get a bit congested, they can steer you over to the six gigahertz, or you can combine five and six gigahertz to transfer data. So that isn't something that we've ever had to be able to have access to before in the past. The other really interesting thing about wifi seven, I think it's something called spectrum puncturing.
So if you've got, let's say you're using a wide channel on wide wifi seven channel, and if there, and there's a, let's say that part of their channel starts to detect a little bit of interference with wifi seven, the communication can then just actually avoid that chunk of interference and then continue the communication. Whereas with previous generations of wifi, as soon as there was like a detection of interference, the devices would have to back off and stop talking or find another way to transmit on a different, different channel. So there are definitely improvements that wifi seven brings to us compared to that previous generations.
But to answer your question, like what is the biggest game changer for me personally, more recent times is definitely access to the six gigahertz frequency band.
[Kevin]
Yeah. That makes sense. Especially with the congestion that we currently have in offices and apartments and everything else.
Like I just, even in my own neighborhood, I live in the suburbs and I get wifi from five houses down that's interfering. So definitely I could see that.
[Matt]
Yeah. Well, you've got, you've got a house psychic, so you can see what's going on.
[Kevin]
I've already, I've started tracking downs. I'm like, I want to go to my neighbor's house five times down and be like, Hey, can you turn down your power a little bit? I'm getting this much reading from me, like showing them the graph and everything, but I haven't, I haven't done it yet.
I'm not thinking about it.
[Alexis]
It's like, do you know, do you know who I am? What I have.
[Matt]
The power of pizza becomes very popular. You sign up with a, uh, some pizza and say, Hey, you know, if you, if you want to have a better experience on wifi, we need to, we need to communicate better. Maybe you stop using such wide channels and we use over here and use over there.
And then you can fire a pizza and figure out what's best for both of you. I'll I guarantee you.
[Alexis]
Who are you? Are you trying to hack me? What is that thing?
I don't understand what those numbers mean.
[Kevin]
Go away. Strange. The words you're saying don't make sense to me.
Um, I'm just going to close the door now. So Matt, you mentioned earlier that you had a partner in crime that was pushing you towards the certifications and making you dig deeper into technology. Now that you're the senior director of echo, how you're this big wig, how does community play a role in your current role?
[Matt]
So, um, yeah, well, I guess you two can kind of relate to having someone to push you on and egg you guys on a bit because you two seem to balance each other really well. So having that person that will push you is, is, is fantastic, but not everybody will be as lucky to maybe have that kind of situation scenario. And what also really helped me, even before I met Mac and stuff like that, um, echo, how would hope on these things in person in the UK called wifi design day.
And it exists. You have to use that last year, uh, this year in London. And, uh, it's, it's an event where it's dedicated just for wifi.
You get however many hundreds of passionate, enthusiastic wifi people in the room. It's a great way to meet new people that are interested in the same thing as you are. Sometimes it's very difficult to pop out to your local pub or club or whatever.
And then you want to talk to people about interference or FDMA and other wifi technology stuff, and they're like, who is this guy? And why are you not talking to me about football or other things? Being able to, to meet up with like-minded peers who are just as passionate or excited as you are about the same thing is really helpful because then you get these connections and there's people that I can remember that I met at the very first echo how wifi design day that I still speak to near enough on a daily basis.
So they weren't just people that I just met and then never spoke to again. The people that I actually classed as like good friends now. So I've kind of like grown with these people too.
And echo how I think personally does a really good job of engaging with the community. So we do webinars biweekly. We do virtual events or wifi day and we do in-person events like wifi design day.
We also have a public slack channel, which I think has 1500 people in there now. So Kevin, Alexis, I know you've been on our webinars before. The chat can get a little bit crazy sometimes.
There's a lot of when, when someone's talking about a point and that kind of really hits the spot, then the chat just goes and you're like, Oh, I think sometimes I think people join the webinar just to interact with the chat instead of actually watching the webinar.
[Alexis]
I'm not going to lie.
[Matt]
I, um, I don't disagree with you. I think it, I think what the, um, the webinars it become was a, um, a really nice place for people, the people in the community to just hang out virtually together because sometimes you'll see people at a big industry event, maybe once a year, let's say in America, for example, you might go to Vegas or one of those kinds of places and see people from all around the world, but then trying to stay in touch with them outside of that can be a little bit difficult. So what the webinars and the events that we put on enables people to do is be able to come to the event. They can, yeah, they can learn some stuff, but yeah, they want to hang out with their peers.
They want to, they want to chat. They want to, uh, find out what's going on and the latest and greatest. And just, uh, you know, like I get to hang out, have a good time and there's absolutely nothing wrong with that.
And we love the, um, engagement in the chat and we have the chat for people just to talk amongst themselves, but we also have like a dedicated Q and A. So if there is specific questions, people want to know about what we're presenting about or one of our amazing guests are talking about, then we can make sure we get to that and answer them as well.
[Alexis]
I think what's really cool. I mean, even as I've been traveling, I've been traveling frequently, um, but having a community or going to a NOG or something in a local area where you can actually meet people. And it's not that you're just only going to meet people in that area.
Um, you meet people from all over the world. And as I've been going to different events and, um, NOGs and groups and things, you kind of start to see the same people over and over again, even if you're in different countries, which is really cool. Um, because like you said, it, it makes you feel like you, like you have friends.
Yeah. They're in the industry and you can talk about, I don't know, technical things instead of like you said, football.
[Matt]
But you guys have put on your own meetup and events and stuff before as well. Right. So you probably have the same kind of fitting from the community that you guys have built up.
And Kevin, you have your own discord now as well, right?
[Kevin]
Yep. Yep. And it's, it's cool having, I don't know, like you said, like, I don't have anyone in my life, my personal life that talks technology.
Like I try to talk to my wife about it and you can see like the eyes going back of the head and just everything glazes over, you know, when the closest I have is my son.
[Alexis]
Smile and nod boys.
[Kevin]
Yeah, exactly. My son will try a little bit, but in general, my friends aren't techie and my wife's not techie. So having a place where you can like share your passion with people is amazing.
And it re like reignites that fire. Um, you're like, oh, I can share my passion and someone else's passion and that just recharges your battery. So having a community, having someone like actually getting you is, is priceless.
[Alexis]
You can say, oh my God, did you see that the new iPhone supports wifi seven and someone knows what it means. And they're not just worried about the camera. I know Matt, I saw your tech talk this morning.
[Alexis]
That's why I brought it up.
[Matt]
Genuinely, my mom messaged me, um, responded to that. I put it on my Instagram story as well. She's like, oh, wow.
That looks really cool. I think about upgrading, like, why did you, why did you get it? And I just responded, oh, wifi seven.
And she was like, what is that? And I was like, yeah, mom. That's the reason why I upgraded to the, to the latest iPhone.
That's, that's the biggest benefit for me. Uh, or how it has a nicer camera, Matt. Yeah.
Then I saw, then I sent her a selfie and I was like, look how good I look on this camera. And she was like, oh gosh, I need to get it then.
[Kevin]
Um, that's my baby.
[Matt]
Um, one of the things I was thinking about when you was talking then some, sometimes I would get asked about, uh, public, like, how did I go from when I did that very first video with Mac public speaking or video talking on camera, because it can feel very unnatural for people or speaking in front of an audience of 10 people or a hundred people or thousands of people, especially technically can be very daunting.
And one of the ways that I used to practice is I would sometimes present my present, my wifi technical presentations to my wife and she would, she would very kindly listen to them and give me some feedback on some ways to improve my presenting skills. But, um, she's also a wifi expert. Now, the amount of times I've presented, anyone needs some help with that, you can ask her, I'm sure.
But no, um, I definitely think practice makes kind of like perfect and getting more comfortable and confident with things. I would even just record myself sometimes and try and not forget it was there. And then I watched myself back and then.
I didn't really like how I said this, or I didn't like that I was doing that. And then try and cut that out of my presentations. So if anyone does want to start talking about whatever topic or subject that they're passionate about, I would highly recommend, even if they just do it to themselves in a mirror or record themselves with their phone, or if they have got a friend, partner, loved one that they can practice in front of, it will really make a difference to where you then go and do it in front of a bunch of other people. I don't know if, uh, you guys have gone through similar things because Alexis, I know that you've spoken recently a few times with some big events. What did, uh, what did you do to get comfortable with presenting in front of X amount of people?
[Alexis]
I think, well, number one, speaking live is still very intimidating for me. I just want to put that out there. I'm not the world's best public speaker.
Um, and I think that recording videos makes you a better speaker or a better presenter because it gives you that feedback loop where you're able to see, oh, I should cut out that filler. Weird. That thing I did with my hands is weird.
Maybe I shouldn't make that facial expression, right? Like there's all sorts of things that you pick up on when you're watching yourself back. And I think that's a great feedback loop, but making the jump from presenting on a Zoom or recording a video in your bedroom by yourself or even doing something like this to actually speaking in public in front of people is still very different.
I think, um, the keynote that I gave at Apricot back in February was my first time presenting live since Cisco live. And it was this huge stage. I mean, like it had to be, I don't know, maybe 50 meters long.
I'm just, I ran track. So that's like in high school.
[Kevin]
That's the only distance I had. So I don't know.
[Alexis]
You never saw like a hundred meters stretch on a track like a football game. Anyways. So like, it was, it was, it was a big stage.
And in my head I was like, oh, I'll like do a little walk around where speakers kind of like stroll to one side and they pivot and then they walk to the other and then they go to the middle. And I got there when I tell you I was anchored. It was like my feet were glued to the floor and I made motions with my hands, which was nice.
But my entire game plan gone. Same thing at Wi-Fi day. It was like, wow, there's this stage.
I shouldn't use it anchored to one spot. I did not move. So I forget the original question.
I think we were talking about how to become better. I think it's, it's really just practice acceptance that you were going to suck the first few times and pushing through it.
[Matt]
Well, Alexis, you definitely didn't suck. So people loved your present presentation at Wi-Fi.
[Alexis]
It was the content. It was the content. I could have, I could have been a terrible speaker and the content was good and they still would have liked it.
[Matt]
I don't believe that for a second.
[Kevin]
I guess it's kind of the part of the nice thing about being in tech is that a lot of the people, you know, we're all kind of anti people. Like you get into tech, not because you love talking to people, but because you love the technology itself. So that's the part we care about is the, the actual, the tech, you know, you can be a terrible speaker, like, like in your head, you're doing terrible.
But as long as your content's good, like the technology, that's the part we actually care about. That's the part we all, we're all there for, you know, so it, you're always going to be harder on yourself than other people who just, who just like you in general and just want to hear you talk about the stuff they're, they're passionate about.
[Alexis]
Yeah, for sure. I'm curious, Matt, and this is just me spitballing and brainstorming live. Um, I wonder if there's, we could start like a, what do they call it?
Um, Toastmasters, but for people that, but for engineers, like we should start like a segment of Toastmasters where it's only for other engineers who need to practice giving technical presentations. And then it could be cool because you could join and learn different things, but also get better at public speaking.
[Matt]
So with all transparency, I have no idea what Toastmasters is, but from the web, I kind of got what you kind of meant by that. And, uh, yeah, that'd be really cool. I actually have helped quite a lot of people in the, like people have reached out to me to ask if I would review their presentations or, um, if I would help them with presenting and stuff like that.
And I always more than happy to help if I have the time. So I've actually worked with quite a lot of people on some of the things that they've done and other bits and pieces like that. So it's nice to, it's nice to then see when people ask for that, reach out, ask for that kind of help, and then you give them some advice, then they actually go and do it is a really nice kind of, like you said, and that's still a feedback loop and stuff like that.
So I mean, that's a really nice idea.
[Alexis]
Kevin, maybe we start that in your public discord. I guess we'll actually have to join it now. I don't have discord downloaded on my computer.
I've been resisting.
[Kevin]
What's been kind of cool is that on the discord, we have a CCNA study group. And so, um, we have different people present on different topics. So like if you, if you really know spanning tree or something like that, then you present on a, on a study night, what you know about spanning tree and help people.
So it kind of gives you that low pressure intro into, into speaking in front of other people or virtually speaking in front of other people. Um, so shout out to my discord.
[Alexis]
Well, Matt, I've got one more question for you. We've talked a lot about wifi today, but if someone who is listening to this feels like wifi is maybe too complex or too intimidating or there's too much jargon, um, is there any mindset shifts that you would give them to take away from this episode? If you were speaking to yourself when you were in the operations role and you knew nothing about wifi, what would you tell them?
[Matt]
I would say everyone's got to start somewhere. And even if it's a small step that you can then build upon. So maybe even if it's just committing, you know what, I'm going to set up a routine where, I don't know, maybe you drive to work.
Maybe you get a train to work, maybe a bus to work. Even if it's just something as small as not every day, but every other day, I'm going to listen to the, uh, to a podcast dedicated about the technology that I'm interested in. Or maybe I'm going to go in, sign up and watch a few webinars on something specific that, you know, really has got my attention.
Or, you know, if it's wifi that people are interested in, excited about, we have free training. You can go and watch on our Eckerhal website. We've got lots of webinars and blogs that you can just go and sign up and read.
I'm sure there's lots of other different vendors out there in different technologies that have similar access that you can get easily available to you. And also I find I've did, I did personally find when I was getting into the kind of nooks and crannies of configuration side of things, having a lab was very helpful. But back when I was doing it, most of the time you need is have a physical lab.
Whereas Kevin, I know that you shared recently on some of your videos that actually you can go and do the same things, but with a virtual lab, and there's a lot of places that you can get free access to try these things out or at a very low cost. So that would be kind of my recommendation for people listening is that everyone's got to start somewhere. And sometimes just taking that first step is the hardest, but once you've taken it and then you've got that routine and momentum building, it's very easy to then continue whatever it is that you decide to go down from the path that you're passionate about.
And that would be my recommendation. If it's wifi that you're interested in, if it's brewing and switching security, etc, etc, after this, after you listen to this podcast, go and find, there's going to be a podcast in that industry or niche that you're interested in, like go and find a podcast and listen to some of that other stuff in there. I'm sure they probably, a lot of the podcasts will have like beginner versions of podcasts that they've watched.
You can go and start with them ones, and then they might even have recommendations on that next steps that you can do.
[Kevin]
Yeah. It's almost like learning a language, you know, like when you're first learning a new language, the advice is to get completely engrossed in it. Like watch some TV shows in that language, listen to that music in that language, talk to someone in that language.
It's almost the same thing where the more you are engrossed by whatever you're trying to learn. So podcasts and joining discord and communities and watching webinars and that kind of stuff, it will slowly seep in. Even if you don't, it doesn't feel like it always, it slowly seeps in.
You'll start learning the stuff pretty quickly. So great advice.
[Matt]
If it's Wi-Fi you're interested in, come and sign up for one of our next webinars. And then you can say in the chat, Hey, you know what? I listened to your podcast with Alexis and Kevin, and now I'm here on the Echo How webinar to learn more about Wi-Fi.
And I will call you up and say, Hey, that's great. I'm glad that you took the time to do that.
[Alexis]
Well, that's it for this episode of Life in Uptime. Huge thanks to our guest, Matt, for sharing his journey and thank you for listening. If you enjoyed this conversation, be sure to follow our show so you never miss another episode.
And if Matt's story today gave you something to think about, feel free to share it with a friend or colleague who might need it. And until next time, keep learning, keep building and keep your uptime high.`,
  },
  {
    episodeNumber: "007",
    slug: "ep-007-from-track-to-tech-navigating-career-change-with-resilience",
    title: "LIU007: From Track to Tech: Navigating Career Change with Resilience",
    guest: "Ifeanyi Otuonye",
    guestTitle: "Technical Account Manager",
    guestCompany: "Amazon Web Services (AWS)",
    guestLinkedIn: "https://www.linkedin.com/in/ifeanyi-otuonye/",
    description: "Ifeanyi Otuonye was a decorated track and field athlete at Kansas State and even competed professionally. Then he made the leap to a Technical Account Manager role at Amazon Web Services. Alexis and Kevin sit down with Ifeanyi to discuss the difficulties of that career change. Ifeanyi explains why he chose cloud engineering, what he was able to use from his athletic history in his new career, and how his presence on the internet got him his first job in the industry.",
    airDate: "January 29, 2025",
    packetPushersUrl: "https://packetpushers.net/podcasts/life-in-uptime/liu007-from-track-to-tech-navigating-career-change-with-resilience",
    youtubeUrl: "https://youtu.be/wCvyCbnuJmM",
    transcript: `[Kevin]
This episode is sponsored by Meter. If you're tired of juggling five vendors and six dashboards just to keep the network up, Meter delivers the full networking stack, wired, wireless, and cellular, as one integrated system. Go to meter.com slash liu to book a demo. That's m-e-t-e-r dot com slash liu. Welcome to Life at Uptime, the podcast where we talk with the people behind the technology that keeps our world connected. I'm Kevin, joined by my co-host Alexis.
In every episode, we sit down with engineers, leaders, and builders in tech to uncover the stories behind their careers, how they started, what they've learned, and where they're headed next. Our goal is simple, to help you see how far tech can take you, no matter where you start from.
[Alexis]
So, we have a very exciting guest for you guys today. We're talking to Ifani, and he stepped from the track right into the cloud. He was a decorated athlete at Kansas State, and then transitioned into DevOps and cloud engineering.
He's a trusted member of the community. He's made a lot of step-by-step guides for AWS, Terraform, and infrastructure as code tutorials. And his journey isn't just about shifting gears, it's about redefining grit, adaptability, and growth.
So, Ifani, welcome to the show.
[Ifeanyi]
Hey, thank you. Thank you. Appreciate the intro.
It's a pleasure to be here. I see you guys a lot on social media too. It's so cool to be here with y'all.
[Alexis]
Yeah. No, absolutely. I feel like it's interesting how you feel like you can get to know someone through their content.
I mean, I know we're meeting for the first time here, but I feel like I know you.
[Ifeanyi]
Yeah. Yeah. I think that's the power of social media.
I think those are the people who actually show up in the forefront. These are the people who people resonate with. Those who are authentic and show their real self, not the cookie-cutter AI-generated content people.
That's how you feel like you actually know who you're talking to before you even meet them or speak to them.
[Alexis]
Yeah. 100%.
[Kevin]
It's really cool seeing people in person for the first time after following them or interacting on social media. You see them in real life and they're exactly how you thought they'd be. You guys just immediately click.
It's a great feeling.
[Alexis]
It's like, I knew I'd like you. I knew I'd like you for a reason.
[Kevin]
Yifani, I have to say, number one, congratulations. You are the first and probably last professional athlete we will ever have on this podcast.
[Alexis]
Never say never. Never say never, Kevin.
[Ifeanyi]
Yeah. You might see a lot of... You might see others.
Actually, there's a small, very, very, very small community of professional athletes transitioning to other careers and even smaller ones transitioning to tech, which is another area which I'm trying to tap in. I don't know what I'm going to do with that. But yeah, most people have said that I've lived two lives, two different lives, because what I've done in my previous career and then what I'm doing in this career is like, dude, what you've done in your previous career could be someone's entire life.
And now what you're doing now is what other people strive for their entire career. So I think it's just been a crazy blessing.
[Kevin]
Does it actually feel like you have two lives though? Do you take what you had in your athletic career and transition it and use that stuff in your tech career? Or does it feel like a distinction where that was my past self and now I've reborn into this new tech career?
[Ifeanyi]
Yeah, that's a good question. In terms of experience, life experiences, it feels like I've had two different lives because as a pro athlete, I traveled the world. I did so much for so many years.
I've been doing this since I was 15 years old. So almost 15 years of just training at a high level, competing, and then I moved into a completely different world. However, when it comes to life skills and the mentality and the discipline and some of the things that I've gained from being an athlete, it's not that much different.
And I figured that out pretty early when I was trying to transition that a lot of the things that was engraved in me as personality and also lifestyle of being disciplined and showing up and consistency and resiliency, that's the same stuff. I just pivoted to this new career. And I think it gave me an advantage over a lot of other people who were trying to do the same thing.
Pretty quickly, I was able to understand that I could function at a high level for a long period without wavering because the capacity of resilience I had was just so high compared to other people.
[Alexis]
Could you walk us through what your journey was like? For someone who's unfamiliar with your story or who doesn't follow you?
[Ifeanyi]
Yeah. Yeah, for sure. So in high school, actually, I'm from Turks and Caicos Islands in the Caribbean.
This is where I lived. This is where I grew up for most of my grade school, high school. That's where my friends were.
And education-wise, I was always the person who did sciences like physics, chemistry, biology. I just loved doing those stuff. That just fascinated me.
But I also had an athletic ability that was just, you could not turn away from it. It was natural talent. And then from there, I ended up getting recruited from the Caribbean to go to Kansas State University.
There was a college, college coaches come down and recruit. I didn't even think that was a thing. I didn't even understand that it was possible that a school could pay for you to go to, you know, pay for your entire degree just because, just so you could run for them, right?
I was like, what? When the coach told me, I'm like, you're going to pay for my entire degree just so I run for you? And I was like, yeah, where do I sign up?
Of course. And I ended up going to Kansas. And when I got there, I was like, this is not what I thought it would be as far as the area.
I was like, what the heck is this? This is nothing like the Caribbean. It was cold, snow.
It was the first time I saw snow, but ended up going to K-State. And my first semester, I thought, or I decided to become an electrical engineer and that didn't turn out really well after the first semester was pretty horrible. Ended up with like a 1.7 GPA, which I knew quickly, like, this is not something for me. And if you asked me why I picked it, I just thought it sounded cool. It was engineering. So that's why I decided to do it.
But after that, I quickly got out of that and got into a business degree, which was management of systems, which did not, I specifically chose that because it didn't have any coding. It didn't have any real deep math or anything like that, but it was business, but it gave me some exposure to like IT or something. Cause I just love playing with computers and stuff.
But when I graduated my undergrad, I ended up doing an MBA, a master's degree in business. And then I went pro, right? So, because my athletic abilities just skyrocketed when I was in college, NCAA, D1, ended up going to national championships and then basically signed with Nike and started competing for my country also.
So I traveled the world at this time, did this for about seven years.
[Alexis]
How old were you?
[Ifeanyi]
When I went pro, I was 20, I was about 22. It's crazy. At this time, I was doing my master's degree and I went pro at that time.
When I graduated my undergrad, it was the same time I went pro. So I did that for about seven years, literally traveled the world, competed at many different championships.
[Kevin]
Can I ask a quick question here? So you went, you got your undergrad and then went pro and then while you were going pro, you also got your master's degree? Yes.
[Ifeanyi]
And I did it because the school decided to pay for that too, because of how well I represented them in my undergrad. That blew me away too. I was like, what?
[Kevin]
Even though you weren't running for them anymore, you weren't competing for them anymore. They still paid for it? Yeah.
[Ifeanyi]
They still decided to pay for it. That's a good deal. I don't care what anybody would say about K-State, that's my school.
I'll rep them forever because the athletic department decided to do that. So that was huge. But yeah, so I entered inside this world of competing for money, which was completely different from competing for a team or for college.
And that drove me to a lot of different experiences as an athlete. When you're doing something you love for money, it changes the dynamics of things. So you go to meets, you go to compete and it almost takes the joy away from it, because when you don't compete well, you're kind of like, dang, I didn't get the money that I was supposed to get.
So the joy and the excitement of doing it for the love of it kind of takes away from that. But yeah, then I decided I was going to get out of this because I was getting to the end of my career, which I was still young. People say, I think you got out of it a little bit too early, but I saw the writing on the wall to where I didn't want to retire when I was like, my legs were really broken and I was done and I was coming last.
I'm not going to bow out like that. So I decided to leave pretty much on a good high and chase something else. And that's when I decided to pivot into tech.
Took a while for me to decide what I wanted to do, but I decided to do that. And it was a two-year self-study journey, because at this time I was about seven, eight years removed from anything I did in school. And I needed to start over.
Everything I knew, anything I knew about tech, anything I even remotely understood, I had to start from scratch and started off with comp TIA certifications. And that gave me the fundamentals. And then from there, found the cloud and just started jumping straight into the cloud.
Because that was the thing that really sparked my interest. And then I drove into that. And that's the trajectory of what pushed me to go into this cloud career.
[Alexis]
I think it's really cool how you studied electrical engineering. Number one, doing any sort of technical major while you're doing any athletics in college is incredibly difficult. I had friends that were trying to do engineering majors, and then also two-a-days at the field house.
And your practices, and then you have your extra workouts you have to do on top of that, and the team dinners. And I swear, if you're a college athlete, it's like a second degree. So number one, can totally understand how hard that was.
But two, you decided, even after failing electrical engineering, to go back into a very technical career. What was that decision like?
[Ifeanyi]
Yeah. So why did I decide to go into tech? So after I was getting...
Well, when I was deciding what I was going to do for my next career, I broke down into three pillars. What did I want? Because that was the easiest way for me to figure out.
It's better to remove things what you don't want, and just focus on the things that you do want to kind of pigeonhole any career that can fall into that. So I did a Google search, literally. It was a Google search for three pillars.
Three pillars was that I needed something that had a high salary opportunity and potential, a career that had that. Number two, because I just got married, and I was thinking of my family, generation, children, and stuff like that. I needed something that's going to help me take care of this family.
And the next thing was I needed something that was flexible, because I think I was getting burned out from traveling, from just doing a lot of stuff. Even when I was a professional athlete, I was also working as an event coordinator for a sports organization. And doing that was also extremely exhausting.
And I was like, I need something that, I wouldn't say laid back, but something that can give me flexibility to want to be remote, because it was during COVID time too. I was like, oh, I see a bunch of remote roles. I was like, okay, I want something that's remote too.
And the last thing was I needed something that was challenging, because I felt like I couldn't just sit and just do a normal job that wasn't tasking mentally or physically, because I've been competing and training at the highest level for so many years. And experiencing that for so long, I needed to live life like this and not like this. I need to continue to live a life like this.
So when I did that Google search, tech literally ticked all of it, the industry of tech, which is you could get the flexibility of a remote role, high salary potential, and then it was challenging, right? Mentally, and you have to put in a lot of work, you have to show up, but okay, this looks cool. I remember when I was young, I used to play with PSPs, PlayStation Portable, and modify it and jailbreak it.
I'm like, that's the stuff that I really liked. So I'm like, okay, maybe jump into this. And that's what made me decide to pursue the tech industry.
[Alexis]
And I know we talked, I mean, obviously we talked a little bit offline before this, but we get asked, Kevin and I get asked all the time. And I feel like I ask this question every show. Should I take my CCNA?
Should I take my CCMP? What's the best certification? Where should I start?
And you didn't come out of school wanting to be a cloud engineer. You said that you took the SAC+, A+, Net+, series to kind of help you find direction. For someone who's trying to find a direction or deciding which area of tech they should go into, what would you recommend for them?
[Ifeanyi]
That's a great question. And this answer is not just based upon my experience, but this is based upon other people's experience. And what I've found really works the best is that, so most people want to manufacture their purpose or manufacture what they want to do.
So they see something that's cool on face value or somebody's doing this and they want to do it. Like me, right?
[Alexis]
They want the title, they want the degree.
[Ifeanyi]
Exactly. Like when I wanted to become an electrical engineer, I didn't have a clue what that was. It just sounded cool and I wanted the title.
But most people, I think you have to discover your path, not manufacture your path. To discover your path, that means you have to travel many paths. By traveling many paths means you have to explore.
You don't really know what's for you, what you're interested in, what you're curious about, unless you expose yourself to a base of many different things. So then you can one, pick up the things you're actually interested in, and then you can actually remove the things that you're not. Because when you try something, you go down a path and you realize, oh, this is not for me.
That's actually good information. That's good data to be like, okay, I can move that and focus on something else. So what I did when I was doing the A plus, security plus, and network plus is I was getting exposure to many different areas, trying to understand where do I fit in, in this tech thing.
So that's not the only search I got. I also did project management search. I did Prince 2.
I don't know what I was doing, but all I was doing was I was exploring different areas. And while I was doing this for maybe about seven months or seven, eight months, it was about nine months of just doing many different things, is when the path of the cloud showed up, showed up on my doorstep. I was on LinkedIn.
I was just searching other areas in tech, and I heard about this thing called the cloud. And many people would talk about it. Everybody was talking about it.
I'm like, man, what is this thing? And that's what drew my curiosity. And I dove deeper into it, and I just couldn't understand how this cloud thing works.
It just felt like it was this magical thing. I couldn't understand it. And it drew me to want to understand it.
And the deeper I looked into it was when I realized, oh, I think I have a natural curiosity and interest in this thing. Let me dive into this thing now. I have to do all this other stuff.
Let me go to this other thing. So I went into it, going through the certification route again. My first cloud cert was the Azure 900, which is crazy because all I talk about is AWS.
But I did the Azure 900, and I failed it. I failed that cert, but this is how I knew that I loved it. Because even after I failed it, I felt empowered to continue going because I was just so fired up and so driven to understand this thing.
I studied for another month, changed my learning habits, started doing more projects and doing hands-on stuff. And then after a month, I blasted that cert. My score was so high.
I don't know how the heck I failed it the first time. But after that was when I was like, okay, this is the path for me. I think I found it.
But that's after maybe a whole year of just exploring many different things. That's how I was able to find the cloud. Or I would say that the cloud found me.
[Kevin]
Before we move on, I want to dive a little deeper into how you changed your study habits because I get a lot of questions of certifications. What is the best way to study and that kind of stuff? What did you exactly change between failing it and passing it with flying colors?
Or what was the biggest thing that you think made the biggest difference?
[Ifeanyi]
Yeah, at the first time when I was studying it, I think I was also in the back of my mind. I was also hearing that certifications help you get jobs during that time. So in my mind, I was like, okay, let me just get some interest in this thing and just pass it.
It was a very face value, high level studying. I wasn't really diving into concepts. I wasn't really doing any hands-on things.
I was just watching videos and like, okay, this sounds good. Memorizing like theology and methods and concepts, but not understanding that when you take the exam, the questions that that's coming up, they really question you based off of, do you have real deep understanding? Have you actually exposed yourself to actually configuring things in the council?
And when I went into the exam, I was like, oh shoot, this is not, this is tough. Did I just accent cookie cutter? What does this mean?
What does this mean? No, the actual situational questions, right? Situational questions, the only way you can be able to understand and answer it is if you've actually been put in that situation to be able to achieve that task.
And that was the main reason why I failed it. So the second time I went, I was like, oh, you actually have to do some work and do some engineering stuff and do some hands-on work. And that's what helped me go deeper into the concepts and literally almost tattoo the concepts in my heart where I understand this.
Like I understand this really well. Like this isn't, this isn't anything that's tough once you start actually doing this stuff, right? It makes it a lot easier for you to understand because I've done it.
I'm not just trying to remember my brain when I memorized.
[Kevin]
So did you use a virtual labs and like practical applications of whatever topic you were studying?
[Ifeanyi]
Correct. Yeah. I started, um, two things I started doing.
I started doing a lot of labs and I started writing about the labs I was doing. So when I would do a lab, I would then try to put into writing the understanding of what I just learned, but also put into my own words. And I hope, I think that helped take me to the next level of understanding much more, much more deeper.
[Kevin]
Kind of synthesize, you know, what you, the application of what you did into your own thoughts. I love that. Yeah.
I'm going to steal that one. I want to add that to my, to my armor, my armor. So add it to my what?
[Alexis]
Your armoire? How?
[Kevin]
I don't know why I'm going to put it in my coat closet. All right. Sometimes I say weird random things.
I don't know.
[Alexis]
Kevin, you're dating yourself again. Every episode I find.
[Kevin]
You point out, God, I'm not going to get away from it. I'm going to like be that. What's that?
Uh, that meme, like what's up, fellow kids. I'm going to dress up like that one day.
[Alexis]
Dress up like that for Halloween. Just be a, the wizard. Anyways, after you got all of these certifications, you obviously had to get a job.
And I know you're from Turks and Caicos, you're international. This was during COVID. It was honestly very hard to get hired.
Um, what was that like? How did you make the jump from actually taking the certification to working in industry?
[Ifeanyi]
Yeah, that's, that's a really good question. So to all my, uh, international people, this is a question I get a lot because I actually landed my job, my first role, um, while I was still based in Turks and Caicos in this small Island of 50,000 people. And, um, the number one question I had was who the heck is going to hire someone in this small country?
Do I have to leave? Do I have to stay here? And at first, you know, you want to, um, try out what you have around you.
So locally I tried to look for, um, you know, roles in cloud, anything that was going to give me experience or exposure in cloud. So I remember I went to, I talked around, you know, asked about where is the most, which companies, the most technology advanced company. And I ended up going to this company that was an energy company and it was one of the biggest in Turks and Caicos.
Went there, did an interview and they asked me, they saw the amount of cloud certifications I had. And yes, I asked them like, Hey, like, you know, you guys looking to go into cloud or like, what is your experience with cloud? And, you know, they basically told me that they're going, they're looking into cloud next five years.
And so that was 2021, five years of 2036. So, so, so my head of like, there's no way, like if this is the most technologically advanced company and they're looking in five years from now, I'm like, okay, I instantly found out, or I recently got, got to the realization that what I want to achieve right now is bigger than my country. It's bigger than my environment.
Right. I have to look outside elsewhere for me to achieve this goal. And, um, that was tough, you know, because it was like a miracle had to be done for me to be able to, I didn't, I didn't have a clue what I was going to do.
Am I going to leave Turks and Caicos and move back to USA? Am I going to move to somewhere else in the world? The, the best, the, the, the best, um, opportunity would have been remote, right.
Which is one of the, um, reasons why I went into tech, right. Cause I wanted something that was flexible enough, but even at that time, fully global remotes was still a dime a dozen. They want, they want to be a lot and the, the, um, the competition was so high to be able to land a role like that.
Right. But, um, I just knew that for me to be able to even have a chance, I needed people to know who I was, how people in Turks going to know this little boy in Turks and Caicos, how are they going to hear about me? And I started to post about myself.
I started to go on social media. I went on Twitter. I went on LinkedIn.
I started joining Twitter spaces. I started joining communities. This is all on the internet, right?
I didn't step foot. I didn't go to any like in-person tech community. They didn't have any of those like impersonal tech meetups in Turks and Caicos.
That was non-existent. Right. So I had to do everything remotely, virtually.
So, um, uh, I started putting a lot of my effort more on visibility and talking about my story and what I was doing and what I was learning and also sharing my, um, my opinions and my feedback on different resources I've learned that I've shared with other people. And I started realizing that, um, I thought I was so far behind, but I realized there's also a lot of people who I was either one step or two steps ahead of. And that started growing my, my, um, my social media presence because people are now looking at me of, Oh, this person is literally just one step ahead of me.
Let me start following them and asking them for feedback. And I started mentoring other people. And it was so weird.
Cause I'm like, dude, I hardly know anything.
[Alexis]
Like why are you asking me for I could applaud. I could applaud right now. I cause I think that's the most important thing.
You, when you look at the grand scheme of things, it's really easy to feel like you're behind because you're always looking ahead of yourself, but it's so easy to forget that there's people who are just one or two steps behind you, where if you're sharing, like what you're doing as you're doing it, it's so, so helpful to them.
[Ifeanyi]
Yeah. It, it almost creates a path for them to try and, um, honestly follow exactly, but they can use that as a template. Okay.
This person is doing this. And, um, I say, I also think that my story was, was, was, was really compelling. Um, transition from a pro athlete to cloud.
Like I didn't know I was going to pull it off, but from the beginning I started posting about it.
[Alexis]
So also people, people want to see a success story. Like if you're constantly posting about your goals and they can see that like you're putting in the effort and you're driving towards something, it's like everyone always wants a happy ending to a movie. And if they can feel like they had a small part of your success or they were to help, they were able to help you on your journey.
A lot of people get like some sort of personal satisfaction from that, even if it's just interacting with your content. So they, they feel like they know you as you're going along.
[Ifeanyi]
Yeah. Um, I definitely think that's exactly what happened because I started realizing that people who weren't even a tech would start following me just because they saw the story, just because they were like, Oh, this story is so inspiring. Um, I'm going to follow this person just to see if they're actually going to accomplish this thing.
They didn't know anything about tech. They're just like, let me see this person's actually going to accomplish this thing. And then some of them would even, um, like refer me to other people in tech.
Like, Hey, I have this friend, I'm not in tech, but I see what you're trying to do, go and contact them. And I just started getting referrals to other people. And I'm not necessarily referrals to jobs, but just to talk to someone.
So people are connecting me to other people and connecting me to other people. And, um, I started realizing that I started becoming in the middle to where people were like five, 10 years of experience in tech, started mentoring me. And then I started mentoring other people who were a few steps behind me.
And that just like rolled, it was just like a, a, basically a boulder rolling down the Hill. And it just continued to like torpedo.
[Alexis]
Yeah. And you need, you need one. Yes.
Like one of those connections is the one that has to work out for you. I also wanted to, uh, I was going to say, I wanted to double click on, but then I was like, that sounds so corporate. Um, can we, can we go, what does that mean?
[Kevin]
I've never heard that before. Like double click, no double click. Like I know what it means on a computer, but like in corporate tech, what does that mean?
[Alexis]
Oh, like I want to like dive deeper, talk more about that.
[Kevin]
Open it up. Yeah. You know, when you double click on your computer, I've never heard that before.
[Alexis]
Yeah. I just, I wanted, I wanted to, uh, double click on just the realization you had that, wow, I actually have to leave my country. Cause I've been in a, I've been in a position where I've had to move or I realized I've had to pivot, but to realize like you have to leave, not just the state, not just the city, not just the industry, your entire country, behind to move into this goal.
Can we talk like, can we talk about how monumental that was? Was the, and was that just like a light bulb moment or did it kind of come in and trickles?
[Ifeanyi]
It was, it was a light bulb moment, but it was also, it was defeating at the beginning. I was like, man, I really want to like, I'm really pushing towards, towards this thing, but I'm realizing that it's bigger than where I'm at. Right.
It's, I can't achieve this thing here. And, um, I had two decisions either to give up or settle like, Hey, let me just get some, find some other role here locally, because that thing is just too big of a, of a dream or lean in on it and be like, Hey, you know, I'm going to risk and sacrifice a lot and do what I can and see what's going to come out of it. And I chose the latter.
Right. Um, because, uh, I'm a person who, who have a lot of faith and also, uh, think big ideas. And I, I risk a lot, not everything comes to pass, but I'm someone who, who, who is like, I'm going to go big.
And I decided to double click on him. Like, like what you said, I'm like, I'm going to do this and I'm going to put my, put my all in it. And at the time, all it, everybody thought I was crazy locally because what I was doing, people were, I was posting about it.
I was posting on my Instagram, posting my LinkedIn. And my friends started to see that withdraw from them a little bit to like go and study or go and learn about something. Right.
And they started realizing that they were asking me about it. And I couldn't really explain to them because I didn't have the tangible, um, I didn't have tangible evidence that I was going to achieve this thing. So it was hard to put it into words, to tell them what I was about, what I was trying to do.
But I'll just tell them that, you know, I'm working on something big, I'm working on something. Well, also most people don't know what the cloud is. Exactly.
Like, I was like, I'm not about to sit down and explain this thing to you. Cause y'all definitely going to think you already think I'm crazy. You're going to think I'm insane.
[Alexis]
The cloud, but not the one in the sky, the one that's made out of like computers.
[Ifeanyi]
Exactly. And, um, but they knew I was studying tech by myself and doing stuff. And at that point, they thought it was, it didn't make any sense.
And, um, even at the, I'll tell you the truth, even when I was going through it, I also thought, Hey, this doesn't really make any sense, but I just felt something impressed in me that just keep going, just keep doing what you're doing. Something is going to happen. And, um, what had happened was at that point, I was trying to go back to USA.
So I was trying to get roles. I was going to get me like a, you know, H1B visa, which is huge thing. That's on the news right now.
This is crazy back then. It was extremely tough because it was doing COVID companies and have, you know, the, the, the financial, um, they weren't willing to like really the money and the, the, the, the investment and the capital to be able to get entry level H1B person to come in here. I was like, no, they're not going to do that.
So people weren't open to do that. Um, so that was tough. I was trying to get an opportunity, hoping for some miracle that somebody just gives me a chance.
Um, but then I started to pivot a little bit. I was like, okay, let me stop targeting just USA and start targeting the world. So I started going a lot bigger.
I started getting people from UK, from Europe. I started networking with people there. I started following them.
I started connecting with them on LinkedIn. And it was about a month after my, uh, putting efforts into really networking people from Europe and UK. When I got a DM in my LinkedIn, which basically said, I read it, I think I would know.
So I was in a car and someone was driving. I just read it like flippantly on my phone and I said, Hey, um, I see the, uh, cause I heard a blog, it was a blog on, on functions and, and, um, basically serverless blog I did. And I posted it and somebody responded to it and basically said, Hey, I really liked this blog that you wrote.
The things that you're doing in this blog is exactly what we're doing in our company. And I think you'd be a great person to add to our cloud team. And when I read it, I was like, Hmm, who is this?
Cause at that time people were messaging me with some stuff and some of them weren't really real. So I'm like, is this a, is this a recruiter? Is this someone who works at the company?
And when I looked at it and I clicked on the person's, um, profile, it was the CEO of the company. I was like, hold up. I was in the car.
I was like, I was like, there is no way the CEO of a company is going to message me. So, so many things was running my mind. Like how does the CEO know what they're doing technically?
Like, is the CEO supposed to be like the high level? Like, like how does he know? And I realized it was a startup and he was very close to the technology.
Yes. He was very close to me, understood what they were trying to do. And I was like, okay, cool.
I was so excited. I was like, I can't do an interview right now, but maybe sometime maybe the next hour or so. He's like, no, no, no, no.
We can do it next week. Like we're prepared. This is on a Friday too.
I was like, I was so excited. So I was like, okay, yeah, let's do another one. Let's do an interview next week.
The interview came, um, it wasn't a technical interview. It was more of a, are you a good fit? And it blew my mind because even after the interview, I asked them, how come you guys didn't ask me like technical stuff?
And it was like, we saw the work that you've done. We saw all the gloves that you put out. We know you're technically sound.
We know the things that you can do. We don't think you're an expert, but we know one you're driven, you're passionate. You, you, you actually like this stuff.
So once you come in, we know that you can, um, we can train you to be the person who you want to be. And I was like, wow, dude, that's literally insane. Yeah, it was crazy.
[Kevin]
All right. Quick pause because this episode is sponsored by meter. If you've ever managed a network built from five vendors, six dashboards, and a bunch of contracts that no one fully understands, you know, how fast that turns into chaos.
[Alexis]
What usually gets overlooked is the pressure that puts on the people running it. IT leaders need predictability, engineers need control and visibility, and most stacks just weren't designed for that.
[Kevin]
That's where meter's model is different. They deliver the entire networking stack, wired, wireless, and cellular as one integrated system. They design the hardware, write the firmware, build the software, manage deployment, and run support.
One platform, one partner.
[Alexis]
And that means fewer handoffs, fewer tools, and clearer ownership. It scales from branch offices and warehouses all the way to large campuses and data centers without turning network operations into full-time vendor management.
[Kevin]
If you care about uptime, accountability, and not being the middleman when things break, this is worth a look.
[Alexis]
Thanks to meter for sponsoring this episode. You can go to meter.com slash liu to book a demo now.
[Kevin]
That's m-e-t-e-r dot com slash liu to demo. Now back to the episode.
[Alexis]
And I feel like there's a lot of technical interviews that go that way too. Because a big part is, are you a fit for the team? And people overlook that.
The certifications can't show your personality. Your resume can't show your personality. The way you write a blog or show up on a podcast can totally show your personality.
[Ifeanyi]
Yep. That's when I was writing my blogs. What I tell all other people also is that the blog is your canvas to show who you are and what you know, but not so necessarily like technical, but it's like a canvas and you have to like put your personality in there.
Like you don't want to just put step one, step two, step three. Like write what you went through, the troubleshooting, how you fixed it, and then add templates of who you are in it. It differentiates your blog from somebody else who's just writing like steps from one to two, like actually putting personal flavor into it.
And I think that makes a big difference when someone reads someone else's blog.
[Alexis]
Yeah. Because anyone, I mean, anyone can make a video about basic technology or basic troubleshooting, but it wasn't written by you with how you approached it and what you were thinking when you went through it. And I think so often, again, someone's two steps behind you just because someone already made a video on, I don't know, connecting VPCs, right?
It wasn't done by you. And they might resonate with your perspective and your thought process more than anything else that's already out there.
[Ifeanyi]
Yeah. Yeah. Each for everybody has their own personality, their own personal stories.
And a lot of people think they don't have content to share. And they always ask me, how do you share content? You have unlimited content.
Every single day you live and breathe, you experience things, and that's enough to share with people and it's going to resonate.
[Alexis]
100%. Can we talk a little bit more about, I guess, your mindset through all of this? Um, do you feel you mentioned before, um, you're very resilient.
You went through a lot of hard training when you were an athlete. Do you feel like a lot of that carried over now that, you know, I mean, let's be real. We're all working remote jobs, sitting at a desk right now.
Um, do you feel like a lot of that mindset or mentality has carried over or still applies, even though you're not doing something that's physically demanding?
[Ifeanyi]
Yeah. Um, so the hard part about tech, especially those who are transitioning or in general, you can have 10 years of experience is that, uh, whenever you're learning something new, um, you really don't see the, the, the fruits of that labor like months after. Right.
So the hardest part for those who are just starting or just learning something is when they first begin, they don't see the, the, the immediate like results. So they stop or they give up like, man, this isn't good enough or stuff like that. But I've learned as an athlete that, that discipline of understanding that, um, you have to be able to sacrifice now for the long-term results because as a pro athlete, most people don't realize this Olympics is every four years and world championships every two years.
Most people think Olympians prepare for the Olympics the year of, but we actually prepare for the Olympics four years before. So that mentality of understanding that we need to train today for four year goal that has been drilled in me for years. So when I got into tech and I started like starting my journey, I understood quickly that people didn't understand this fundamental thing that you have to put into work that has to be a journey and you have to focus on what do you do today to help you six months, seven months in advance.
And how that mentality of understanding that is what kept me going and kept me resilient. And most people just don't know how to like really put that into perspective, knowing that, you know, the work that you put today may not show up tomorrow or next week, but it might be, it might be a two year, uh, goal. It might be a two year journey, but you have to be willing to sacrifice that now for that greater, greater goal.
[Alexis]
How did, what comes to mind is how did you balance that with also, and this is something I struggled with too, with the flexibility of being able to pivot or change. So when you first got into cloud, you didn't know you wanted to be a cloud engineer. You were taking these certifications.
You spent seven months taking certifications without knowing really which direction you should go into, whether that would be cloud data center, security, cybersecurity, maybe networking, maybe there's all these different directions. So how do you balance? And again, this is, this is for me too.
Um, cause I feel like I'm also in the middle of the pivot at the moment. Um, but having that big five year, 10 year plan of overall where you want to be down to, and still having the flexibility to pivot as you see fit. And do you know if you're throwing in the towel early, right?
Is this something like, am I actually not interested in this? I'm going to give up on it or no, no, no. I should grind through because it contributes to that broader goal.
[Ifeanyi]
Yeah. Whoa. That's, that's, that's a, that's a heavy.
[Alexis]
I told you it's for, I told you it's for me too. It's something I've been thinking a lot about.
[Ifeanyi]
No, it's deep because I think that's something that we all are managing and maneuvering about. But I'm thinking back then and even applying it to now, because, um, personally, I don't know if cloud is going to be something I'm going to be in forever. I might still be something I stay in, but my pivot into, um, AI or, um, actually very interested right now in AI education, but yeah, we talked about that.
Um, but I think when you, so I will start with a goal and then work backwards. Um, this, the earlier when I was starting, I don't think I had that, that structure to where, Hey, this is the goal. And you have to kind of like work backwards of what you want to do.
But now I'm understanding that if you have a main goal, you work backwards and, um, you look at the possible things that you want to, that you think is actually going to attribute to achieving that goal. And to me, you don't necessarily have to hit all of those, but I think, I think you're not going to figure everything out on, sorry, you have to figure stuff out on the way, which is you just have to take the first step in something that you're interested in. And you're curious about, which to me should be the driving force.
Don't jump into something that you're not necessarily interested in. Um, unless it's actually something that's going to help you, um, achieve that thing that you want to, because we're not going to be interested inside everything. Right.
But once you work backwards and be like, okay, this is what I want to do. And to do that, I do this, this, and this, then, um, once you map that out, you can stay around the vicinity of those things, but you might pivot. And you have a little bit okay with pivoting.
Yeah. Like you can't pivot too much, but you have to be okay with pivoting a little bit. So when I was doing all those certifications, um, I was getting some information of, of, okay, what are the, the exposure, exposure and experience and fundamental stuff that you should get.
And that's what made me get A plus security plus, because I understood, oh, these are the things that I need to understand. What is the thing that's actually going to help me get it? And it was the certs that started me there.
But, um, I think that if you don't have a goal, it's harder for you to find that thing. So when I was getting into tech, I didn't have a goal of getting into cloud. And during those times, I think you just explore strictly your interest and just keep going to things.
But if you do have a goal, you have to be able to, to break it down, start from the, from the beginning, start from the end, and then look at like what other people have done and just ask them like, Hey, what did you do? That has been like, I think my secret weapon, which is just talking to people and who's been in the job, who's doing it and ask them how they did it. I think that has actually collapsed a five-year plan for me for like two years, because I had a four-year plan to end up working at AWS, which is where I work right now.
And since I joined, uh, since I started my cloud career, it took me about 1.7 years to, from zero experience to land a role at AWS because of the many people who I spoke to. And it helped collapse that goal of I had a five-year goal to enter AWS, but it ended up being less than two years. So many people in the industry and in the roles that I wanted to.
[Alexis]
It's part of the reason we started this podcast was to just help expose people to new knowledge and information. And I think the other thing is that, and I'm sure you experienced this when you were networking on LinkedIn. Um, a lot of people gravitate towards asking people for help who are very public asking you, me, Kevin, you know, other podcast hosts or content creators.
What do you think about this? What do you think about that? There's so many people who hold the same job or have the same expertise who just aren't public and would be thrilled to give you their advice or answer their question.
You just have to find them.
[Ifeanyi]
Yeah. It's, you know, I go with numbers, right? So I'm a person who, um, if I want information about a specific role or a specific thing, I literally go on LinkedIn.
I start filtering people, either in my area, in the same job, in the same company. And I get the same message and I send it to about 50 people.
[Alexis]
One of them will respond.
[Ifeanyi]
Listen, one of them. So I have like a, out of 50 people, about 20 will respond. 10 would actually be, um, uh, like actual back and forth communication.
About four of them will actually be an ally. That's what I've realized. If you sent about 50, you're going to get like four people who actually be actively trying to help you and, and, and invest inside you.
And I've been doing that. I've just been rinsing, repeat any information I need. I send it to about 40 people.
And then I ended up with four people in this specific thing who I can always reach out to.
[Alexis]
It's amazing. And that's the power of virtual networking too. We've talked, we've talked a bit about going to NOGs and going to things in person, which is incredible.
And I do think they're great resources. And if there's one near you, it's a great option. But if you're like, in your case, you were in Turks and Caicos and there's no networking group or no technology clubs, you can join, use every tool at your disposal.
[Ifeanyi]
Yeah. Yeah. I think I'm very bullish on, on, uh, networking on online just because I think that's where, that's where I grew up on, which is as far as being in Turks and Caicos, trying to get that, that role.
That was my initial exposure. And I've been using that a lot. Um, I tried to go to some in-person ones, which I think are great.
Uh, I didn't really understand how important in-person, uh, meetups were until I went to AWS reInvent.
[Alexis]
Oh yeah.
[Ifeanyi]
First of all, it was my first in-person. It was my first meet, like first conference ever. And people said, Oh, you're going to be spoiled because this is like the biggest cloud conference in the world.
Like this shouldn't have been your first one. When I went there, I was like, Oh, I see now why in-person meets the amount of people who I met and exposed. I was like, yo, this is insane.
[Alexis]
I thought I knew conferences and then I went to reInvent and I was like, what is this? What is this?
[Ifeanyi]
Um, but I have a question for y'all because this, I mean, I'm, I'm still new to the tech career. So I'm still like, um, strategically trying to map my career. I've really only been here for like two, two years, something.
And I'm thinking of people who have like 10 years of experience, or at least five years of experience. So I'm always thinking two to three years in advance of what I want to do, because I understand that you can't plan for a goal next year because you have, you have to start like, especially if you know what the goal is in advance, you have to start like three years before, like start strategically putting things into place. And, um, the earlier you can, the better.
So I think maybe it might be a question that you asked, uh, um, which is how do you steer your career to like what's next?
[Alexis]
Hmm. I think Kevin has slightly more career experience than me.
[Kevin]
Slightly.
[Alexis]
I can jerk. I can take a stab at it. And then I want Kevin's opinion to selfishly.
Um, for me, it's been taking every open opportunity. So working really hard at trying to Excel at what's being put in front of you, finding some stretch goals that you're passionate about. And so for me, I was a Cisco SE or a solutions engineer, sales engineer, whatever you want to call it.
And I was doing a really good job at that. And then I found making content. I was like, wow, I really also like doing this thing.
I'm going to make this my stretch goal and do this on the side. And what ended up happening is that I got an opportunity to do. It's called evangelism, right?
Technical evangelism, or basically like a developer advocate role at another company where now I do content and the public speaking and the community building and all of that full time. And that to me came from doing my base job and then finding a stretch goal that I was really, really passionate about. And I think especially in technology, there's so many jobs and also so many companies, whether you're looking at a big company, a small company, a startup, it could really be choose your own adventure.
And if you are on a path or pursuing a goal or a stretch goal or an interest, you could almost custom create your job depending on who you met. Like you said, that CEO reached out to you and said, I love everything that you're doing. This blog you just wrote, we need to hire someone to do exactly that.
I had the same experience. I also got a message from the CEO and he was like, I'm going to let you write your own job rec, whatever you want to do, send it over and I'll sign it. And if you're out there...
And that's, I mean, both of our examples have to do with content creation, but I've heard stories like that, even internal to Cisco, where people took on stretch projects and it had nothing to do with content. They just did a really good job and it turned into a full time role for them. And so I think there's all sorts of opportunities out there that can be aligned with your interests.
And even just meeting different people and exposing yourself to jobs that you don't know exist. We talked to AJ Murray last week. He's a demo engineer.
Was that his title? Kevin, did I get it right?
[Kevin]
Yep. Demo engineer.
[Alexis]
Yeah. He's a demo engineer. And every company has different jobs and different titles, and they're all slightly different depending on what the needs of the business are.
And so if you're just putting yourself out there and doing things that you like, you enjoy, and you're passionate about, eventually the two will kind of collide.
[Alexis]
I love that.
[Alexis]
Not that you shouldn't have a bigger goal to drive towards, but in my experience, it's been more, let me focus on doing this thing really good. And then whatever opportunities come out of that, then I have options.
[Kevin]
Yeah. I would say, Yifani already kind of honed in on what I do. And that is, I let my curiosity drive me.
Whatever I'm interested in, whatever I'm curious about, I dig into it a little bit and see if it's something that is as good as I think it is. Where you don't know what you don't know, but you could have like, okay, what does this thing do? How does this thing work?
You start slowly getting introduced to it via certification or YouTube videos or whatever. And if my curiosity grows from there, I know that I'm interested in it. I know that that's something that will at least in the near future, the next couple of years, keep me interested.
I have to be interested in what I'm doing. The people who have one job and they've been a network engineer for 20 years at one business, I can't relate to that because I get so bored doing the same stuff over and over again. And I know technology changes, the network changes, but the technology, the underlying technology, if you're a route switch guy and you've been doing route switch for 20 years, I could not handle it.
I need something different just to change it up. And so I always have to strive to what, not necessarily what the next big thing is, because I know cloud and then now AI is the next big thing, but it doesn't have to be the next big thing to be a good career. It can be something as simple as for me right now, I'm getting deeper into wireless because the wireless and the physics behind it, I find it really interesting.
And that's an old technology that's been around for 20 years, but that career is still viable. You don't have to have the newest, greatest thing coming out of college. You don't have to do cybersecurity or cloud or AI.
You can just be a normal, I'll say normal in quotation marks because the old technology, the old career is still viable.
[Alexis]
Is there a normal engineer? Do those exist?
[Kevin]
No, we're all, we're, I mean, personally, we're all weird. We're all, we all got quirks. You can't work in technology and be sane.
Either you start out crazy or you end up being crazy. But yeah, I let my PRC drive me.
[Ifeanyi]
I love those. I like those answers. Yeah, I'm definitely going to draw a lot from that.
Because one thing I do realize is, like the stuff I do on social media, like Alexa said, that's my interest. And I do believe that some sort of evangelism advocacy is my future. And I'm just going to continue doing what I'm doing on socials and just doing what I'm passionate about along with my role in and see where it goes with your career, be internally at AWS or any somewhere else.
[Alexis]
Yeah, there's options out there. And again, evangelism developer advocacy, whatever tech or what's the other word for it? Uh, Oh, field field.
No, no, no, no. Kevin. Almost like a field CTO role too.
They're all very, they're all very, very similar. Where you sit in between the product teams, the customers, the sales teams, the community, and you're almost like a go between to help everyone. They're becoming much more popular.
[Kevin]
Yeah. And I want to say, like, if there's any engineers listening who might be interested in content creation, I think engineers make great content creators because we approach things logically and we are very good at taking what's working and digging into that and throwing away what's not working. It's like a troubleshooting, right?
I'm troubleshooting an issue at work. I try a couple of things. They don't work.
I try something else that works. Okay. Let's keep doing that.
And that's what content creation is. It's discovering your voice, discovering, you know, what resonates with people and troubleshooting it. And so I think engineers make one of the best content creators out there.
So if you're, if you're thinking about doing it, just do it. Just start. Yeah.
[Alexis]
Also keep in mind, if you have been with us for the past five episodes, we picked guests that we knew were very, very talkative and most of them also create content. So if we've talked a lot about creating content, that's probably why you don't have to create content. I think it's a great option, but later on in the show, when Kevin and I get better at podcasting, we will find some guests who do not do content.
We can have, we can have some different takes, but I did, I do just, I do just want to make that distinction. And a lot of people we've interviewed are public in some way.
[Kevin]
Public, but you can create content and have it not be public either. Like we're all, we're all content creators. We all put our work out there.
[Alexis]
That's like saying everyone works in sales.
[Kevin]
It is, but it is true.
[Alexis]
No matter what job you have, you work in sales.
[Kevin]
I mean, to an extent, it's true. We're all content creators. Like what I'm saying is like the, the, the practical things you get out of content creator, you can get out of your own workplace too.
If you're, you know, creating internal documentation, if you're sharing like whatever, you can create an internal blog, even that kind of like, it doesn't have to be public if you're don't like being public. But I think we all create some kind of product out there and that we can benefit from the practices of improving your craft. That's all I'm saying.
[Alexis]
That's fair. That's fair. I just, I know a lot of people get intimidated when you use the word content creation.
So I wanted a caveat.
[Ifeanyi]
I think you're a whole class on content creation, not even how to create content, but the mentality of understanding, um, I want to say how easy it is to create content, but where you can draw content from every single day, which a lot of people don't really understand like how they, how they can do it.
[Alexis]
Or also when you get into a filter of like, is this a good thing to represent my brand? Do I want people to publicly perceive me this way? Or is this just oversharing?
[Alexis]
Yeah.
[Alexis]
Which lately is a line I have been telling. So it's fine. Anyways.
[Kevin]
All right. If any last question of the episode, if you could meet yourself, you know, five years ago, what advice would you give yourself coming up in technology?
[Ifeanyi]
Um, I would say continue on the path that you're going. Um, you don't have a clue, uh, the insane amount of places you're about to go, the rooms you're about to be in the people who you're about to meet. It may seem impossible right now, but keep the faith and continue to make the sacrifices and, um, keep putting yourself out there.
Keep looking crazy. Keep looking insane. At the end of the day, you're going to have the last laugh.
[Alexis]
Hey, love it. Well, if I need, thank you so much for joining us. Um, that's it for this episode of life and uptime huge.
Thank you for sharing your journey. And thanks to all of our listeners for listening. If you enjoyed this conversation, be sure to follow this show.
So you never miss an episode. And if today's story gave you something to think about, feel free to share it with a friend or colleague who might need it. So until next time, keep learning, keep building and keep your uptime high.`,
  },
  {
    episodeNumber: "008",
    slug: "ep-008-breaking-barriers-thriving-as-a-woman-in-tech",
    title: "LIU008:  Breaking Barriers: Thriving as a Woman in Tech",
    guest: "Melissa Brooks",
    guestTitle: "Senior Cloud Engineer",
    guestCompany: "Aritzia",
    guestLinkedIn: "https://www.linkedin.com/in/melissa-brooks-6b88a49a/",
    description: "Kevin and Alexis sit down with Melissa Brooks, a Senior Cloud Engineer at Aritzia, to discuss how she went from being a “terrible waitress” to going back to school for a diploma in network security. They explore how she used a strategic, “reverse engineered” approach to goal setting to land on a career in tech. Melissa shares her personal experiences in school, working 18 hour days to achieve her goals, the challenges of being a woman in tech, and the importance of a strong work ethic regardless of your career path.",
    airDate: "February 12, 2026",
    packetPushersUrl: "https://packetpushers.net/podcasts/life-in-uptime/liu008-breaking-barriers-thriving-as-a-woman-in-tech",
    youtubeUrl: "https://youtu.be/_TpFOLZqv8k",
    transcript: `[Kevin]
Welcome to Life in Uptime, the podcast where we talk with the people behind the technology that keeps our world connected. I'm Kevin, joined by my co-host Alexis. In every episode, we sit down with engineers, leaders, and builders in tech to uncover the stories behind their career, how they started, what they've learned, and where they're headed next.
Our goal is simple, to help you see how far tech can take you, no matter where you start from.
[Alexis]
So we have a great episode lined up for y'all today. I am so excited to welcome Melissa Brooks, who is also the first female on our podcast. Now, Melissa had a super, super interesting journey getting into technology, and she is currently a senior cloud engineer at Aritzia.
For all the girls listening, I know you know how big of a deal that is. For all the men listening, I don't expect you to know who or what Aritzia is, but it's fine. Today, we're going to be talking about goal-setting and making sacrifices for things that you truly want, and also being a woman in IT.
So, Melissa, welcome to the show. Thanks so much for having me. I'm so excited to finally be doing this.
Yeah. So to get us started, can you walk us through how did you get into tech? What was your first experience like?
[Melissa]
Oh, gosh. Well, my first experience was building my page on Nexopia, which I think most people in America use MySpace, but we built our HTML pages on Nexopia. But no, my journey to an actual career in IT was very roundabout.
I always say, like, I dropped out of university, I dropped out of college, I tried being a waitress, was terrible at it, and I had to figure something out. So at 22, I went back to school to a small private college and did a diploma in network security and worked my way through the ranks to here. Was it hard?
[Alexis]
Oh, go ahead, Kevin.
[Kevin]
I was going to say, but one of the questions I always ask people is, was technology something that you sought out and wanted to do, that you were passionate about it, or was it something that was a good idea on paper? You know, I had all the benefits, all the pluses. And, you know, I feel like people either go one or the other, and neither one's a bad thing, but just to get an idea of, like, where your mind was.
[Melissa]
I was just really broke, Kevin, and I had to do something.
[Kevin]
Okay, that's a legit answer. That is a legit answer.
[Melissa]
I mean, it was a really long journey, but, and I mean, we can certainly get into that, but the moment when I decided, okay, I'm going to do this diploma in network security was, I did do research. I mean, at this time, like I said, I'd gone to a four-year university. I went for about six months, didn't work out.
A lot of my friends were, you know, waitressing or working in nightclubs, and so, and they were making really good money, and so I just fell into that and didn't think maybe I'd have to go back to school until, and I mean, that's the truth. It wasn't working out for me. I was not a good waitress, and I, you know, I'd been fired from a lot of really, really odd jobs, and by the time I was 22, I realized, like, I have to do something.
Like, I'm just so sick of being broke, so I went back to, I did go back to the local community college, and I took a bunch of electives because I had no idea what I wanted to do, and I was just trying to figure it out. I took, you know, anthropology, economics, and I took introduction to computer science, and there's a whole story there, but I ended up just really loving it, and my instructor there happened to be this really cool chick. Her and I would chat, and she encouraged me one day.
She says, Melissa, if you really don't know what you want to do for a career, you should consider this, and one of the things I considered that Alexis and I had talked about because you post a lot about this was, I mean, this was back in 2012, 2013, so well before everybody was talking about remote work, but I knew, so I didn't know about remote work, but I knew I wanted to travel, and so while some of my friends, you know, had maybe gone to do a nursing or a career or something like that, I knew it wasn't transferable.
I wanted something I could do from all over the world. Not thinking remote work. I was thinking like getting a job in a different country or getting a job elsewhere, and I, you know, in researching computers speak the same language everywhere you go, and I happened to enjoy that intro to computer science program, so I did it.
[Alexis]
If I could back up a little, you said you went back to school at 22. What was that like? Because looking back, like I look at, you know, 21, 22-year-olds now, and I'm like, oh my god, you guys are babies, but I remember being in college when I was 18, and if you were also not 18, right, if you were 20 or 21 or 22, you were like the old kid in class, right?
What was that? Can you just talk me through what that was like for you, or if that impacted your choice at all to go back?
[Melissa]
Yeah, I mean it definitely is, I think anybody who's been a mature student can attest to the fact that it's a little bit, you have to kind of swallow your ego a little bit when everybody else is fresh out of high school, and you've kind of been beaten down in the world a little bit already, and, but the great thing, like the college I went to, I think we see this a lot in the small private colleges, is it's a lot of mature students, so in my class it was a mix of people coming right out of high school, and by the end of it, I was with the people who left, I was the oldest one, but when I, you know, it wasn't just the fact that I was the oldest person, it was the fact that I was also the only female, and I was also the only person who didn't look like the guys who typically go into IT.
I was surrounded by guys who knew a lot about computers, who had played video games their whole lives and knew what a server was. I didn't know what a server was, I'd never used remote desktop. The first time they said log in to your server, and I logged into a computer that wasn't the computer in front of me, my mind was blown, and that was more, that was harder than being the 22-year-old, but I always say, like, literally, like the rent was due, you guys, and I'd already used up my student loans going elsewhere, so this was my last shot, so you just have to swallow that and stay focused.
[Kevin]
Interesting. You mentioned that you had a goal where you know you want to travel, right? And what I find interesting is that you didn't start out with, like, a goal of, like, I want this job, I want to become a network engineer, I want to become a programmer, I want to be a cloud architect.
It was reversed, almost, where you're like, I want my life to look this way, this is what my lifestyle to be, how do I get there? I find that really interesting. What was your process like?
Did you go through and, like, you know, a to-do list and be like, or pros and cons, or some kind of organization where you're like, okay, I want my vision board to look like this, how can I get there, what kind of jobs can I get, or was it more just like, you know, just figuring it out as you went?
[Melissa]
You know, at the time, today, I'm much, much, much more intentional about my goals, and I've refined the process a lot, and I'm still working on it. I didn't realize that's what I was doing at 22, but that is what I was doing. I looked around, and I thought, okay, I need to make at least this much money, I want to travel, I want to not be stuck here, and I want to, you know, I want to buy a house, I want to work in an office, I decided I didn't want to work outside, like, I wanted a comfortable job, I decided I didn't want to work with people, I didn't, I obviously wasn't doing very well in anything customer-facing, so, and I didn't realize that's what I was doing at the time, but that's exactly what I was doing, I had this image of what I wanted my life to look like, and I reverse-engineered it to look at the skills that I did or did not have today. So, when I actually went to meet with the career counselor at the private college, you know, they, I think a lot of people, when they think about tech, they think code, programming, because that's kind of just what people understand, right? Like, people, they type a bunch of code, and somehow it creates like the internet as we know it, and that's, you know, and that's what I thought at the time, too, because the introduction to computer science course I'd taken at the local college was, it was just all about loops, and like, it wasn't intro to coding, just like a fun thing, so I went to the private college, and I said, well, I'm looking at your web development program, and God bless this woman, because she asked such good questions, which I would now, like, encourage other people to ask themselves today.
She said, well, at the end of the day, web development, and this is to your question, Kevin, about, like, what does your life look like? She didn't say, well, do you like web development? She said, at the end of the day, web development is building websites for customers.
That means your customers might not like the layout, or they might not like this or that, is that, like, problems that you'd be happy to deal with every day, and I said, oh, no, because I'm not really good with, like, design, and she was like, well, web development's a lot of design, and I kind of explained my thinking, and she said, well, we have this other program, network security, it's back-end computing, so what these, the web developers build something, and the network security people, like, this is what the website runs on, and so I shadowed a couple classes, and, you know, again, computers all speak the same language. I looked at what kind of, like, job opportunities were out there.
I looked all over, you know, North America and the world, and I thought, okay, this seems like something that checks a lot of my boxes.
[Kevin]
That's funny.
[Alexis]
I think we're recording this at a really interesting time. We're recording this right before Christmas, and so I've been thinking a lot about goals for next year. Usually, I wait until January 1st, and I'm like, ah, and I spend the first, like, five days trying to figure out what I want to do, but I was trying to get ahead of it this year, and I posted a story about it, and a whole bunch of people comment back, and, you know, we were going back and forth in my story, but what I think is especially interesting now about social media and being able to share your journey or even being a student and being able to, like, observe what someone else's life is like, I felt like when we were all growing up, social media, like, you might've been sharing pictures of, you know, your dog, your cat, your friends, but now you can literally observe someone else's career from their perspective as an adult, and there's all sorts of people you can follow that are doctors or dentists or pizza delivery men or network engineers, right, cybersecurity analysts, and you can almost find someone in any career that's creating some type of content, and I don't know.
I think the life design conversation is so much bigger than we're making it out to be, and I really hope that students are thinking about that now because there's so many, there's so much content out there and, like, things for them to make decisions off of that aren't just taking their guidance counselor's recommendation, right, or, like, taking their parents' neighbor's recommendation on what they should do with their life. Like, you can literally go out and watch and see.
[Kevin]
Yeah, if it's accurate. Social media is all fake to me. I don't know.
It's all games and acting.
[Alexis]
I mean, there's a little bit of a highlight reel. Come on.
[Kevin]
Everyone knows that. Yeah, they don't see the five-hour-long outage meeting that you want to, like, bang your head against the table and hate your life and go to the bar and drink because you're so tired and anxious. They don't see that part, but yeah.
[Alexis]
Unless you put it on the Internet, Kevin, you have to accurately represent your career.
[Kevin]
That's what I try to do with my content. I try to make it realistic. I have memes of there of, like, just, like, today sucks and, you know, I hate my life, but enough about my trauma and my troubles.
Melissa, what I find really fun with that story you mentioned is that I had the exact same, like, trajectory where I thought web design was what I wanted to do because that's what the Internet is. Like, you interact with websites and I like technology and that's what the Internet is, the website. So like, OK, web design is like the thing you do, not knowing that.
Like, I actually hated customer service and I hated dealing with people going like that button you made orange. I want it pink. And then two days later they go, oh, never mind.
I want it red. And you just want to, like, strangle them by the end of that. So I lasted a couple of years doing web design and realized I freaking hated it because it's a completely different job than I thought.
So I just find that really funny that we kind of had the same line of thought. But I didn't have a guidance counselor who actually, you know, gave me good questions and actually cared about where I was going. That's a big difference.
[Alexis]
So, Melissa, I'd like to dig in a little bit around having a beginner's mentality. You said when you started your network security course, you had absolutely no background. There was other kids in the class that came in that knew more.
But you still ended up graduating with honors. So how did that work?
[Melissa]
Yeah, when I first went in to shadow the cohort ahead of me to see if this is something I'd be interested in doing, I remember they were like, do you even know what DNS is? And I said, well, and this was kind of my attitude the whole time. I was instead of saying like, well, I don't know.
I was like, well, I know that that's what you changed to get American Netflix, which you cannot do anymore today. And that's honestly like where my head was that I was like, well, like I've always kind of been a little bit spunky, like, no, I don't know, but I'm not just going to sit here and cry about it. And so I think it's so I think this was the greatest blessing that I keep with me today is I knew how much I didn't know.
And the more you know, the more you know, you don't know. So it's not like now that I'm a senior engineer, I suddenly know I don't I only know that there is even more that I don't know and there's even more that I have to learn. So I hold that close to my heart today.
And, you know, so how did that look in the classroom? First of all, I knew that while everybody else was having, you know, they they already knew what DNS was, so maybe they didn't have to study as hard. I was at that school.
I'm not joking. Sometimes 18 hours a day from the time they open till the time they closed doing my labs study. And you can ask anybody who knew me at that time.
I was it was the hardest thing I have ever, ever done. And not only that, but like I said, I'd already used up my student loans going elsewhere. So this was like the last bit of student loans I was able to get.
I felt like this was my one shot, my one opportunity, and like I said, the rent was due. So I sat at the front of that class and I didn't care, you know, if I was holding other people up or whatever, my hand would be raised. If I had a question, please pause.
I have a question. Can you please go back to that slide? I didn't finish taking my notes and everyone, here's Melissa again.
But you know what? As time went on over the two years we were there. Yes, the other guys in the class, they were always better at me practically because they just had a head start, but it turned into this great thing where they would help me on my practical components and I would help them study theory because that's maybe wasn't their strongest area.
And I just really, really believe, well, I really believe in myself, but I believe this about everybody, no matter who you are out there, I think you're smarter than what you give yourself credit for, because I'm telling you, a lot of my teachers, when I was, you know, about to flunk out of school growing up, they would not ever, ever, ever have told me I should pursue a career in technology and that I'd be a cloud engineer one day. So and then, yeah, as I told you guys before, I did end up graduating with honors and I can't remember what academic achievement award it was that I got.
[Kevin]
But yeah, I find it really cool that you kind of took your weakness and you put it into a positive, like not to not to I know this is a woman's first episode, but like it's kind of like Rudy, right? Where like you're the short kid on the team. You don't have necessarily the best ability because you're coming in and you're you didn't make the team the right way, the right way.
Rudy analogy. But is that a movie, Rudy? You don't you don't.
Wait, wait, wait, wait.
[Alexis]
I don't know it either, Kevin. I'm just nodding along. You don't know Rudy?
No, I'm not going along with it.
[Melissa]
Did we just did we just eat him?
[Kevin]
All right.
[Kevin]
All right. So picture this. You're a little guy, right?
You want to go to Notre Dame. You want to play in the football team in Notre Dame.
[Melissa]
OK.
[Kevin]
It's like your dream, right? Oh, is this the Sandbox? But you're short.
No, it's Rudy.
[Alexis]
That's Sandlot. Sandlot, girl.
[Kevin]
Not the TV show. Oh, man. All right.
Just just quick for our listeners, too, because they don't maybe they don't know who maybe we're getting a lot of women listeners to this to this podcast.
[Alexis]
And OK, he's going to teach us about Rudy for context.
[Kevin]
This is only purely for context to relate to your story. Nothing else. So you want to go to Notre Dame.
You'll be the football team, but you're a short little guy. And you basically you don't make the team. You have to work your way onto the team and you slowly get there.
And then by the end, you have one play and who like he ends up sacking the quarterback and his one time ever playing his entire team, like rallies behind him and blah, blah, blah. But the moral of the story is that you outwork your your situation. You outwork what you're in.
[Kevin]
Right.
[Kevin]
And you at the end are successful. And that's what I was kind of getting at for the men in the audience.
[Melissa]
It's just like Rudy.
[Kevin]
Just like Rudy.
[Melissa]
So, no, I love that. And that's exactly the point. You outwork wherever you are.
You know, no, I went in there way below knowledge wise everybody else. But I just worked really, really hard. And I ended up, you know, outperforming those people in a lot of ways, not in all ways.
Practically, you know, there was some things just the more time you have. And this comes in your career. The more time you have hands on keyboard, the more little tips and tricks, you know.
And so I you know what, you guys, I even say today, I think even like I said, I hold this very close to my heart, always knowing how much you don't know. But I think it serves me well in my career today. I was just talking to my boss the other day.
I said, I'm still not the best engineer you have. I'm not the best technical cloud engineer on the team, even. But I have a lot of other skills.
And, you know, that accompany me and make me a great package as an employee. And the important thing is, I am very good at my job. I know how to figure things out.
If I don't know what I don't know, I know how to figure it out. And for the career trajectory that I'm today looking at 10 years into my career, it's fine not to be the best the best engineer, because I'm not looking to go down the architect's path, although I certainly could. But I think that's just something everybody has.
I wish if I could give a gift to everybody, I wish they would remember that. You know, true. I truly believe if you want to be a rocket science or a brain surgeon tomorrow, I truly believe that if you study hard enough and sit at the sit at your computer 18, 20 hours a day studying it, there's no reason that you couldn't.
It's just how hard do you want to study?
[Kevin]
How much do you want to sacrifice for it?
[Melissa]
How much do you want to sacrifice? Exactly. And I sacrificed a lot in those 18 months.
You can ask my friends. Oh, you can ask my friends all the parties I missed.
[Alexis]
Was there ever any, I mean, 18 hours a day is a big sacrifice, right? Putting that much time into anything without some sort of guarantee is a big sacrifice. I think it's something that we get asked a lot is if I take the certification, will I get this job?
If I do this, can you guarantee me this result? How did you go about determining, you know, was this worth making a sacrifice for? Or like, how do you even now when you're thinking about your goal setting?
Obviously, I mean, we all work in IT, right? Certifications take a lot of time. Learning a new skill takes a lot of time.
And there's not always a guaranteed ROI. So how do you go about thinking about that?
[Melissa]
Well, today, I really don't like the word manifestation because I think that's pretty thin. But for the sake of, you know, a general audience, that's how I think about it a lot today. I didn't realize that's what I was doing back then.
But I had, again, this idea of the rent is due. This is your last chance. I don't think it ever occurred to me that I wouldn't get a job at the end of this.
That being said, different economic times today. Tech is one of the safer career choices back then, 10 years ago, and still today. I think you're much more likely to get a job.
So, you know, part of it is just having a goal-oriented mindset. And failure was not an option, to say a cliche. That's one answer.
But the more logical answer that I'll give you is you have to be smart when you look at it. One certification does not guarantee you a job. No, it doesn't.
That's not really what certifications are meant for in the first place. They're more meant for continuing education and continuing on an established career. But I just think you have to be really, really smart about it.
Yeah, if you go and study photography, you're going to have a harder time, statistically. Just look at the opportunities. Anything where you're going to be self-employed is going to be harder.
I don't know if that's really the answer you guys are looking for there. I just think, here's what I'll say. Go on, Alexis.
[Alexis]
No, I think there's a lot of truth. Just to back up, when you were talking about manifestation and believing in yourself. In your head, you were going to work as hard as you could.
And at the end of it, you didn't even question whether or not you were like, I'm getting a job at the end of this. I think the phrase is not even a shadow of doubt in your head that you were going to get a job. I don't know if you'd call that manifestation or law of assumption.
If you're into a lot of the Joe Dispenza stuff. We could talk about that all day.
[Melissa]
I'd love to talk about that, too.
[Alexis]
If you believe it's going to happen, it will.
[Melissa]
Different podcasting.
[Alexis]
Going back to that, you were so convinced that this was the thing. That's what you were going to do. You were going to get a job.
And I think that it comes back to having faith and belief in yourself. That you are capable of doing this thing and making it work. And knowing or at least trusting that you're going to be okay on the other side of it.
Because you're the one that has your back. And that goes into a lot of different scenarios. Not just, you know, we're talking about studying and jobs here.
But if you're going through any sort of big life change, knowing that you have, if not the skills, the work ethic to learn something new. To pull yourself out of a situation or put yourself in a different spot.
[Melissa]
And that's exactly what I would like to tell everybody. My path here was so different. I had no knowledge.
Trust me, when I say, oh, just set your mind to it and you can do it. It's not because I'm just so smart and I'm so successful. It's not because of that.
I'm truly saying, like, if I can do it, I truly believe that anybody could. With enough time and effort. And what I'll say to, you know, finding a job when it's all done.
And that ROI is coming back to that beginner's mindset. I didn't have, I knew I would get a job. I had no idea what job.
I was not picky. And I think I see a lot of people today who say, oh, you're a cloud engineer. I want to be a cloud engineer.
I had no idea. We weren't even talking about cloud when I went back in 2013. And like, that wasn't even in my program at all.
We didn't study that, you know, I had. So, but I was open to any opportunity that was coming my way. And I just think.
If you're worried about return on investment, you might be thinking a little bit too much about yourself and not thinking enough about where can I provide value. If you go into it with a value mindset of I'm open to any opportunity. I'm open to working anywhere I can because I have a good work ethic.
And I'm just willing to provide any value I can with whatever skills I have. You will find opportunity.
[Alexis]
And I think to walk back through your career journey a little bit. You took some unconventional jobs to get started. Or had some unconventional opportunities at those jobs.
I will say.
[Melissa]
Yeah, so I started on IT help desk, as you do. I think most people start on some sort of IT help desk or some sort of NOC or something like that. And I was not picky.
I mean, I offered to run wires through the roof. I think I swept the floors at like literally at some point. You know what I mean?
I definitely was taking Lysol to the storage containers because I was like, these definitely haven't been washed ever and they're looking grummy.
[Kevin]
Real quick, were you asked to do that? Or was that like, these are gross, I need to clean these?
[Melissa]
They were gross and I needed to clean them. I was not asked to do that. But it's one of those things when you're first starting out, eager beaver.
I wasn't going to be sitting there, you know, looking stupid. I was always trying to make sure my hands were busy. And I think that's something that's really hard if you start your career remotely now that so many things are remote.
I think that would be, I've talked about that before. I think that would be really difficult to be a junior as a remote person because you can't be showing people not that I think what you're doing, what you're learning. Yeah.
And so to that point, you know, always being very ambitious. I started on IT Help Desk and immediately wanted to get off of IT Help Desk and become a sysadmin. I thought, you know, that was the next step.
I was going up to people's desks. What are you doing? Can I watch?
Can I try? But they did sit me. And it wasn't because it was me.
This was just the layout. But my desk did face the door walking into the IT office. And being the new person, I always had to answer the phone, you know.
QHR IT, Melissa speaking. And so a lot of people did assume they would come in and they'd say, oh, IT got a receptionist. And I, ignorance is bliss, you guys.
I thought that was so funny. And it is funny. It's okay to laugh.
It's funny. And I think that speaks to my point. We kind of talked about this a little bit about like how opportunities come your way.
And it wasn't, that's a good example of like that happened because I was a woman. Nobody ever thought, you know, when John was the new IT guy, nobody ever thought John was that receptionist. But I was open to any opportunities.
And so the next unconventional thing that happened to me is because I was so loud and going to, you know, all the sysadmins, what can I do? Can I help? Can I watch?
Can I shadow? Can you train me? I know I'll never be allowed to touch the compellent, but can I just read the book?
Can you? Okay. Um, and so when my company was acquired and we, um, also acquired a telehealth company, they were starting a DevOps team and they were starting to build these DevOps pipelines.
And the, I think it was the director and another senior guy were starting the team and they didn't ask me to be on the team, but they knew that I was open to doing whatever. So they asked me to come take notes in their meetings.
[Kevin]
To increase your secretarial skills.
[Melissa]
And again, ignorance is bliss. I was just, you know, today we can look back at it and say, oh, was that fair? Because she's a woman.
I was open to any opportunities and I was open to providing value. I'm doing work wherever I could. And so I went and I diligently took notes.
I wrote up the notes all nice. I asked questions. I made sure everything was clear.
And that did lead to the opportunity of me being able to leave help desk and do DevOps full time.
[Kevin]
So now looking back in hindsight, do you think they ask you to do that because you're a woman or because you were that go-getter asking questions and wanting to know everything?
[Melissa]
I'm going to give them the benefit of the doubt and say it was because I was a go-getter. A more interesting question is, if my name was John and I was a go-getter, would they have still asked me to take notes or would they have invited me onto the team in a different way? I don't know.
All we can do is speculate today. I'm really grateful for the opportunity. And actually those people who invited me onto that team really helped my career in so many ways.
So all I'm going to do is thank them for the opportunity today. I'm not above taking notes. Today I can look back and I can say, oh, again, would you have asked John to take notes?
I'm not above it though. And I think that's so important to remember. None of us are above sweeping the floor even today.
If I was at Aritzia and they asked me to go work a shift retail, oh, well, actually, I would love to do that. I'm just grateful for the opportunity.
[Alexis]
Well, one, I'd love to also work a shift retail at Aritzia. Only if I get the employee discount for a day though. That would go crazy.
Could you talk a little bit about what it was like working as a younger woman on those teams, especially when you're getting started?
[Melissa]
I was really lucky that I can say I've never had a really negative experience. Everybody I've worked with has been super, super kind and accommodating. And again, a lot of the things that we could call sexism today is only in hindsight.
I never realized it at the time. One thing that would always happen when I was on help desk is people would call and they'd say, oh, can I speak to Andy? Sure.
And that would happen repeatedly until Andy would come up to me and say, Melissa, you don't need to keep forwarding these calls. And I was like, well, they just said they want to talk to you. And he said, Melissa, they can talk to either of us.
They can talk. And I like it didn't dawn on me that maybe people were. I don't know.
And I'm not I don't think I don't think anybody is out there maliciously thinking that some people are, unfortunately, but most people, especially people I work with, they're not out there thinking, oh, I don't want a woman to help me with my computer. A woman can't help. I think something that's held me back is not so much people's maliciousness, because I don't think I've worked with any malicious people, but not just being a woman, as we know, women are often, you know, there's a lot of studies done out there about how women are perceived differently.
I'm also a blonde woman who wears makeup and wears pink. And I present myself to be very girly. I think that, if anything, has made people perceive I think people perceive me to be younger or immature, just not as knowledgeable.
And their mind gravitates to, well, and he's always been able to help me. And I don't know if this pink sweater can help me.
[Alexis]
Girl.
[Melissa]
Yeah, the new girl. Like, I guess I'm just going to say, I don't think it's I don't think there was ever anything malicious, I think.
[Alexis]
Well, in the moment, in the moment, you're just trying to do your job. Yeah, that's why I say, like, I don't think about it. Like, usually I don't think about being a female in I.T. I just do the best job I can. And hopefully I'm recognized for it. Right. Or it's it's able my skills are sufficient for the current situation.
Like you said, it's only ever in hindsight, looking back, you're like, I don't know about that. All we can do is speculate. At the time, you're just trying to get through it.
And I think even, I mean, studying anything in college or going through any struggle in your life, I burned chicken and smoked out my whole kitchen earlier. You're just trying to get through it. And you're not sometimes like the action is the thought.
[Melissa]
You know, there's a clip of the artist Pink receiving an award or I don't know what it's about. Somebody says to her, like, is the music industry a place for women or something like that? And her response is something to the effect of like, I don't even want that to be a question.
Like we need like stop even asking that question. And I loved I loved her take on that. Like, let's stop dancing around it that way.
I always say, you know, people always want to. Oh, how did you get into the industry? But like what made you.
Hey, we can acknowledge the elephant in the room when a five foot ten blonde, confident woman walks in. It's different. It's not the person you see in the I.T. office every day. It's OK. Like, let's all just call that out. And that's OK.
But one thing that we do see come up is and I think maybe this is where you were going with your question is. The working environment is fine, but something we see come up is the guys working in the office, especially the managers who are maybe older. They're hanging out outside of work, they're going for beers, they're buddies, and that's really good.
Like, I obviously encourage camaraderie in the workplace. You know, Roger, 50 year old Roger, he doesn't want to be friends with 30 year old Melissa. And that's fine.
Roger, I'm not necessarily looking to be friends with a 50 year old dude either. But I think that can create these sort of systemic challenges.
[Alexis]
Does that make sense? We're like, yeah, no, I mean, I don't particularly enjoy golf. I'd like to be invited, but I don't really particularly enjoy it or I might not go.
And there's conversations that happen on the course that you might just not be there for. And I think that's fine, right? Having different interests.
But I also think maybe when you're planning events, being a little cognizant of something that everyone might want to go to, especially working in tech. And I mean, I don't really drink beer and I also don't really enjoy sports, but I can't tell you how many sports games or breweries I've been to as happy hours after work. And I think there's a lot of other fun group activities you could plan.
That are just as casual. And I'm not saying that women don't enjoy sports or beer. I know many women that enjoy both of those things.
I just don't really happen to be one of them. But it's not like I'm going to miss the happy hour because I do still want to see my team and I want to hang out.
[Melissa]
And I think something I always say is it's not just about women and men. It's also there's people out there who there's a lot more people today who choose to be sober. So men and women alike.
So it's not just, you know, who likes beer and who doesn't. If we're planning activities for the team, let's be a little bit cognizant of something that's, well, I think Kevin, you were talking about this last time we spoke, something that's accessible to everybody.
[Kevin]
But so as I'm a cis white dude who's middle-aged, right? So I've been quiet in this conversation if you couldn't tell. But my question for you ladies in IT is you want to be more accessible to you and your and the team cohesity of doing things that, you know, everyone can do.
But at what point is it like you don't want to be treated differently, right? You want to be treated the same as everybody else, but yet accounted for in that you aren't like everybody else. So it puts us in a weird spot of like, I don't, I don't know what I should do half the time.
You know, like do it, do I invite everyone to go beers and to a sports bar and invite the woman or go, no, today we're going to go, um, I don't know, do, I can't even think of something a woman would want to do.
[Alexis]
Just pick something different once in a while, just once in a while. It doesn't have to be all the time. It doesn't have to be every event.
And like, I mean, I think we can all recognize, I'm sure Melissa and I would love to go to TJ Maxx and get our nails done and get iced coffee.
[Melissa]
But we're not going to ask the whole team to do that.
[Alexis]
Like you don't. Yeah, we'll have a whole day.
[Kevin]
We'll have a great time. I'm down for a pedicure. We can go for a pedicure any time we want.
[Alexis]
I'm sure that your Saturday you would prefer to like, I don't know, maybe browse Home Depot and get a burger at Red Robin. Like just, just make.
[Kevin]
That sounds like a great Saturday to me.
[Alexis]
So yeah. There's men and women like to do different things and I think it's fine to recognize that. And again, I have no problem going to a brewery and a sports game, even if it's the majority of the time.
But once in a while, it would be nice to go to paint and sit or candle making.
[Kevin]
Would that feel awkward to you though? If like, or that feel good that, you know, we're all trying to accommodate something that you like to do. Or would that feel like you're being like.
[Alexis]
I'd be stoked. I could, we could all, I mean, the men could bring candles home for their wives as presents. Who wouldn't like that?
I wouldn't love that.
[Melissa]
But it's true. Nobody wants to feel singled out. It's like, you know, when we talk about if there's somebody who's physically disabled on your team too, you don't constantly invite people to come play soccer.
You also don't say, let's all go to wheelchair basketball. Nobody wants to be singled out in that way. But there's so many ways that, um, there's so many things we can do.
One of the best rules I heard, I've heard of managers doing and side note, I think this is the mark of a really great leader. Somebody who can do a team building outside of work without anybody feeling singled out and everybody feeling included. A sober person can choose for themselves and on their journey, if they want to go to a brewery and order a soda, or if they want to not go, or you can go, there's a ton of restaurants out there you can go to that are not bars where a sober person can come and get a soda with everybody else.
And the mark of a good manager would be choosing a place. Maybe that is wheelchair accessible. You know, you would be looking into these things without advertising it.
And, well, I don't know what you have there, but here we would all go to Brown's or Joey's or the Cactus Club. And that's something that's really accessible that everybody can go to. And one of the best rules I've heard from managers is, because again, you know, Roger's over there having his poker night with everybody.
I'm not offended that I'm not invited to poker night with all the other 50-year-old dudes. It's not my idea of a good time anyways. Like I said, I've dealt poker in another life.
It's not really my thing. I've worked a lot of hot jobs. I'm good to go home and hang out with my fiance.
I'm not offended that I'm not invited. And it's so good that you guys have that camaraderie. But understand that when you guys are always having that poker night, it means that when you're looking to promote somebody subconsciously, you trust these guys more because you know them, because you're friends with them.
And so I think when you get to be a manager or a director, unfortunately, I do think to be the best manager or director you can be, not that you have to cut off your friends, but there is a sense of like separation that you have to have. And I keep saying the best rule I've heard, and I'm going to say it and not get distracted again, is managers who will no longer have dinners or anything that they wouldn't do with a female employee, they don't do with male employees anymore either, which maybe means poker games, which maybe means dinners. It means they're only going for lunches or that they're only going for appies and happy hours, but they're not doing things that explicitly exclude.
Like if you wouldn't take two females out to dinner or out for a steak at 8 p.m. on a Friday, they don't take the guys either. Does that interfere with your poker schedule? That's for you to decide, Roger.
I don't know.
[Kevin]
Frickin' Roger.
[Alexis]
And Roger. I think that's a really good way to think about it. And I would hope that's included in most leadership training today.
I know there's a lot of organizations that will send you to some sort of leadership training when you become a manager. I would hope that's something they go through. I do want to pivot just a little bit.
[Melissa]
Yeah, let's pivot. We've got so much to cover.
[Alexis]
Oh my God. We've talked a little bit about how you were adjusting to tech in a male-dominated world, but you're also working at Aritzia, which is one of my favorite companies. Same.
And you told us this was a really full-circle moment for you.
[Melissa]
So can we dig into that a bit? It's so fun because there's so much discourse online right now about your inner child. I like doing what makes your inner child happy.
And this was totally one of those moments for me. Growing up, I wanted to be a fashion designer. I would sketch clothes.
I have so many old notebooks still today. I have all these clothes I would sketch. I wanted to be a makeup artist.
I wanted to be a superstar until my family did tell me, you know, Melissa, you can do anything you set your mind to, but you're going to need a lot of voice lessons for that, sister. And I grew up in a family of artists, so I always wanted to do something artistic. Sorry, I could talk about this all day.
There is a conversation to be had about how women are pushed into the arts and men have been pushed into the sciences. We're totally seeing that change today. We're totally seeing those statistics change today, which is amazing.
But that was my story. Graduating in the early 2010s, I was pushed to do the arts and, you know, went to university for English and psychology, as you do as a good, you know, blonde girl, and realized, like, I really don't like this. Like, what am I doing this for four years?
And that journey from not doing well at university in the arts to, you know, stumbling through my early 20s, not being a good wager, not being good with, you know, not being a good poker dealer, couldn't sell ice cream from the ice cream truck, all these things I did. And finally, to find that instructor at that college who was like, Melissa, you're really good at this. And I was really good at it.
That's so crazy. Like, I remember, so I slowly, when I went to the college and I had all these random courses, I slowly started dropping out of them. And by dropping out, I mean, I would just stop going to them and get product.
It was not responsible, not the way to go. But God bless the Canadian student loan system for me. So, and I ran into these girls outside of class and they said, oh yeah, that computer science class was so hard.
And I thought, what? That's literally my blow off class. And it's so easy.
It's the only class I'm still going to when I'm on academic probation. And I had this conversation with my instructor. I said, I'm not going to write the final exam, or I could, but like, I'm on academic probation.
So it doesn't matter if I write it or not. And all of that to illustrate that this whole time, I had a very science and math oriented mind. And it took a lot for me to realize, like, I'm not very good at matching colors.
Like, I don't understand why patterns and colors don't really go together. It's not really my forte. And so to be able to go through that whole journey and then work for a fashion company, which Aritzia is so exciting because it's such a Canadian success story being coming out of Vancouver and now being, you know, famous in Canada and famous in America and getting to contribute to this great Canadian fashion brand, but in a way that my skills actually provide value in a way that my brain works.
So I don't have to be matching the colors and building the displays. That's such a cool full circle moment. And like, when you talk about like feeding your inner child, I feel like when I got the interview out of Aritzia, like everything else in my life went on hold because I wanted this more than anything.
And again, it never even occurred to me that I wouldn't get it. I just said to myself, wow, I have this opportunity. So that's just going to be that.
And it's the coolest full circle moment.
[Alexis]
What I think is really cool about that is that you can work in any industry, right? With technology, your skills are transferable. So you could work in fashion, you could work in gaming, you could work in finance, you could work in sports.
I can't tell you, when I was at Cisco, I worked with someone, all live streaming for television. Oh, wow. For sports broadcasting.
It uses a lot of multicast. And so he was like a multicast expert. And he worked with like Fox and all the major, like the NFL and like all the major sporting leagues to do their broadcast systems for the news.
And I was like, that's cool.
[Melissa]
That's really cool. It's one of the reasons I tell people like, be totally open. Don't go into this saying, I'm going to be a network engineer, I'm going to be a cloud engineer.
Be completely open to any opportunities that come your way. And just look to where you can provide value because it, you know, I mean, at the end of the day, yeah. A lot of what we do is the same, no matter where we go.
But I can tell you working out of Rixia is completely different to where I started, which was for a medical technology company. We've hosted Canadian healthcare records. And like I said, we hosted a telehealth platform.
The scene, there's things that I'm exposed to at Rixia I would have never known, you know, the way the distribution centers work, the way they roll out changes to stores, getting to have even a really small hand in that is so cool and so completely different from the things I worked on in medical technology.
[Alexis]
And I think at the end of the day, it just makes you a better engineer, right? Because you're getting more exposure to more systems. You've worked on different types of projects and probably, I mean, I would guess it keeps it interesting.
[Melissa]
It keeps it really, really interesting. It's one of the things I love about our line of work is we can have so many different projects on the go and I'm definitely the type of person I've always been, always been a very scatterbrained type of person. I need to sort of keep things interesting.
So I love being able to sort of switch gears. I love being able to work from home, not gonna lie. I love to, you know, stay comfy and cozy and have my snacks and be able to go into the office, you know, for the social fun of it all.
And because the OTC office is beautiful and I love being there and being in the busyness of it all. But I love being able to, sorry. I need the behind the scene pics.
I wanna see. It's so, I don't have any, but it's just trust me. It's very cool.
It's very fun. I love being able to switch gears as often as you want. And something I love to, something I wish that I could tell all young people.
I mean, there's so many, there's such, because of social media, we're all seeing these influencers live these really glamorous lives. And I mean, I'm not getting invited on any brand trips. I'll tell you about my life.
Isn't quite that glamorous, but something that we've talked about Alexis is having the freedom to travel, the freedom to work anywhere. You know, I've worked from all over Europe. I've worked from Mexico.
I've traveled, drove all across Canada and back and being able to have the disposable income to buy the clothes I want, to buy the makeup I want. There's so many ways. And to get to work for Ritzia, which is so frigging cool.
There's so many ways that you can live a pretty cool, glamorous lifestyle that aren't necessarily being a content creator. And again, giving back in ways that are more suitable for your skillsets. I think that's pretty exciting.
Today we actually live on a small homestead and we just have chickens. So I'm not in the city. It's not section of the city over here, but it's still, even that is such a dream thing for a lot of millennials to be able to move to a small town like we have.
[Alexis]
I think it's a great point because so many people want to be an influencer now. And influencers, I mean, you can make a great career. I try to do a reframe.
Anyone's talking about being an influencer. And I'm like, you're really an online entrepreneur. Like you are a digital entrepreneur.
There is an element of owning your own business.
[Melissa]
It's all affiliate marketing.
[Alexis]
Yeah, operating and treating yourself like a business where it's not like you just get invited and given free things all the time. Like you do have to do your taxes. Like you gotta figure out.
There's a lot of other elements to working with brands that aren't just, hey, I got this cool free thing. Look at it. But you can, like you said, you can provide yourself that lifestyle without having to expose all of your personal details on the internet, without having to be on your phone absolutely all the time.
Like you can still have a normal, very normal nine to five job that pays you very, very well where you can do all of the things that you see online. And also like, I don't know, I mean, we could get into this, but like we were saying, Instagram's a highlight reel and people post what they want you to see. And so if you're seeing, you know, one number one influencers doing that or even your friends or peers or colleagues or people you went to high school or college with posting that, it's also a highlight reel, right?
[Kevin]
And for every like one influencer who is, you know, showing travel and all this fun stuff, there's a thousand people who are just doing that as their normal day life. They just don't post about it. They just don't feel the need to invite the public into their own lives.
[Alexis]
A hundred percent.
[Kevin]
It's a real thing.
[Alexis]
I can't tell you. And I mean, I say this as someone who has been traveling full time since April. It's December.
So better part of a year now. I can't tell you how many people that I've met who live on the road full time and have not posted. They don't even have an Instagram.
You don't have to, right? And I mean, we're talking about travel. It could be, you know, sports, working remotely.
It could be just, you know, being able to buy what you want when you want. Like there's people who make plenty of money that are not influencers and don't post about it.
[Kevin]
It's foreign to me. I don't understand it.
[Alexis]
Yeah. Something like putting all your personal details on the internet, Kevin.
[Kevin]
Yeah, it's crazy, right? So we're getting close to the end. Melissa, before we end it up, I want to touch on something real quick.
You mentioned a lot throughout this interview that you were super confident that you were going to get the job, that you were going to graduate, you were going to make a career out of this. Have you ever had the experience of being like imposter syndrome or doubting yourself in any of this?
[Melissa]
No. If I say I don't, then I don't.
[Kevin]
All the time, you just manifest that you don't.
[Melissa]
Yeah, all the time. I mean, it's a tricky one because you want to say like, no, I don't. And you believe it.
And then it becomes slowly, you do move in a direction where, no, you don't. But no, the truth is, of course I do. I do all the time.
The best thing I've ever learned to overcome that is, I've said this before, but I'll keep saying it. You're thinking, I'm saying this to myself, so I'm not trying to be condescending to anybody else. I'll say it about myself.
I am thinking too much about myself and I'm not thinking enough about how to help everybody else. And that changes it from, oh, do I not know enough? Am I not meant to be here?
Am I not smart enough to, okay, maybe those things are true. Maybe they're not. But you're here right now.
How can you help? What can you do right now? And more often than not, there's a lot you can do because it's just imposter syndrome and you are meant to be here.
There's a lot you can say to about, a lot of us have the same education, blah, blah, blah, blah, but you're just trying to rationalize it to yourself then. But a lot of the times, sorry, go ahead, Alexis.
[Alexis]
I think that's a good way to almost do a decision matrix of your skills. Maybe you have imposter syndrome, but say there was a situation at work or there was a project at school. And you're sitting here like, oh my God, what can I do?
Well, break down the problem. What actually needs to be done? What are the different pieces of it?
Yeah. Could I do this? Yes or no.
Could I do this? Yes or no. I do this?
Yes or no. And it's a good way to take in a really honest matrix of where you're at and the skills that you have. I love that.
[Kevin]
I think it's, go ahead.
[Melissa]
And sometimes, something I love about imposter syndrome, again, trying to flip it to be a positive is you never want to get ahead of yourself and think that, oh, I do deserve to be here because I'm the smartest person in the room. If I'm having imposter syndrome, okay, is there a place where my skills need to be sharpened? And that happens to me all the time.
Dang, I haven't worked on a Red Hat command line in a while and now I'm doing this and I'm forgetting my commands. Yeah. You do have to go sharpen some knives.
That's the way of the world. That's okay that you don't know everything all at once.
[Kevin]
Yeah, sounds like a nice balance between, you know, knowing where your weak spots are, wanting to improve yourself, but also then focusing on what you can improve or what you can do to your team, for your workplace, whatever, and not just thinking about what you can't do or what you're afraid to do, but looking at what value you do provide for people and your positivity.
[Melissa]
We need to stop thinking about how we're perceived so much. And that's a lot of, I think, where imposter syndrome comes from. Do I look stupid or do I look like everybody else in this room?
You know what? Sometimes you're going to look stupid, especially when you're me sometimes.
[Alexis]
And we've also talked about putting out early videos, Melissa. I know you used to create content on TikTok and getting that one year ago today, two years ago today, and looking back and being like, I look pretty stupid.
[Melissa]
I hit post on that and people launched it. But you know what? If people, that's such a good example, old videos.
Did it make someone laugh? All right, great. Did it make me laugh?
Great. And so same thing in the workplace. At the time, it was great.
At the time, I was doing the thing I felt that I needed to do. Exactly.
[Alexis]
With the skills that I had available.
[Melissa]
So when you have imposter syndrome, all you have is this very moment. And how can I help? How can I provide value?
How can I help the team right now? I promise if you're always thinking about how can I give back to this team? How can I help this project?
That's the end of it. You'll do great.
[Kevin]
Love it. So as we're wrapping up here, Melissa, is there one piece of advice that you would give your younger self or someone, another woman who wants to break into IT or get into IT that you would impart on them?
[Melissa]
I would say there's no education that will ever do you a disservice. The number one thing I hear people say is I don't know what I want to do. And I did.
And you think I just love computers so much. And so I just like... No, but you just...
No matter what you do, if you sit around thinking about what you want to do and it dawns on you, that's my dream job and you go out and you get your dream job, there's going to be shit days that you hate that job. Even if you're an influencer, like you were saying, those shit days when you hate your job, even your dream job, but they're a lot easier when your bills are paid. They're way easier when you're making six figures.
So just do something. Even if you don't know, just get started. Just do something.
I wish I just started sooner.
[Alexis]
Pick a direction and figure it out as you go. And you can always pivot if you don't like it. But as long as you're moving in a direction.
[Melissa]
Exactly. And I tell people when you're sitting here thinking, oh, do I want to do this? Do I want to do that?
But you're fighting 10 beasts. You could just pick one beast and fight it. And again, hey, maybe that career won't work out and you won't like it, but your bills will be paid more than they were before you did some type of education, more than they were.
And it's just easier. I'm just saying it's a lot easier when you're making money.
[Alexis]
Love it. I agree. 10 out of 10, Melissa.
And that is it for this episode of Life in Uptime. Huge thanks to Melissa for sharing her journey. And thanks to you for listening.
If you enjoyed this conversation, be sure to follow the show so that you never miss an episode. And if today's story gave you something to think about, feel free to share it with a friend or a colleague who might need it. So until next time, keep learning, keep building, and keep your uptime high.`,
  },
  {
    episodeNumber: "009",
    slug: "ep-009-navigating-cybersecurity-careers",
    title: "LIU009: Navigating Cybersecurity Careers",
    guest: "Mike Miller",
    guestTitle: "Virtual CISCO",
    guestCompany: "Appalachia Technologies, LLC",
    guestLinkedIn: "https://www.linkedin.com/in/mikesportfolio/",
    description: "Alexis and Kevin sit down with Mike Miller to discuss what brought him from the back of a garbage truck to his current position as a Virtual Chief Information Security Officer (VCISO). He breaks down how a VCISO differs from a CISO, and discusses the two types of clients looking for VCISO services: those looking to have a proactive security position and those looking for a “compliance box check”. Mike also advocates for allowing curiosity to drive a tech career rather than a rigid five year plan, and stresses the necessity of foundational technical knowledge and people skills.",
    airDate: "February 26, 2026",
    packetPushersUrl: "https://packetpushers.net/podcasts/life-in-uptime/liu009-navigating-cybersecurity-careers",
    youtubeUrl: "https://youtu.be/wKNphn_SDjE",
    transcript: `[Kevin]
This episode is sponsored by Meter. If you're tired of juggling five vendors and six dashboards just to keep the network up, Meter delivers the full networking stack, wired, wireless, and cellular, as one integrated system. Go to meter.com slash liu to book a demo. That's m-e-t-e-r dot com slash liu. Welcome to Life in Uptime, the podcast where we talk with the people behind the technology that keeps our world connected. I'm Kevin, joined by my co-host, Alexis.
In every episode, we sit down with engineers, leaders, and builders in tech to uncover the stories behind their careers, how they started, what they've learned, and where they're headed next. Our goal is simple, to help you see how far tech can take you, no matter where you start from.
[Alexis]
All right, guys. Today, we've got a very special guest. We're here with Mike, and he's a CISO and security leader who has spent over two decades helping organizations navigate risk, compliance, and modern cybersecurity threats.
From hands-on engineering to leading a global security team, Mike has built his career on translating security from a technical burden into a business enabler. He's so passionate about mentorship, career growth, and showing aspiring technologists that cybersecurity is as much about people and process as it is about tools. So, Mike, welcome to the show.
[Mike]
Thank you for having me. I really appreciate it. If there's one thing I've learned already, it's that I need to totally redo my intros because, Kevin, I won't be able to match that.
Fantastic. Thank you for asking.
[Alexis]
He kills it every time. Mike, I know that we have been online friends on LinkedIn for quite some time now, so I'm super excited to have a bit more of an in-depth conversation about what you do. I think a great place to start, because I've had this question for a while, your title on LinkedIn is a virtual CISO or VC CISO.
Yes. Can we talk a little bit about what that actually is? I've seen it floating around, but I was never really sure.
[Mike]
Yes, absolutely. And you're right. You see it a lot out there.
You see it on profiles. I get that question a ton. So, the difference between a CISO and a VC CISO is that a CISO is typically a person that's in charge of a security posture, the overall posture, the people, processes, things that are happening to protect an organization.
At that one particular organization that they work for. So, you think of any big company, their CISO is protecting that particular company. So, another word for a VC CISO would also be a fractional CISO.
So, VC CISO slash fractional CISO is typically a term that you see in the MSSP world, where that CISO would be working with multiple clients that that MSP or MSSP has. And one client might get five hours a time from you a week. Another client might get eight hours a time from you a week.
So, you're split between you're working for one company, but you're actually doing work for multiple. Does that make sense?
[Alexis]
Yeah. And I guess my question there, because it seems very similar to consulting, right?
[Mike]
Yes, absolutely. Yes.
[Alexis]
As a CISO, if you are the sole CISO, CISO SQL.
[Mike]
Yep. That's another debate.
[Alexis]
If you are the sole CISO at an organization, and something happens, you have a breach, your bot's on the line.
[Mike]
Yep.
[Alexis]
Right? You're the one that's responsible for the entire security posture.
[Mike]
Probably going to be.
[Alexis]
As a VC CISO, is that still the case? What happens if something goes wrong? Do you have a level of responsibility to that organization?
Or is it more similar to being a consultant or working in sales where you're helping them with their security posture, but your bot's not actually on the line?
[Mike]
Yeah, that's a great question. So, you're right. If you're a CISO for an organization, and something major happens, there's a huge breach, there's a good chance that that CISO is possibly going to be replaced.
And a lot of it's even for ER and things like that, just to remove and put someone else into place. VCISO is a little bit of the opposite. So, what we do is we advise our clients the best we can.
We help them understand their own environment, what their gaps are, where they're strong, where they are weak. And then we advise them. We give them the best consultation, the best advice we can.
But at the end of the day, it is up to them to make those decisions on the gaps that we've shown them. And then for them to put things in place. So, at the end of the day, in many, most cases, VCISO or fractional CISO is kind of clean, right?
Where something were to happen, we've given them all of it. We've tried to enable them with everything that they need. But many times in these roles, you will advise a client and they won't do, maybe budgets are in the way, or maybe they just don't get down the path that you gave them and bad things happen.
[Mike]
So, yeah, it's kind of quite the opposite between the two.
[Kevin]
Do you find that people seek your services just to have a checklist of like, we've consulted, we've talked to an expert, we're going to implement these things possibly in the future, but we just want someone else to take a look at it and just to check a box that we attempted that?
[Mike]
Yes. So, our industry as a whole, and both of you know this, our industry is very compliance driven, right? If it weren't for compliance, there would be many things, many budgets that would not exist and things would not be happening as they do now.
So, to answer your question, it's split there too. We have clients that come to us that truly want to have a proactive take on their cybersecurity posture. So, they're looking for things that are wrong.
They're looking for advice. They truly want to get better. Also, we have clients that come to us last minute because they need a compliance box check.
So, it's split there as well. Compliance is definitely an enabler for this industry. I think it always will be.
People hate compliance, but at the end of the day, it's when things trickle down, it's compliance and frameworks and things like that that are feeding.
[Kevin]
I mean, it sounds like a great job. You get the benefit of being a CISO, depending on how you pronounce it, without any risk. That's the best of both worlds, right?
[Mike]
Yeah. Here's the bad thing though, right? So, you take something like, what happened this morning with AWS?
Well, now, if you're working with 5, 10, 15 clients, when there is something major that happens, now all of a sudden you have not one organization that you have to work and deal with, but now you have a team. But yes, you're right. As far as the risk side of it, yeah.
Personally, I like the be CISO side of it better than the CISO side of it, just because at the end of the day, I know that as a VCISO, I can give them the best enablement I can, but it's their decision.
[Mike]
This is my hot take.
[Alexis]
I think if you actually work in cybersecurity, it's CISO. And I think if you don't work in cybersecurity, it's CISO.
[Mike]
That's not my opinion.
[Mike]
Yeah, I know. I say CISO. CISO makes me think a little bit, but I think you're right.
I think you might be right.
[Kevin]
I've heard of CISO. I've never heard CISO, but I don't work in that side of the house at all. So, it makes sense.
[Mike]
Where my theory came from. And you go to different things.
[Alexis]
So, Mike, we connected over LinkedIn. I post a lot about making network engineering cool and learning the fundamentals. And I'm pretty sure that's what we connected over first was talking about how fundamental networking is.
And I believe you started off your career in helpdesk.
[Mike]
I did. Prior to that, I was riding the back of a garbage truck. I didn't know what my future was going to be.
Were you really? Yeah, I absolutely was. For a very, very, very short time.
But yeah, I didn't know what I was going to do. I didn't really have a plan. I was probably a C to a C minus student in high school.
We didn't have internet when I was in high school. So, showing my age. But I just hadn't found my calling or my interest yet.
Yeah, I started at a dial-up ISP back when we had to dial into the internet. And they gave me a book. And I would read answers out of the book when the customers would call in.
And for me, that was the start of my tech career.
[Alexis]
Did you feel that having... So, something that I feel always helped me learn was when people were asking me questions and I was responsible for going and getting the answer. Because then I had to go do my own research.
I had to put out my own words. I had to teach it to them or deliver the answer to them. And then if they had more questions, it would just repeat the process.
Did you feel that having that book and being on the hook for getting people answers was one of your big building blocks?
[Mike]
Yeah, I think so. I think the pressure of the job too. I don't think back then we even had hold buttons right on our cheap phone system.
Anyone asking a question, they could hear me flipping pages and trying to find the answer. And so, I was on the spot. I was learning that way.
I was teaching them what to do. But at the same time, over time, as customers are calling with questions, I might not have to flip the page 53 because I remember that answer. Over time, it started just resonating with me.
And then it gave me just... I'm like, you know what? I think I can do this.
I think I can do this tech thing. And then I just started diving deep.
[Kevin]
Now, at this point, did you have a passion for technology where you're like, I like this thing? Or is it more like, I can do this thing?
[Mike]
I think at first it was, I like this thing. I think where the passion for me came in, I started watching over the shoulders of the systems admins who were maintaining or building and maintaining the systems that kept our ISP running. And the things that they were doing looked just so cool.
And I'm like, this is just way over my head. And I started just digging in and asking questions, like Alexis said. And over time, I really grew an interest and a passion for just technology.
Because I had no tech background at that point at all. I'm like, this is a whole new world that I had no clue about.
[Kevin]
I'm curious, the things that the engineers were doing that you were looking over their shoulder, was it like terminal screens? You can't get so excited about terminal screens.
[Mike]
Back then, I'm going to show my age here again. Back then, our ISP ran off of NT4 RAS server. We had AD back then, Active Directory, put the users in, configure in the RAS servers.
Back then, we had to configure. This was pre-plug and play. Back then, when you were dialing into the internet, if your IRQ was the same as what your sound card was on, when you dial into the internet, your sound quits.
So it was learning to configure all of these things. Back then, the internet was just coming about. But that whole, wow, I'm sitting on a website that exists in California, and I'm in Pennsylvania.
That whole thing of being able to talk to anybody across the world was just fascinating. I wasn't just getting to live the end product of that. I was getting to be a person who was helping build that as well, which is just pretty cool.
[Kevin]
And at this point, you're at the ISP, and you think that this might be a career for you. Did you want to stay in the ISP, or did you want to venture out into the normal world, I would say, because ISP is completely different?
[Mike]
It is. Great question. I have, I would say, self-diagnosed ADHD, right?
I've never been self-diagnosed that. I get bored easily. Well, would I have that, Mike?
So I started with the systems admin role. I had no preference to answer your question on staying in the ISP realm. I wanted to learn how things work.
So I went from systems admin role, working with servers, to, okay, now we're talking. I'm going to know how this computer talks to that computer. So I started learning things like packet analysis, learning to read PCAPs, using tools like Wireshark and so on, and understanding what a packet was and how computers talk to each other and so on.
So then I got into a network admin role. I started working with firewalls, routers, things like switches, hubs, back then all those things. Back then it would have been Cat5 cable and so on.
So yeah, I got into that end of it. So for me, it was more, I didn't really have a plan. I was learning technology.
I was following what interests me the most, and then whatever come out of that, come out of that. I let my curiosity... This was true my whole career.
I've let my curiosity drive me. I never really had a plan, but whatever came out of it worked. So it worked.
When you find something that you're interested in and passionate about, you don't always have to have that super long vision or that five-year plan. Just enjoy the moment, enjoy learning, and just go where those doors open.
[Kevin]
Yeah. I find back in the day, we didn't know what we didn't know. There wasn't a plethora of information like we have now.
So you just discover it as you go along, compared to now, where you can Google, what do I need to do to become an architect? It will tell you all the information you need, all the steps, all the certifications. But back then, we didn't have that.
We had no idea. So you just meandered and, hey, this is cool. Let me explore this thing.
Oh, this is cool. Yeah, exactly.
[Mike]
It was less chaotic back then too, because you didn't have Indeed and Dice and all those. You were in tech and you knew something. You could find a job pretty darn easy.
[Alexis]
I was going to say, Mike, what I like about your story and what I think is super interesting, we get questions all the time, and it's, I want to be a CISO one day. So I am going to first do this, and then I'm going to do this, and then I'm going to take the certification, and then I'm going to move there, and then I'm going to do this. And it's like, you can't map your entire career out from day one.
I think it's good to have a good idea of what direction you want to go in. But we have people that hit us up and they're like, I want to be a staff developer at AWS, and here's how I'm going to get there. And it's great.
But can you repeat? If you're following someone else's journey, are all of those steps repeatable the exact same way? Probably not.
So really having the faith that you can go into something, see what you like, see what you don't like, and just see where it goes.
[Mike]
Yep. It's like taking a vacation, unplanned vacation. You don't know where you're going to go.
You're going to enjoy the journey. And the journey for me has always been almost as fun or sometimes more fun than the destination. So as you're going through this career and you're learning things, you see a door that opens or a road and you go down that road, and you might find, well, I was going to be, I wanted to be a CISO, but you know what?
This looks super cool. So now I want to get there.
[Kevin]
I think there's something to say about not being so focused on a singular goal or single technology or topic that you lose everything else. You have to play around. You have to explore, even if it's just in your free time.
You're like, oh, I wonder how networking works. Or I wonder, let me spin up a server and just play around with Linux. I'm going to see if I like it or not.
That is really important, I think, in figuring out your ultimate destination.
[Mike]
I think for me too, and I realized this probably early in the game, was that you can have that path laid out for you if you want, but at the end of the day, like I said, you don't know what doors are going to open. And for me, it's been about the relationships. It's been about shaking hands.
I don't know what I'm going to be in five years from now. I have no clue. But I keep shaking hands.
I keep meeting people and opportunities arise. And so for me, it has been the people that I've known and the relationships that I've grown. Almost every move I've made in my career has come from an existing relationship that has been created, not from an Indeed application.
So to the people that have the perfect resume, the perfect plan, the five of the best industry certifications, and they come to me for the same types of things, like, can I land a role? I've got experience, I've got the search. I'm like, no, tell me about your network.
Tell me about, you're not the TCP IP kind. Stop focusing on that as much as you can.
[Kevin]
The people network. Mike, are you a people person? Would you consider yourself an outgoing people person?
[Mike]
I think so. Yeah. I mean, I'm an extrovert.
I used to say I was an extreme extrovert. I think as I'm getting older, that put me down a little bit. But yeah, I mean, I just, for me, I thrive when I'm in a crowd of people and just having great conversations.
[Kevin]
I find it's a unique combination of technology, mixing technology with extrovertism. I guess it's a special skill set of people that are not the typical. So I like asking that question because I do see a lot of introverted people in our industry and them trying to network with people, them trying to connect with people is a whole different challenge.
[Mike]
You know, I think I wrote a chapter about introverts, and I put a book out a couple of years ago. It's on Amazon. And I wrote a chapter in there about being introverted in this industry.
And at the end of the day, I have a ton of respect for introverts. I think they have the ability to be much more successful than us extroverts because introverts have that skill of sometimes being the quietest one in the room. But when people are talking, they're not just hearing, they're listening, they're analyzing what people are saying.
And when they speak up, guess what happens? Everyone stops and listens to them because when they speak, it's normally something that means something versus me just spouting stuff out. And I think what extroverts don't have is, or it's rare, is that ability to kind of not be the person to be able to listen.
I think introverts have a huge advantage there.
[Mike]
They can relate.
[Alexis]
I mean, there's definitely a lot we could learn from each other.
[Mike]
Absolutely. Absolutely.
[Alexis]
I wanted to ask also about not skipping the basics and being really intentional about going through the fundamentals or taking necessary steps to support you later on in your career. In a lot of ways, I'm in a more senior role now. I mean, at 28, I'm a technical evangelist.
I work with all these different companies. And I don't feel like I personally really got a solid understanding of the fundamentals. I came from aerospace engineering.
I took my certifications. I went to Cisco. I skipped a couple steps.
I've landed in sales, which typically when you're a sales engineer, a solutions engineer, you've worked in industry for five or 10 years before you even get that role. And Cisco had this accelerator program. I was super blessed to get into it.
I skipped some steps, right? I can't really go back and get them. I can try, but it's not the same.
And so how did the fundamentals help you or how do you see them still helping you later on in your career? Because there's a lot of people that they just want to get straight into cyber. And it's hard to go back in time, right?
[Mike]
Yeah, absolutely. So I would say the first fundamental that I learned because I had to was people's skills, right? So when I was on the phone at that ISP and people were calling me, not everybody's friendly.
So you had to learn patience. You had to learn to defuse situations. You had to learn to always be the same person, no matter how a person's kind of treating you, right?
So that was the first fundamental that I learned, was that people's skill. And I'm still learning, right? I think we're all working progress there.
From there, I would say it was learning operating systems. It's hard to be a security engineer if you don't understand how Windows actually works or how Mac works or Linux, whatever. And then from there, it was learning the backend of the servers.
How does Active Directory work? And back then, it was like network shares and so on. And so how is all this working behind the scenes?
So it was the operating systems, that. And then for me, it was also learning how networks are talking and packet analysis and so on. And you're right, people, they do try to skip.
There are rare cases where you're successful. That comes down to how well you can market yourself and having the right connections and the right opportunity. Lexis, you've done well in this field and you've marketed yourself well and you've been very blessed there.
You're a rare case, right?
[Alexis]
But what I'm saying, the point I'm trying to make is just because you do that doesn't mean you should do that. I'm in a situation now where people assume I know a lot of things and I do know a lot of things, but they're like trivia, like Swiss cheese. There are large holes.
[Mike]
Yeah. I think you have to pay attention to the basics because you're right, it's hard to go back. Normally there's a cost and a lot of time to go and back.
And so if you're going to get into cybersecurity, understand operating systems, understand servers, understand cloud services, understand networking, how networks talk. One thing that when I'm doing interviews, one thing that I always do is just for that baseline of knowledge, I'll start asking ports and services. What's port 80?
What's port 53? What's port 23, 22? And you would be shocked at people that have a college degree in IT or even cybersecurity that don't know what 53 or 21.
And not that everyone has to know those, but for me, that's always been a good way to kind of see what their baseline knowledge is. Being able to understand, at least you don't have to understand those, you know, totally, but being able to rattle off, you know, some of the most common ports, it's going to, that's going to help you because you're probably, I don't know if I've ever done the ones that I've done myself, right? Interview in four positions.
I don't think I got through many tech interviews where they did not ask me some of those questions. So you have to have that baseline.
[Kevin]
All right, quick pause because this episode is sponsored by Meter. If you've ever managed a network built from five vendors, six dashboards, and a bunch of contracts that no one fully understands, you know how fast that turns into chaos.
[Alexis]
What usually gets overlooked is the pressure that puts on the people running it. IT leaders need predictability, engineers need control and visibility, and most stacks just weren't designed for that.
[Kevin]
That's where Meter's model is different. They deliver the entire networking stack, wired, wireless, and cellular as one integrated system. They design the hardware, write the firmware, build the software, manage deployment, and run support.
One platform, one partner.
[Alexis]
And that means fewer handoffs, fewer tools, and clearer ownership. It scales from branch offices and warehouses all the way to large campuses and data centers without turning network operations into full-time vendor management.
[Kevin]
If you care about uptime, accountability, and not being the middleman when things break, this is worth a look.
[Alexis]
Thanks to Meter for sponsoring this episode. You can go to meter.com slash liu to book a demo now.
[Kevin]
That's m-e-t-e-r dot com slash l-i-u to book a demo. Now back to the episode. Now was all this self-taught on the job learning or did you do certifications?
[Mike]
Good question. I was never, okay, I'm not a search chaser now. I held my MCSE back in the day.
Word on the street is it doesn't expire. I sold my NT4 and my MCSE. I think I threw those cards out recently.
I was a search chaser then because I was in the beginning of my career. Then later on, I realized that your search are great. It's a great way to show that you've done work.
But I've also seen a ton of people with those certifications that if you start asking them questions, they don't really have an understanding because they study well, they test very well. But when you start asking them how this works or how that works, that's when they break down into that conversation. It starts to slow a little bit.
I think certifications are great, but at the same time, I don't think you can just rely on them. Now you have systems like TriHackMe, Hack the Box, doing your own VM. We have the ability to do that now at almost almost no cost.
In fact, I didn't have that. I had to buy servers and things like that and use decommissioned stuff to learn.
[Mike]
It's so much easier now to have those resources.
[Kevin]
Now as a CISO, would you recommend someone who's interested in cybersecurity to do TriHackMe or do some of those simulations instead of in lieu of getting a more advanced cybersecurity certification?
[Mike]
Well, I think it depends on the situation. Everyone has a different budget. Everyone has their own personal life.
Maybe you can't commit to a nine-month bootcamp. Maybe you can't commit to a four-year degree. Maybe TriHackMe or Hack the Box in the evenings after you're done working and you have some time at midnight.
Maybe that's a great choice. I think it's different for everybody. To me, at the end of the day, it's about having the knowledge.
Whatever it takes to obtain that knowledge, I learn better myself by messing with stuff and learning. I have a hard time learning when I have someone lecturing to me or someone on stage trying to teach me. I can't learn that way, never could.
For me, it's being able to push those buttons and building that muscle memory more than hearing about the theory.
[Alexis]
Mike, you said you took a couple of different certifications. I believe you told us before the show that you maxed out your credit card.
[Mike]
Yeah. I called the credit card company off my limit. I knew what it was going to take.
I took some SANS courses. I took three or four. At the time, they were five or six grand apiece.
I think they're much more than that now. I remember I called over the phone to sign up for these classes. I didn't even do it over the internet.
I slammed three or four classes on my card and maxed out. You can imagine that credit card payment, but it's kind of terrifying. I took a huge chance on myself, but for me, putting something on a calendar doesn't always make me commit.
When I'm putting my own money and life on the line with a credit card, now I'm committed. This has to work or I'm going to go back and ride a garbage truck again. I took SANS courses.
At the time, I didn't even have the money or room on my credit card to pay for the certifications at the end of each one of those, which were, I think, $500 at the time. I just wanted the knowledge because at the time, this is not a plug for SANS, but at the time, they had great courses. I could go through step by step.
I was doing the things to learn them. I didn't care about the certification, so I just didn't chase it. That never helped.
I've never been held back.
[Alexis]
Can we talk a little bit about your mindset while you were going through that? That's kind of scary, right? This was your first venture going into something structured with cyber, outside of networking, outside of your server background you had.
How did you cope with the fear that this is going to work out or else? I feel like a lot of Gen Z or newer students, they almost want a guaranteed result. If I'm going to put this effort in, I want to know that I am going to get this job.
If I take the certification, I want to know that I can do X. A lot of times, there's no guarantees.
[Mike]
Yeah, you're exactly right. When I did this, and disclaimer, I don't recommend to any of the listeners to go slam down a bunch of costs on your credit card. It probably wasn't the best choice, but for me, I knew.
As far as my mindset, I've always been a semi-confident person. I knew that I wasn't betting on anybody else. I knew that I was betting on myself.
I knew that I had the work ethic to go through it, but even more than that, I had the curiosity to go through it and really want it to work. I knew that the only way I would fail was if I just quit. It might take me a year.
It might take me two years, maybe three years to land that perfect job or to land that next role, but for me, I was betting on myself. For those that are transitioning to this field or trying to level up in this field, you have to remember that things aren't always going to work out the way that you plan them. There are no shortcuts.
The only people you can really bet on is yourself. If you have the confidence to do that and you have the work ethic, the other thing, too, is having that support network, having those friends or people in the space. We talked about shaking hands and building those relationships, creating that environment around of other people that are doing the type of work that you dream of doing.
I was doing that at the same time, so I felt like I had a good support network.
[Kevin]
I'm curious because you said you don't deal well with it, but you don't learn the best through classes and being lectured to, and you didn't get the actual certification for spending all this money on these courses. Was this something that you could not learn yourself or self-study, that you spent a ton of money to not get a certification and to learn something through a method that you admitted is not your best method?
[Mike]
I needed some type of structure, so these particular courses were self-driven where they were lapsed. I was using the tools. This was pre-TryHackMe, Hack the Box, and so on.
I was using NMAP. I was learning Kali, OpenBoz, Metasploit. I was getting to play with all of those tools, but instead of reading on the internet how to do it, this kind of gave me that walkthrough, and it was very structured.
I had a timeline to go through it, and for me, that seemed to work very well. It did match my style of learning, but I definitely had to have the discipline to maybe instead of going to shoot hoops that evening, I'm going to sit down and mess with Metasploit, and I come out of it with some pretty cool knowledge.
[Kevin]
Now, was that something easy for you to do, to give up your free time at night to do this stuff, or was it a struggle?
[Mike]
Not all the time. I wrestled through high school, but my favorite sport is just pick up hoops, right? At the age I did all this, I was, oh yeah, I love hoops, and I'm 5'4".
What does that tell you about my skill? Yeah, I mean, I lived in a very small town. There was really nothing to do except go shoot hoops with your high school buddies, and so yeah, I gave up a lot of that time, and of course, you have that peer pressure.
I'm like, I'm building something for myself, and so it paid off.
[Kevin]
All right, Mike, you have said that you take risks, you invest in yourself. You currently work for yourself. Is that right?
[Mike]
So I started a company about 12, 15 years ago. I was acquiring about four years ago. Okay, got you.
About four years ago, I was acquired, but it was a great company, and they made me a really nice offer to stay on board with them, so I stayed on board with them, but I decided not too long after I took these SANS courses, I got into red teaming, penetration testing, and so on, and I did. I decided to kind of spawn off on my own, and started from scratch, and took that chance, and landed a deal or two here or there, and started building that side of the business, and over time, I think we maxed out at about probably 12 to 15 employees. It wasn't a multi-billion dollar business, but I was feeding something that I started.
I was feeding multiple families, and it was so much fun, and it grew, and about four years ago, I had no plan to sell, but I had moved to Missouri, and had some life changes, and an offer came on the table. They found me through the LinkedIn platform, and made me an offer, and I thought about it for a while, and I thought, you know what? Sometimes these offers don't come by too often, so I took it, but I wasn't done.
I still think I'm young, and so I thought a lot of time, and so they made me an offer to stay on in a vCISO-type role, but also because of the experience that I had, and this is like those opportunities that you don't think about as you're going through your career. They'd also put me kind of attached to their business development, marketing side, and so on. So I started as a vCISO, but I also serve on the business development side, and so on, so it's just a great role.
We've got a great symbiotic relationship with the things that I do online, things that they do, and it's worked out extremely well.
[Kevin]
Well, walk me back through. So you're just the certifications, you got all this new knowledge, and what was the thinking to venture out and create your own company? What was the presses for that?
[Mike]
Yeah, absolutely. So I've always been a person that I've always had that entrepreneurial blood, I guess, and I always wanted to just spawn off on my own just to see what I could do. And I knew that I could create something in the pen testing side, that sector was really starting to blow up about that time, and I knew that there was demand there, and I thought, you know, I could fight to get jobs in penetration testing and so on, or I can just spawn off on my own and talk to clients.
And so that's what I did. I spawned off on my own. And besides those credit cards, I didn't have a ton of debt, because I started this from scratch, and out of my house, and then eventually had a nice office and so on.
But I guess it was just wanting to see what I could actually do with it. And being a people person, you know, just, you know, it allowed me to spend more time with clients, you know, bring people on board, have my own teams, and so on. And it's just a great, it was a great experience.
And it also allowed me to teach some of the things that I learned, as well.
[Kevin]
Did you feel ready to do that? Like, that's the like, being in tech, you know, pretty much any of us can consult, right? We could all break out and do our own businesses and consult, but I never feel like I'm ready to do that.
I need the jump. How do you get there?
[Mike]
Well, the thing is, there's never a perfect time. The perfect time is now. So I didn't know if I was going to be successful.
But again, I knew I was betting on myself. I had experience at this point. So if it didn't work out, I put my fallback obviously was to go get a job and start paying down that credit card debt that I had.
But, but no, I just decided that the times now and I jumped out on my own and you know, you're living from contract that back then I was living from pen test pen test, you know, I didn't know much about pricing and so on. And so I was looking at competitors and I was trying to give them a better product than what other competitors would give them but for much less cost. And for me that worked.
I also over the years did a lot of like SEO marketing and stuff like that. So over time, I was able to get the website in the top 10 when people were searching for certain things. And so that was that was huge for me.
And so yeah, I wore a lot of hats. For me, it's been, you know, like the team I work with now and so on. They're like they're experts at the top of their game, right?
And I would say back then, I was average at everything. I wasn't like, superstar pen tester, I wasn't a superstar anything. But my, the key to work for me back then was I knew a little bit about a lot of things.
And that really helped me I could sit and talk to marketing team, I could write so W's, I could talk to the end client, I could build teams out. So I knew a little bit about a lot of things, but I wasn't an expert in anything. But I think that really helped me in my career instead of siloing myself into being a world class pen tester, right?
[Mike]
So I had to have all of those pieces.
[Kevin]
Now, there's all sorry, like, was all what are all those skills you had ahead of time? Or do you have to learn this as you went and just kind of like figure it out?
[Mike]
Yeah, so good question. So the you know, going back to the basics, right, I had the people skills or somewhat, you know, I understood networking understood systems, I understood ad, I understood operating systems. And I will say those four sands classes, like it took me about a year to get through them all.
I didn't rush through them. So I had a year of building some friendships, getting to know people talking to people doing some volunteer stuff, and doing these sands classes at the same time. So I felt like when I was done with my sands classes, I felt like I was ready to at least get started.
And so I also knew my limits. You know, if I saw an engagement that was going to be way over my head, I wouldn't take it. But if I saw an engagement that was in my wheelhouse, I, you know, create an SOW and put a bit out there and see if I can land it.
I was good at using my resources to I knew other people in the field. So if I ran into something that I wasn't familiar with, I would call in resources. And, and then slowly, I would call in those resources if they did a great job.
So over time, I hired him as an FTE. And so that's just kind of how that started. But no, I wasn't a, it certainly wasn't a pen testing pro.
And I decided to start that branch of business.
[Alexis]
And how did was there any parallels, right? Working when you're customer facing in a more of a consulting business owner role, and what you were doing on help desk?
[Mike]
Yeah, people. It comes back to people being able to communication so huge in this field. And it's cliche, because everybody says it, you have to know how to communicate, right?
So it's a world class, soft skill to have. But at the end of the day, it comes down to being able to look people in the eye and communicate. So whether it's over the phone, supporting someone trying to get their desktop fixed, to talking to an end client about a $30,000 penetration test, it's being able to hear what they really want, being able to kind of analyze that, and then provide them a solution that can give them the result that they want.
When I read a book, long time, it wasn't a long time ago, actually, recently, but it's by Donald Miller. The title of the book just left me, but the book talks about, you know, speaking in a problem solution results, or thinking with that mentality, anytime you're communicating with someone, talk as if you're addressing their problem, by giving them a solution that's going to help them reach their end result. And that's kind of how I've structured my whole career in communication at this point, even going back through my life, just come to people with solutions to their problems and give them the result they want.
[Alexis]
Because they need to feel like you're on their team. Absolutely. You are on their team, and you are here to help.
Even if you don't know the answer, you're going to do everything you can.
[Mike]
Better try. Absolutely.
[Alexis]
Amazing.
[Mike]
Marketing made simple. That's the name of the book. That's it.
Just don't.
[Alexis]
I'm drawing a blank. Mike, is there anything else we haven't talked about? Any stories?
[Mike]
Yeah, you're going to have bad days. This is a tough industry. For those that are either aspiring to get into this field, or you feel like you are at a ceiling.
You're all valuable. You all have your own unique story. There's no shortcuts in this field, and you're going to have bad days.
You're going to have days that you're like, man, I'd rather be a farmer because cybersecurity sucks.
[Kevin]
Every day, what are you talking about?
[Alexis]
Everyone goes out to the woods.
[Mike]
I'm like, go pick strawberries or apples or something. Not deal with anybody. You're going to have bad days.
The opportunity that this field provides people with is amazing. I think all of us here work behind our laptops for the most part. It gives us the ability to have opportunity from anywhere in the world.
Have a balance too. As people are looking for jobs, as they're trying to transition through this career, they kill themselves 60 hours a week at trying to do the search, reading, studying, their VMs, whatever it is. You have to have a balance because if you don't, you're going to deconstruct before you ever see any of those goals.
You have to have that balance. You have to understand not every day is going to be good. And what you're going through now is a very short season of life.
When I was going through all those SANS classes, I felt like forever. It was just the right move. But looking back, there was a very short season of life that changed my life forever.
Anyone who is trying to push forward, realize that the struggles you're going through now, it's a very short season.
[Alexis]
Well, and sometimes it's hard when you're in the thick of it.
[Mike]
You don't see it.
[Alexis]
You're in the day-to-day. You've got your nose to the grindstone. When really, like you said, it could be just one small decision or meeting someone, one new introduction, one LinkedIn post, which can be anything.
[Mike]
And everyone thinks when a system goes down, it's the end of the world. Well, guess what? Systems are going to go down, but 4 or 5 o'clock comes every day.
And by the end of the day, you're going to have it figured out. And tomorrow, you're going to have another problem. So that used to get me through.
Back when I was in charge of hard drives failing and systems going down, which I'm not really in charge of now. I can't tell you how many Christmases I worked through, how many Thanksgiving dinners I worked through. But that's all just part of the journey.
You just have to realize you're going to have days like, it's just life.
[Alexis]
Mike, I'm laughing because you're like, not every day is going to be like that, but you're going to wake up and tomorrow, there's going to be a new problem. It gets better. And then you're like, tomorrow, it's just going to be something else.
[Mike]
But that's where having a passion for what you do really comes in. You really have to enjoy what you do, because if you don't enjoy those things, you've got to do something else.
[Alexis]
I've got one question to ask at the end of every show. If you had one piece of advice that you could give your 18-year-old self when you first started on this journey, what would that be?
[Mike]
I think it goes back to some of the things we talked about earlier. Don't sit there and write down your entire life plan and think that it's going to go the way that you want it to go. Nine out of 10 times, where you're going to end up isn't going to be what you have a plan for, but it's going to be a much better place.
It's going to be something that you've learned about, that you have really grown to love, and you're going to get down that path. So that's the first thing. Second thing I would say is this is a people-first business.
We're all in tech. This is a people-first business. Don't burn bridges.
Make as many friends as you can. Surround yourself with good influences, because they are going to be the ones. Find people that inspire you, and then try to learn from them.
So that's the advice.
[Kevin]
I love we get lost a lot of times that we are a service industry. At the end of the day, we provide a service to customers. People forget that all the time.
They think they focus on the tech, but at the end of the day, we're all just service.
[Mike]
Yeah, absolutely. And the sooner you figure that out, the sooner you're going to see success. Great advice.
[Alexis]
Well, Mike, thanks so much for chatting today. If people want to keep up with you after this show, where can they find you? I know you post frequently on LinkedIn.
[Mike]
Yes, I would say that's the number one place to find me. Just jump on LinkedIn, type in Mike Miller. I got a blue sports coat on.
That's probably the easiest place. I'm on the X platform. Just look up Mike Miller Cyber there as well.
And if you can't find me there, just Google Mike Miller Cyber. You'll find something about me. But yes, anyone who needs anything, feel free to reach out.
I'm always happy for a new deal.
[Alexis]
Amazing. Well, thank you, Mike. That is it for this episode of Life in Uptime.
Huge thank you for coming on. And thank you to our audience for listening. If you guys enjoyed this conversation, be sure to follow the show so you never miss an episode.
And if Mike's story today gave you something to think about, please share it with a friend or a colleague who might eat it. And until next time, keep learning, keep building and keep your uptime high.`,
  },
  {
    episodeNumber: "010",
    slug: "ep-010-personal-technical-and-slightly-unhinged-listener-q-a",
    title: "LIU010: Personal, Technical, and Slightly Unhinged: Listener Q&A",
    guest: "",
    guestTitle: "",
    guestCompany: "",
    guestLinkedIn: "",
    description: "Kevin and Alexis take a break from their regular interviews to answer your questions! Join them for an unfiltered, wide-ranging discussion including the value of certifications, online learning pros and cons, how networking engineering jobs are changing, how to maintain a healthy work-life balance, and more.",
    airDate: "March 12, 2026",
    packetPushersUrl: "https://packetpushers.net/podcasts/life-in-uptime/liu010-personal-technical-and-slightly-unhinged-listener-qa",
    youtubeUrl: "https://youtu.be/uilb6KNY92I",
    transcript: `[Alexis]
Every Uptime story has that moment when something breaks and everyone looks at you. StatSeeker helps you stay ahead of that moment with 60-second polling, automatic discovery, and deep historical visibility across your entire network. So when issues hit, you already have the answers.
Start your free trial at statseeker.com slash uptimestories.
[Kevin]
Welcome to Life in Uptime, the show where we talk to ourselves about questions and answers. This week, we don't have a guest. So we're abandoning our normal format and we're just going to talk to you guys and answer your questions.
And as always, I'm joined by Alexis. So Alexis, how are you today?
[Alexis]
I'm doing great. I'm actually having a fantastic day and I've been really looking forward to this. We get questions all the time in our DMs and our comments.
And like Kevin said, we really wanted to dedicate this episode to answering as many as we can. So thank you to those who submitted. And we are going very off script.
So I hope you enjoy it.
[Kevin]
Unfiltered. This is Life in Uptime.
[Alexis]
Oh, my God. Kevin, do you want to start?
[Kevin]
Uh, yeah, sure.
[Alexis]
Pull up the sheet.
[Kevin]
Well, we got the sheet. We took all of our... Alexis and I both did a prompt on Instagram stories and we've combined those questions and we kind of picked out some of that.
Because there's a lot of repeats, to be honest. A lot of general questions about the CCNA and what certifications and best paths and all that kind of stuff. So we tried to consolidate a little bit.
So if you don't hear your question, but you did have something related to those, we still appreciate it. Thank you for your question. But we can't, we can't list over repetitive like too many times.
So, all right, I'll start. So the first question I see here is from Ivan Salum. And I hope I pronounced that right.
What do you tell people saying networking jobs aren't available like before? Do you want me to start that one or do you want to hit that, Alexis?
[Alexis]
I've got a hot take on this one.
[Kevin]
All right.
[Kevin]
If you got a hot take, go for it.
[Alexis]
I think that networking jobs... I feel like a lot of people right now are kind of scared with AI. That's another question we get all the time is, is AI going to replace network engineering?
Is this still something I should study? And AI isn't going to replace networking. It's just going to make it different.
And I think that there are plenty of jobs that involve network engineering concepts. But what I'm personally hearing and seeing is that network engineers are being asked to take on much more infrastructure. So you're no longer just a network engineer.
Maybe you're working a little bit with the cloud. Maybe you're doing a little bit of cybersecurity. It's more integrated systems, right?
And you, because the network touches everything, kind of become the tie in between all of these systems. And I think with AI, the scope creep of the job of a network engineer is just going to continue to creep, which is kind of cool because it means that you get to dabble in a lot of other technologies. But I think that it's not that there's not as many network engineering jobs.
I think that there's even more. They're just kind of expanded into other functions. What do you think?
[Kevin]
Yeah, I agree with that. I think the roles of a route switch network engineer is less of those jobs because there are very few just straight route switch network engineers anymore. Now you have to have a laundry list of abilities and knowledge to be effective in the modern enterprise network.
And I think we get AI questions a lot, and I think we're not really sure where AI is going right now. I think that AI, there's too many questions around it still of what AI looks like and the skills that you'll need in a modern AI workforce to really use it effectively. There's that, I think we've all heard it before, that AI is not going to replace your job.
It's the person who knows how to utilize AI is going to replace your job. And while I agree with that, it's very, very generic. We don't know what that looks like yet.
We don't know you need to have X, Y, Z skill in AI to be competitive or to be, you know, in the workforce now. So a person that's replacing, quote unquote, replacing you that has AI knowledge, there's no concrete information about what those skills are. So while I, so I agree with that saying, it's still a lot of unknown stuff.
So what I would tell people saying that networking jobs aren't available is they are available. They're just harder to get that the entry level jobs might be less that, you know, it's, it's the senior level jobs. It's the people who need a laundry list of knowledge and abilities to get those jobs are, are, um, rarer, but they're, they're still a lot of jobs around.
It's not, not going anywhere. There aren't less networking positions, just more duties.
[Alexis]
They're different. They're different.
[Kevin]
Yeah, exactly.
[Alexis]
Okay. You went really serious with the first question. I'm going to, I'm going to bring us back.
[Kevin]
I will. I went deep.
[Alexis]
This one's from Dave 405. He wants to know what's the vibe. You went the complete opposite.
[Kevin]
That was like.
[Alexis]
I know. I thought we were going to do a fun one to kick off and you just dove right in.
[Kevin]
It was the first one on the list and that's how I work. You know, I, I get that engineer brain, step one, boom, get it. Um, what's the vibe?
So I'm old. I don't even know what that question really means. What the vibe, like the vibe is, is I don't, what I try to make the vibe.
I can go with that. I try to make the vibe where I'm having fun and making the best out of any situation. That's, that's my vibe, I guess.
That's what I try to do to, to anything. But what does that mean? What does the vibe mean?
Alexis?
[Alexis]
Like, how are you feeling? Like, how are you doing like a checkup?
[Kevin]
Like a, yeah. Okay.
[Alexis]
Yeah. Uh, I'm having a great day. I, um, this was my fifth day skiing.
Um, I'm just learning. I spent a lot of time falling down a mountain. I feel like my face is really wet, red and wind.
[Kevin]
Did you actually fall down a mountain or is that you being like, no, I'm not being dramatic at all. Um, please tell me someone got it on, on, on recording.
[Alexis]
Oh, 100%. Um, this is a picture of like, I know they're like, no one can see. I know.
I know. I'm pulling it up. They're like, it's blue.
It's easy. I don't know if you can tell how steep it is. It is.
No, anyways, that's Kevin's in Florida complaining.
[Kevin]
The vibe is you fell off a mountain and you're having fun skiing and being with your people.
[Alexis]
Yeah. We're having a great time.
[Kevin]
That's awesome.
[Alexis]
All right. Take a question.
[Kevin]
Um, all right. So segwaying, since we're talking about you skiing down a mountain on a workday in the middle of like the middle of the workday. Um, I think that we had a couple of questions about you traveling and how you, um, stay, I think you're staying eating on a good diet while you're traveling.
Um, Mr. Steven macaroni macaroni. Um, how do you keep a good diet traveling so much?
[Alexis]
So that's a really fun question. It kind of, it depends on where I am and how strict I'm being. So technically what I try to do is no sugar, no alcohol, no dairy, no gluten.
Um, basically, yeah, basically no fun. Right. If it, if it isn't whole foods, I really try to avoid it.
Um, I try to be kind of mindful of like portion sizes and, you know, eating only when I'm hungry. Sometimes I do travel with like a portable food scale. Um, sometimes I'm tracking macros, sometimes I'm not.
Um, you really, really, really have to force yourself into time zone and like making sure you're getting up and working out. Um, this weekend, Switzerland is actually really weird for me because there's no gym in the town that I'm in. So I'm trusting that I'm just getting my work done.
[Kevin]
Oh my gosh.
[Alexis]
It's been hard. It's been hard. It's going to be like the longest period of time I've gone without like actually lifting.
Um, but I'm trusting that you do like calisthenics and stuff like this.
[Kevin]
You can do like pushups and sit ups and like, yeah, I'll travel.
[Alexis]
Um, I travel. Manduka has a travel yoga mat that's, I think it's like two millimeters and it's only four pounds. And so I'll travel with that.
And then like two pound Pilates hand weights. Um, and generally like if you just follow along with the YouTube video, you can get like a decent workout in and they're pretty nice because they're 30 to 40 minutes. You can do them with like minimal space in a hotel room.
Um, the diet is really, really the hardest part. Um, I think my favorite if specifically for conferences or like work travel, if I'm assuming whoever's asking this is like doing some work travel, um, I'll actually order meal preps from local meal delivery services to the hotel that I'm going to. And if the hotel doesn't have a fridge in the room, you can tell them that you need a medical fridge because you're on a special diet, which is true.
But a lot of foods upset my stomach and I can't function at work if I'm not performing. Right. And so I need the food.
Um, and then you'll have a mini fridge with like meal preps. Sometimes you have to eat them cold if there's no microwave, but like, it's better than, you know, eating greasy French fries and having an upset stomach and feeling like all the time.
[Kevin]
So now can I pull the curtain back here a little bit? Cause sure. You say all that.
I know, but I want to give our audience an accurate representation because we, we, we just got back from Amsterdam a couple of weeks ago and we were at the celebration, like the celebration story. And every single time we go to a celebration, Alexis's first thing out of her mouth is I want ice cream. Where's the ice cream?
So she had ice cream and then she had churros, like she had all this junk food.
[Alexis]
And then I, and then, you know, we're leaving out and then I got food poisoning and immediately after Cisco, Libby Amsterdam, I spent, Oh my God, 10 hours in my hotel room, just like sick, sick as a dog. I slept for 48 hours straight. The only reason I survived is because I called one of my coworkers and he brought me like activated charcoal and medicine from a drug store.
I honestly thought I might have had to go to the hospital. It was like top two times I've ever been sick in my whole life. So it kind of backfired, but I have a nasty, nasty sweet tooth.
And the hardest thing for me traveling is going to like a grocery store in a new country and they have all the, the different candies. I'm like, I can't, I can't try all of them. And so I, I, I kind of struggle with like all or nothing.
Like I'll either eat nothing or I'll buy like six packs. It's a work in progress.
[Alexis]
I'm just giving the people.
[Kevin]
I, to give people an idea of like how it was on the conference floor with you, like we're trying to like videos or so we're hanging out together and making videos and stuff. And like we're scourging the place, trying to find stuff to eat. You end up just eating chocolate.
Like someone gave us this very, very nice person.
[Alexis]
They were wonderful.
[Kevin]
Yeah. We had so many people that came up to us and they were awesome, but they gave us chocolates and like Dutch candies. And that ended up being Alexis's lunch and dinner.
[Alexis]
Well, because what happens is like you get, if these big tech conferences, like you get so busy and you're in and out of sessions and you're walking and there's a lot of movement and people are stopping you and you're talking and like, it's very chaotic. And then you look and it's like two o'clock and lunch is over and you're like, and then there's nothing to eat for miles. Whether you're in Vegas, I don't care what conference I'm at.
There's no good food. Like if it's AWS reinvent, if it's Cisco live in Las Vegas, like you might get like a Starbucks and you know, you get like the most mid food ever from a Starbucks in Vegas when the line is 50 people long or it's like overly priced and greasy and it's just like not good food, which is again, why I prefer to have the meal preps. I did not adequately prep for Amsterdam, which is why I was eating chocolate and strew waffles on the conference room floor because there was nothing else.
[Kevin]
Okay. You get a pass. You get a pass.
I just want to make sure that we're honest in this Q and A that we're not like, I only eat prepared food and I'm like, I will call you out. I want you to call me out too in this Q and A. If I start BSing, call me out.
[Alexis]
I'm not BSing. I do order meal preps most of the time.
[Kevin]
I was not accusing you. I was just saying, you know, I want us to be honest. Um, okay.
So I'll do, can we do a hard one next one?
[Alexis]
Like a, yes, I'm going to pick an actual technical question. Um, okay. I like this one.
Um, from tips, shush tips, tips, shush tips, tips, shush, what key personality traits are most valued as a pre-sales network engineer? I think this is a great question and I'm going to answer it from my point of view. And then Kevin, because you're on the other side, you've been a customer work.
[Kevin]
I want you to, we talked about this before and I have a feeling we're going to be aligned on what we say, but go for it.
[Alexis]
Okay. Um, I think the most important trait to have, if you're going into pre-sales, like I was a solutions engineer at Cisco and you can be a pre-sales engineer at almost any, any vendor, they all have them. Um, number one is being a teacher.
Like you like teaching, you genuinely enjoy like teaching technology to others and wanting to help people. Um, at the end of the day, if you're working as an SE for these vendors, a lot of times you have, um, other architects or other engineers that you can lean on who may have more experience in you or maybe more technical than you, and you are acting as the voice of the customer to help advocate for them in your organization. And a lot of times what happens is you'll get asked questions and you don't know the answer, right?
Maybe it's like over your head. Maybe it's a new feature that you just haven't been up to speed on yet. Like there's a million things going on in the industry.
You can't always know everything all at once. So, you know, just being able to be honest and say, Hey, great question. I don't know.
I'm going to go find out for you going, finding the answer, learning the answer, and then teaching it back to your customer. And if, if you can do those things, I think that's what makes a great SE personally.
[Kevin]
Good answer. Good answer. Good answer.
Okay.
[Kevin]
Kevin, what's your answer? Yeah. From the, from the customer point of view, I would say that number one, being honest about everything.
Like don't, don't BS me. If I can tell you're BSing or I get the, even the hint, the whiff that you're BSing, you lose all credibility. And once you lose credibility, we're done.
Like there, it takes a lot to come back. You make one mistake and it takes, you know, a while to earn that trust back. Number two, I would say don't, I don't want to be sold to, like I don't want to have the hard sell, the, like the kind of used car salesman like thing.
[Alexis]
You shouldn't be forcing solutions. It's educating, not selling. But even your job, your AM's job is to sell.
Your job is to educate.
[Kevin]
Yeah. But it's not even, don't educate. I don't know.
The solution that you're telling me about or educating me has to tie back into our environment. It makes sense for our environment. Don't try to take a round peg and put it in a square hole and tell me that it's going to work or it's, it'll fit.
Like, cause I will listen to you. We'll, we'll do a test. And if it doesn't work, you're losing credibility there too.
Or like, okay, this person, they were just trying to sell this solution or, or implement the solution. And they didn't really know our environment or how it's going to integrate, how it's going to work.
[Alexis]
Well, and something, something I always said to my customers when I worked at Cisco was that, you know, I can teach you this. You are the one, ultimately I'm not in your environment every day, right? You, you can tell me all of the things and I can help educate you on what I think is going to work best.
But ultimately you need to be the owner of the decision with the technology that you're moving forward with because you are the one that is going to have to implement it and use it every single day. And I have my opinions on what I think you should use based on my experience, but ultimately you are the one running your network. It doesn't hurt my feelings if you make a different decision.
Unless we're like six months into the sales process and, you know, jerk us around a whole bunch and I've bent over backwards for you multiple times trying to help you out, then it might hurt my feelings a little bit.
[Kevin]
But yeah, same. So pretty aligned.
[Alexis]
Yeah, same, same.
[Kevin]
Okay.
[Kevin]
I have to pick the next one.
[Alexis]
Yes, you do.
[Kevin]
Okay. What's the smallest thing that can absolutely ruin your day? This is from Natalie Doidy X.
Doidy? Doidy. The smallest thing that can absolutely ruin your day.
[Alexis]
Um, man, I really don't like washing my hair.
[Alexis]
Like if you're a girl, Natalie's a girl. So she understands them. They're not going to understand.
But I wash my hair maybe, I don't know, once every four to five days. And right now it's really long. And like, I'm in another country and finding a blow dryer that works with the voltage and the outlets that I have available has been a struggle.
And, um, it's just kind of like a, I have to do that today. And it takes a really long time and I can't get anything else done, which is also why I'm wearing a hat because I had a helmet on all day. And I, you know, we're not dealing with that.
[Kevin]
Um, that wasn't a very good answer, but no, it's, it's, it's an unfiltered, accurate answer. That's what we're looking for here.
[Alexis]
It's because I have to wash my hair tomorrow. That's on my mind. How about you, Kevin?
I gave you some time to think.
[Kevin]
Um, yeah, I'll go. So there's actually two that I'm dealing with right now. One's work related.
One's personal and the personal one's kind of gross. I'm not going to talk about it. It's not that sound.
That sounded like it was weird.
[Alexis]
Yeah. Now you have to kind of explain it.
[Kevin]
Okay. I'm getting over a cold right now. I'm like sick and I have a mustache and the nasal like stuff with a mustache is gross.
This thing is terrible. It makes me want to shave my mustache off. I've never in the last like two years of having a mustache.
This is the first time I'm like, I want to get this thing off me so I can actually fully blow my nose for once and not feel gross.
[Alexis]
I remember you without a mustache.
[Kevin]
It's been a while. It's been two years.
[Alexis]
If you shave your mustache, I think the internet would go crazy. Y'all don't know who you are. It's like when I took my glasses off and everyone was like, who's that?
[Kevin]
Yeah, exactly. It hit a rebrand completely. I did.
Okay, but I'll do a work related one. And that is, uh, so I'm very, I plan my days out very meticulously and I hate drive-bys or if I'm working in the office, people talking to me. I'm sorry.
Coworkers, I love you. But like, just, I'm not a social person where like, I want to talk about your kids for 30 minutes or like, I have a schedule.
[Alexis]
If you didn't put a meeting on Kevin's calendar, don't go and see the call.
[Kevin]
Exactly. If you want to shoot the stuff or talk and socialize, just send me an invite. Send me a 30 minute invite or like a catch up meeting.
[Alexis]
Is this why you decline my FaceTimes?
[Kevin]
Yes, all the time. I'm busy. If I'm doing something, I can't, I have ADHD.
I have like a schedule that I'm following. So I have to stay on task or else I will be completely derailed and it will derail my entire day if I go down this rabbit hole of talking to people or, um, you know, just, just unpredictable meetings. Like it just, I can't do it.
[Alexis]
So can I give a work-related one?
[Kevin]
Yeah, of course. It's our podcast. We can do whatever we want.
[Alexis]
I hate JIRA. Anytime I have to open up JIRA for anything, I'm like, I purposely avoid it. I avoid it.
And then it all piles up and I have to spend like 45 minutes straining my tickets and tagging it to make it worse.
[Kevin]
Yeah. By delaying it, you're like, you're piling all into one and now you're like, stuck doing this for a while. No.
[Alexis]
Yeah. Yeah.
[Kevin]
Okay.
[Alexis]
Um, question. Um, I'm going to do a CCNA question from Martin Monsek. Is it still worth doing the CCNP or CCNA certification exam after you did all of the courses?
I'm assuming he's, what he's saying is like he did the training and he has the knowledge, but he hasn't paid to take the certification.
[Kevin]
Right. Yeah. That's what I'm getting to.
Um, so normally I would say the certification is not worth as much as the knowledge for a lot of certifications. The CCNA, CCNP are not those certifications. I feel like they carry the weight of it's worth actually getting the certifications.
Now, like something like a Linux plus or, um, some of the entry level, like Google, Microsoft certifications, those, I would say you don't have to do a plus for example. Like if you're completely new to computers and technology, study the, the, uh, a plus exam. Don't actually take it though.
You don't, you don't need it. No one's looking for an a plus on their, on their resume, but CCNA, CCNP, any of the Cisco heavy certs, those are worth it in my opinion.
[Alexis]
Yeah. I think it's a big, I mean, the, the CCNA was how I transitioned into it. Like I was an aerospace engineer.
I, my four year degree is in aerospace engineering. Um, I pivoted, I got hired by Cisco and I took my CCNA and CCNP and that was my like, I can work here now. I deserve to be at this table.
And I remember being, was I 24? I think I was 24 when I went to my first customer lunch. It was, it was very early when I started supporting customers.
And I remember sitting at a, a table full of guys that were like old enough to be my dad. And they were like, oh, you're our new SE whatever. And I was like, yeah, I have my CCNP, my old one.
Oh my God. Okay. Wow, sweetie, that's great.
And I, yep. I was like, oh, okay, this did mean something. Um, so I'm with Kevin.
I, I do think it's worth it to get the piece of paper, have the knowledge to back up this paper, but you should get a piece of paper.
[Kevin]
It also depends on where you are in your career. If you're looking, basically certifications are great. If you want to advance your career, either, um, getting a new job or a promotion.
But if you're in a workplace that you've been there for 30 years, you're already a network engineer, then the actual certifications probably won't help you if you're planning on staying there and retiring there forever. It's your work production and what you know is, is what's going to keep you there. So, I mean, we don't know the backstory of this person's question, but if you're entry level or starting your career or wanting to transition, um, careers, definitely get the piece of paper.
[Alexis]
Cool. Your turn.
[Kevin]
Okay. Um, it's an interesting one. Is online university a good idea?
Will it look as good on a resume? That's from Caleb's, Caleb's Huffet?
[Alexis]
Caleb's Shuffet.
[Kevin]
Caleb's Shuffet? Caleb's Shuffet. I love these last names.
They're all hard to pronounce. We couldn't get a John Smith to send us a freaking question, could we?
[Alexis]
I also want to point out that Kevin is still going great down the list. Like he's not skipping around at all. I want you to know that he is seeing the first question in front of him and just reading that one.
[Kevin]
I am organized. This is how I live my life, Alexis.
[Alexis]
I have a hard time answering this one because I, I'm not a recruiter. I, I don't know. I went to college in person.
I don't know if it's kind of like stack ranked or if there's any sort of like filtering on the backend of resume platforms or like the job filtering process. Um, I, my knee jerk reaction would be how good of a student are you? Like, can you hold yourself accountable to going to classes online and sitting and paying attention to hours and hours of lectures online where you're working by yourself and you're not there in person?
And can you hold yourself accountable to doing the work? The other thing is I think going to school in person, like part of it is the friends that you make and the networking you get to do and the experience you get to have. It's not all just, oh, I can put this paper on my resume and I went to, you know, MIT and it looks good.
Um, part of it is the relationships that you build while you're in school, whether it's the professors that can introduce you to other people or their career fairs that you get to attend in person. Now, online university might have some of that, but I think it's going to be much more difficult the same way it's difficult to like, I don't know, make friends and develop community online.
[Kevin]
Okay. Okay. I see that.
Especially for like the, the, I think the biggest thing there was being able to, to, what's it called? Uh, socialize and like, no, not even focus. Um, the, you just mentioned it now.
This is why, this is why the community and like, uh, what's it called? The thing where you connect with people, connection, networking, networking, the thing that Oh my God. The people network, you're not the, yeah, yeah, yeah.
So I have a, I have a, I have a different take than you. And so I've been a hiring manager and this is going to largely depend on the hiring manager. But my personal take is I don't care at all.
I don't care if you got your degree from a community college. I don't care if you get went to Harvard. I don't care if you went to WGU.
It does not matter as long as you typically HR wants the college degree. They want to have the check Mark that you did the row. It did the hoops and all that kind of crap for it.
But I don't personally give a crap if you have a college degree or not really. Um, to me, what I care about is do you have a passion for technology? Do you have a basic understanding of networking?
Are you someone who's going to do the extra mile and do research and figure questions out on your own? Or are you going to ask everyone for questions and be stuck spinning your wheels, that kind of stuff. And you can get that from the interview.
I don't, I don't want to see your transcripts. I don't want to know that you got all A's and B's and have a 3.7 GPA or whatever. I don't care about any of that because who you are in college might not necessarily be who you are at the workplace.
Um, so it's, it's a personal thing, but I don't know. It's gonna, it's gonna vary depending on the hiring manager.
[Alexis]
I think speaking of building community, Tinkfu asked, how did y'all become homies? And I love this question.
[Kevin]
The power of TikTok.
[Alexis]
Kevin, do you want to tell the story? I honestly don't even really remember it, so I want to hear your take.
[Kevin]
I, I mean, I'd be interested to, this is my take. I'd be interested to hear if, like, I'm remembering it the way you remember it or whatever, but, um, so, I would say it's been two and a half years now, I want to say.
[Alexis]
I think we're going three, honestly. I think, like, we keep saying two and a half and it's been two and a half years.
[Kevin]
Time keeps going. We keep saying two and a half. Cause I don't want to admit how old I am, how long we've been doing this.
Um, okay. It's about two and a half, three years ago, Alexis and I were both making videos on TikTok. I was, we were both making memes, really like crappy memes that were just, I don't know, that zero educational value, really just making fun of ourselves, thinking like things about networking.
And, um, I followed her, she followed me, and I think I, I don't know who messaged either first, but I was like, Oh, you're in networking. Yeah, no, but like, it was basically like, Oh, you make networking stuff too. There's only like three of us on this entire platform, so we should be friends.
Um, and then we started sending each other like ideas for memes and, um, helping each other spot check, like, Hey, I'm going to do this meme. What do you think of this? This is actually funny.
Or is, am I just being weird kind of stuff? Um, and then she was an SC, so she would send me stuff like, Hey, does this make sense to you as a, as a network engineer? Um, and we just kind of use each other's resources to help us grow on, on TikTok.
And it transitioned from helping each other with memes to like business ideas of like, how do we grow our platforms? How do we, you know, how do we reach people who are interested in networking who have never talked about networking or never thought about networking? Like we just brainstormed together.
[Alexis]
We, we both have, I mean, even though Kevin and I had very different roles, um, being like a network engineer and a solutions engineer, I mean, they're similar roles, but they are different. Um, the ultimate end goal of the platform is the same, which is to inspire people to go into it and educate people about technology. Right.
And we're both doing it or it's like a similar, but different way. Right. And, um, kind of like Kevin said, I would have ideas that wouldn't necessarily perform well on my platform, but I think would do very well on Kevin's just because of it's a slightly different sense of humor and slightly different delivery.
Um, and again, the end goal is the same, which is to help people get into the industry, have fun, have a good laugh. Right. And it's, it's very nice having someone else in your corner.
And I think it goes for anything, right? Like whether you're studying for a certification or breaking into a new industry, it helps to have a buddy that you can shoot ideas off back and forth and kind of motivate you. Like I will say Kevin's outpaced me on followers.
It's fine. I'm okay with it.
[Kevin]
Different markets.
[Alexis]
Right.
[Kevin]
Like, and your LinkedIn is killing me. I can't compete with you on LinkedIn at all. It's a different market completely.
[Alexis]
I like LinkedIn. It was my favorite trial for a while.
[Kevin]
You weirdo.
[Alexis]
But yeah, it's, it's nice to have someone else that like understands and has the same goal and that you're able to like co-work with, especially in content creation, especially in content creation about it. Because like Kevin said, there's not really that many of us out there.
[Kevin]
Well, it's getting bigger. When we first started this, it was me, you and Lexi and, um, uh, they weren't even on social media. They were on YouTube still.
They weren't on TikTok much or Instagram much at all. Back then they've since then grown and now they're seeing how the, how short form is taking off. But, um, yeah, now there's a million people out there.
Um, a lot of early career people, which I love to see that they're creating content and showing their journey.
[Alexis]
I try every time I see someone that's making networking content, I follow them back and DM them and I'm like, keep it up.
[Kevin]
Keep going. Exactly. Because I remember most of my followers.
Oh, go ahead. I cut you off. I keep cutting you off.
I'm sorry.
[Alexis]
Oh, it's okay. I remember how excited you were for me. Sorry, couldn't resist.
I remember how exciting it was when I was like a new creator and when someone who had like more followers than me or was more experienced than me followed me back and was like, ah, keep going. I was like, yeah. And so I've been trying to do that for new people too.
[Kevin]
I do the same thing. And I, I, I really only follow other creators on my, on my platforms. It's like, it's like a, I will follow basically anyone.
If you make constant content or content on your platform, I will follow you, um, for both support and to steal ideas. I mean, to, um, I'm not gonna steal ideas from you.
[Alexis]
You're an a** man. I can't, I can't believe you said that.
[Kevin]
That's my personality. I can't help it. I'm, they know I'm I'm.
[Alexis]
There's questions I want to answer on the list that are not in order. And so I'm just going to start asking them because I leave it to Kevin. He's going to skip them.
Um, how was Cisco live EMEA compared to Cisco live us? I think this is a really interesting question because also I've, I've gotten asked before, like if I could only choose one Cisco live, which one would I pick? Because there's people that can't go, like you have to pick one.
[Kevin]
Yeah.
[Alexis]
You can't, not everyone can go to all of them.
[Kevin]
I'm jealous of the people that can just pick which one they go to. Like I'm, I can't, my job won't pay for me to go to Europe or to Australia. Like I'm stuck at the U S one.
So the fact that like companies will pay their people to go to a different country blows my mind. I can't even imagine that. So if you have that option, that's, that's amazing.
Um, but the actual question, I think Cisco live us is more hectic. I feel like it's more like just everyone's rushing. Everyone's doing stuff.
There's so much to do where, uh, E M E A was more chill. Like everyone was kind of slower. Um, I don't know.
It was, it was nice. It was more relaxed, which yeah.
[Alexis]
So school, I have Cisco live us. I compare to like prepping for the super bowl. Like I know I'm going to Cisco live in Vegas.
I'm like drinking electrolytes the week before I'm walking extra. I'm like up in my step count to 15,000 a day to try to like prepare to be on my feet. I'm, I'm ordering the meal preps.
Like I'm like prepping for that because I know it's grueling and it's, it beats the hell out of your body. Cisco live EMEA and Cisco live Australia. I got eight hours of sleep every night.
I got a workout in, in the morning. I like casually walked around. I didn't feel it.
It was just so much more relaxed. And I felt like because of that, I was able to have much more in-depth conversations, um, either with people that were coming over to talk to me or just people in general because everyone's not like on edge. Like they are in Vegas.
Maybe it's just Vegas, but I don't know.
[Kevin]
I think, yeah, I think Vegas just feels more chaotic in general. Like, cause you're going through casinos to the conference and there's, you know, people running around there and ding, ding, ding, ding, ding, ding, ding, ding, all these noises and lights. So it's like, even before I get to the conference, I'm overstimulated.
[Alexis]
Yep. Literally.
[Kevin]
So it's a different vibe.
[Alexis]
Literally.
[Kevin]
So I'd definitely recommend it if you can pick any conference to go to no matter where it is. And if it's your first Cisco Live especially, EMEA is, I think, a better experience to get your feet wet into Cisco Live.
[Alexis]
Also one more point and then I want you to pick a question. I do think that a big part of going to conferences like Cisco Live is the networking aspect and like meeting other people in your local area. So if you are in EMEA, maybe go to the EMEA one for your first time because you'll make more contacts that are local if you're in the U.S. That's true. U.S. and then branch out. I think branching out is cool. That's a good point.
[Kevin]
Yeah. The cool thing is all the vendors were pretty much the same, which was nice to see. There wasn't like a majority of just European vendors or something like that.
So if you're going, you can still talk to your rep or whomever your company that you're working with is still going to be there. But definitely a good point about the people attending are going to be more in the industry where it's located.
[Alexis]
Yeah.
[Kevin]
All right. So speaking of, I think we just mentioned this before about community and talking to people, Tucky88, do you also struggle, I get to actually show how weird my personality is on these kind of podcasts. People don't understand how weird I am.
I am. I'm a weird guy. Tucky88, do you also struggle with not being able to explain slash talk to friends slash fam about the work that you do?
Alexis, go for it.
[Alexis]
Oh, I don't know if anyone remembers, I did two videos with my family. Can you explain what I do for work? The second one was can you explain what is the cloud?
[Alexis]
One time, I don't know if I should say this on air. We can decide later.
[Kevin]
Why not? We've already been censored.
[Alexis]
Okay. It's okay. So I got a FaceTime from my sister a little bit ago and you guys know, I mean, I make all these videos about technology and she called me and she was like, Alexis, I was watching this video and it literally sounded like you were speaking another language and me and my boyfriend were high.
And so I handed him my phone and said, Oh my God, listen to this. And then for the next 45 minutes, we scrolled through your page, hi, watching your TikToks because it was so funny to us that we literally couldn't understand a single word you were saying.
[Kevin]
That's amazing.
[Alexis]
I don't know. I don't know if this one's going to make it on air, but I, I feel like I've just kind of accepted it. And also I have different levels of explanation depending on who I'm talking to.
Like you kind of ask a probing question, right? Do you know what the cloud is? Do you know what network engineering is?
Okay. Well, then I actually kind of explain. And if not, I'm like, well, I work in tech and IT and then I make content too.
And their response is usually, Oh, so you're an influencer. And I'm like, I, yes, I'm technically an influencer.
[Kevin]
Do you feel like you lose them already when you start talking about the cloud? Like if they don't, if they say no, they don't know what the cloud is. They don't know any of that stuff.
You start explaining it to them. Like the people I talk to, they're done. They're like, okay, I don't know what you're talking about.
[Alexis]
I feel like most people know what AWS is. I'm like, you know what the cloud is like, like AWS? And if they're like, yeah, yeah, yeah, like that'll go a little bit deeper.
Usually I leave it at, I work in, I work for an Australian tech company in IT.
[Kevin]
Got you.
[Alexis]
I don't, I don't even say I do, you know, my, I used to, I used to go in with the, well, my job title is technically global evangelist. I leave that part out. Now I say I work in technical marketing.
[Kevin]
Global evangelicalist.
[Alexis]
Oh yeah. I forgot. You don't know how to pronounce that word.
Say it again.
[Kevin]
Still can't say it. Evangelicist.
[Alexis]
Yes.
[Kevin]
Evangelicist.
[Alexis]
Kevin, how do you explain your job?
[Kevin]
I say I make the internet go good.
[Alexis]
I do good internet things.
[Kevin]
I do good internet things. Like my, my kids, my youngest one is seven. And what he knows is that like, I do internet things.
And like, it's funny cause he'll like, if the internet's down or like there was that story about, I forget what, there was a big outage a few months back. He's like, why didn't you fix that dad? Like, he doesn't understand that, like how big the internet is and how, no, I deal with my little, a little section of the internet.
[Alexis]
He thinks you fixed the whole internet.
[Kevin]
Yeah. Like that's all he knows. Like the internet is this ephemeral thing in the sky and my dad fixes it.
[Alexis]
It's so cute.
[Kevin]
But if I was talking to an adult, it is really difficult because most people, I feel like if you, if you care, then you would already kind of know the basics of technology. And the people who don't know, don't want to know. Yeah.
So like my wife, right. Bless her heart. I love my wife with my entire heart, but the woman does not care about technology to save her life.
And if I'm trying to talk to her about my day, I know that it's not going to land. Like I have to lead with my coworker did this or my coworker said this. She wants the tea.
She wants like the person drama. But if I mentioned like, oh yeah, we had a, you know, a firewall.
[Alexis]
We had a tier one outage.
[Kevin]
Yeah. Like she doesn't care.
[Alexis]
She's checked out. I didn't replace the line card.
[Kevin]
Exactly. Like doesn't care at all. Um, so it is, it is a struggle to relate to people and, and share your day with people who are non-technical and that's where the power of social media is.
That's where the power of going to Cisco live and the power of doing these local meetups. Yeah. Is so that you can meet up and finally share that passion, get it all out.
And sometimes it's weird. You can tell the people who don't have anyone to talk to because when they, when they finally connect with someone, man, it just unloads. They're just like, yeah, it's like, cause I'm like, and I find it funny and I love it because I know that this person hasn't been able to share that with anyone else.
And so it's a great opportunity and I love it. But yes, it is. It is very difficult and it does not get better unless you surround yourself with people who care.
Anyone who's worked in uptime knows outages aren't just technical events. They're human events. They're late nights, pressure calls in leadership, asking for answers.
[Alexis]
Now StatSeeker was built to make those moments easier. It automatically discovers your environment and collects performance data across every device every 60 seconds.
[Kevin]
So when something breaks, you're not scrambling. You've already got the visibility to diagnose it best.
[Alexis]
Teams use it to detect anomalies early, prove root cause and prevent repeat failures. And because you can run it in your own environment, you stay in control of your data and infrastructure.
[Kevin]
If uptime is your responsibility, it's worth seeing how this works firsthand. Go to StatSeeker.com slash Uptime Stories to start your free trial.
[Alexis]
OK, I have one from mate booblay or made booble. And I think this is going to be fun because Kevin and I, I have to age Kevin in every episode, every episode. It's going to have a little bit of a take.
What is your take on work-life balance when you're young?
[Kevin]
Hmm. Well, so I'm weird, I guess not weird, but I'm my experience was that I had kids pretty young. My oldest is 15 and I'm 41.
So math is hard. But I was in my early 20s when I had a kid.
[Alexis]
You don't remember how old you were when you had your daughter?
[Kevin]
No, time is... I know how old she is. That's the important part.
I don't know when I... But what's funny, like when I was Alexis's age, I had I was married, two kids, a house. Like I...
We're very different position.
[Alexis]
I have...
[Kevin]
Don't start crying.
[Alexis]
No, I'm not. No, no, no. My eyes, my eyes are watering.
[Alexis]
It's glacic, it's glacic. I have, for reference, I have basically the least amount of responsibilities I've had in my entire life.
[Kevin]
Yeah, right. You've gone backward, not backwards, but you've gone more free and I've gone more, more responsibility. So it's hard because it's going to depend on what your work, like what your life looks like.
But for me, I was in a corporate job that I hated and didn't give me work-life balance. And my solution to that was to go to the public sector, was to find a job that allowed me to have the work-life balance that I wanted. And I feel like when you're young, you have to make the choice what's more important to you, your career or creating a family.
And you have to make that personal choice for yourself because it stinks that you kind of have to pick one. But you do, you have to, especially when you're young, go all in on your career where you spend nights and weekends studying for certifications and volunteering for extra work and maintenances and all that kind of stuff. Or you say, no, my priority is having kids and spending my nights doing board games and feeding kids and changing diapers.
[Alexis]
It's kind of like, it's kind of like, have you seen the meme? I remember this was really big when I was in college. I saw it all the time on Instagram and it was like a circle and it was split into three pieces.
And it said, you can only choose two, eight hours of sleep, get good grades, have friends. You can have friends and get good grades, but you're not sleeping. You can get sleep and good grades, but you won't have friends.
Or you can have friends and get sleep and fail all your classes. Like you can only choose two. Which two are you choosing?
And it kind of reminds me of that.
[Kevin]
Yeah, it's not sustainable to try to do both. You really, you can do both a little bit. Like half, half, but we believe curse words.
So half, but both of them.
[Alexis]
I've been cursed left and right.
[Kevin]
I know you're, I feel bad for our editors. Careful. You're going to cut this whole section now, Alexis.
Dang it. Yeah, so you can do both, but like you, I feel like you'll be spitting your wheels and you'll have an unhappy mind. And you won't be there for your kids, but you also won't be like making headway in your career.
So I feel like the best thing to do is just to pick one, whichever one is more important to you or aligns to your core values. And at least for the first few years of your career, go, you know, head deep into that. Would you agree, Alexis?
[Alexis]
No, I mean, again, I'm also in a very different scenario than you were. I don't have kids. It's not on the horizon for me anytime soon.
Knock on wood. That would be a difficult situation if I found out I was having kids right now. But I don't, I have never really believed in like work-life balance.
What I like, what I lean more towards is work-life integration. Like, I think you, all pieces of your life and maybe, I'm very, very blessed that both my job and my side hobby of content creation kind of float together and allow me to live a lifestyle the way that I want where I'm able to travel all the time and do things all the time and meet people in different countries and like do all this crazy stuff that you guys see on my Instagram. But I'm very much in a work-hard, play-hard season.
And I remember being, this was like during COVID. I mean, I was working a very normal like stay-at-home remote job for Cisco, right? I'd visit customers once or twice a week.
Outside of that, I was locked up in my home office in DC. And I remember like staring out the window in Arlington, Virginia. And I was like, every single, I live the same day every single day.
Every single day feels like Groundhog Day. And I got in like a big fight with my ex about it because he was like, well, is it a good day? Is it a good day?
You have a comfy bed and enough money in your bank account. And we ate dinner tonight. So like, it's a good day, right?
And I was like, I'm bored. I'm bored. And now I kind of just like flip my life upside down.
And I've been traveling full-time since April. And I've had all of these crazy experiences. And I work, I mean, for example, I woke up today at 7 o'clock.
I worked for three hours from 7 to 10. I immediately opened up my eyes, went downstairs, made breakfast, and sat on my computer while the rest of the house I'm in woke up. We all went skiing from 10 to 4.30. I came home, showered, did a little bit more work, checked my email and stuff like that because I'm in Europe and the U.S. just woke up. Did my check-ins with my boss. I'm on this podcast with Kevin right now. After this, I'm going to go heat up some dinner, take care of editing, not editing, but like reviewing edits on some videos for Megaport.
And I have a meeting at 12.30 in the morning today. Am I happy about taking a meeting at 12.30 in the morning? Not really.
It's not my favorite thing to do. Normally when I'm working U.S. hours in Europe, I try to work from 3 to 10.30. It usually scope creeps until midnight because, you know, work just kind of goes like that. I don't love knowing I have a meeting that's locked in on the calendar at 12.30, but that's the price that I pay for having the flexibility that I do to be skiing in Switzerland right now. And that's the sacrifice I'm willing to make, right? And I am trying to integrate my job into the things I want to do. And I think that if your job isn't, maybe this is like a really selfish hot take, but like if your job isn't giving you the flexibility to live the life that you want to live, you need a different job.
I'm also working in a house with 20 other people that are working very normal jobs in tech or finance that like they're very normal jobs and they're all doing the same thing that I do just under the radar. Like I do not exclusively have this privilege because of social media. I can name now 25 other people that are doing the same thing and half of them don't even have Instagram accounts.
[Alexis]
So disclaimer.
[Kevin]
I feel like the moral of your story is don't have kids.
[Alexis]
I would like to have kids. I would like to have kids. But like you said, it's a decision that you make.
You can only pick three. You can only pick three. Remember the circle?
Sleep. Good grades. Have friends.
Job. Flexibility. Children.
Money. I don't know.
[Kevin]
I just feel like your integration strategy is kind of like it works as long as all you're dealing with is like work. Once you start adding in family responsibilities and kids and all these other pieces, it's much harder for all that stuff to work around traveling.
[Alexis]
I disagree with that. I mean, I think I'm I am integrating wrong. I disagree with you again.
I I'm I'm integrating the travel into my life right now. But that's not to say in five years when I want to have children, I can't make a different decision and decide to integrate their lives into my work schedule to make my work flow around the time I want to spend with my children instead.
[Alexis]
Yeah.
[Alexis]
Yeah, for sure. I know a girl I used to work with. She was one of my neighbors and she would take her lunch break for two hours in the middle of the day every day.
In schedule, she had a stay at home nanny. Again, work and tech. She had money to hire a stay at home nanny.
But it's very privileged, right? But she the nanny would come. She would get her kids ready and do the whole morning routine and get some quality time with them in.
The nanny would come. She would go and work and then she would come back and do their lunch time and play time. And then they would go down for their nap with the nanny.
And then she would go back to work and work another four hours and then have the quality time after dinner to do homework and all the stuff when the nanny went home. And that was kind of like how she integrated her normal work schedule into her life.
[Kevin]
Yeah. I mean, I just OK, I'm on a soapbox here. So I might cut all this from the podcast.
I just don't want I don't want people to think that like we're dismissing the struggles they have in their life. Because sometimes people are dealing with situations that are not conducive to a life where they can do both. You know, like some people have to sacrifice and pick.
And if you have sick parents that are living with you and you're like having to be a caretaker for your parents and like you're also trying to hold down a job and you're also trying to have friends or whatever, like it's everyone's situation is a little different.
[Alexis]
You have to pick. You have to pick.
[Kevin]
And yeah. So I just there are situations where you can't you can't necessarily live the life you want because of your situation. And, you know, I think that's important to recognize that there are people out there struggling to do that.
That's all I want to say.
[Alexis]
I can sympathize with that. And I don't think you should not take responsibility for decisions that you made. But and sometimes like you get dealt a hand.
Right. And that's.
[Kevin]
It's hard. Like he's like the story you're saying. She works in tech engine.
[Alexis]
I know. I'm also like an optimist of like I will find a way. Like that's also just my personality is that no matter I don't care what the situation is, I am going to find a way to make it work.
But that's also just like how I am to my core. I'm also a little psychos.
[Alexis]
Next question.
[Kevin]
Okay. So next question is from Straight Silver. And he's he's he's asking some straight questions here.
[Alexis]
Oh God.
[Kevin]
So his username is accurate. Alexis, there's been some drama online.
[Alexis]
There's always drama online. I'm scared.
[Kevin]
There's always drama. But about a year ago, I think it was a year ago. Were you fired from Cisco?
[Alexis]
It's really funny, Kevin, because immediately after I announced I was leaving Cisco, I think I had like four different people that messaged me immediately and they were like, do you want to come on my podcast and talk about it? I said no to all of them. Here we are.
I was technically.
[Kevin]
Were you under like an NDA too or something?
[Alexis]
Not not like an NDA, but it was just.
[Alexis]
It was a how do I how do I say? I was voluntarily resigned.
[Alexis]
That is the literal term that was used. So I was not fired.
[Kevin]
So you quit.
[Alexis]
I was voluntarily resigned. The non-technical term is managed out. And I don't know if anyone else has ever experienced that.
Yeah, the to go into the full story would be a lot of drama. And probably some like he said, she said stuff, which is why I've never gotten into it online. There was things that I feel were very misleading around my move to Charlotte and my permission to move to Charlotte.
But long story short, I was voluntarily resigned for moving outside of my sales territory. And honestly, I mean, at the time I was I was so upset about it. I had been trying to move off of my team.
I was working in commercial. So Cisco has different segments of their business. They've got commercial.
They've got enterprise. They've got federal. They've got public sector.
And I had been wanting to move out of commercial and do a different segment of the business anyways. And so I was like, oh, no problem. I can get a job in another segment.
As it turns out, Cisco was on a hiring freeze the entire time I was looking for a job. So I couldn't get a job in another segment. And it was it was a.
[Alexis]
What would you say? Like. Perfect storm of the hiring freeze communication.
[Alexis]
Misleading things, in my opinion, and also me wanting to move states. Ultimately, you know, at the time I was very upset about it. I'm still a little bit upset about how everything went down, but I can look back now over a year later and say that it was probably one of the best things to happen to me, which I think at the time I never, I never would have imagined saying that.
Right. I would have been a lifer at Cisco. I would have been a lifer.
I never would have quit. No matter what the situation was, I never would have left that company. And I would still be working there right now.
And I probably would not have grown my my platforms as much. I would still be constrained to only talking about Cisco technology. I don't feel like I would have gotten as much experience in the industry.
Like, ultimately, leaving Cisco was the best thing or being managed out of Cisco or voluntarily resigned from Cisco, whatever you want to call it. It was one of the best things to ever happen to me. And I'm grateful it happened.
Looking back, I think I've gotten a lot of opportunities and growth that came from that. But sometimes when things happen like that in the moment, it was it's really, really hard to see the silver lining. Really, really hard.
And so I've I just never really talked about it. I just kind of said, I'm not there anymore and left it at that. Also, because like, I don't know, I'm even with my my the ending of my very long relationship I was in.
I like to wait before I talk about things with the Internet. Right. Sometimes I like to process them a little bit.
And I feel that you guys deserve to know what's going on in the moment when you're like, oh, my God, why are there no pictures of cats? And all of a sudden you're not. It looks like you're not living in Charlotte.
Like, I feel a level of accountability to tell you guys what's going on, whether it's like with work or personal, to keep everyone up to date. But sometimes the like behind the scenes or like the processing emotionally, I get a lot of questions about like, how are you? How are you doing?
Are you OK? Are you OK? I'm fine.
I'm fine. I just like to take a little bit to process things by myself before I decide whether or not I want to share that experience with the Internet.
[Kevin]
Yeah, that makes sense. I actually brings up two questions for you. Two follow up questions.
Number one, would you go back to Cisco if the situation was different?
[Alexis]
It's funny. I have people. I was literally at Cisco Live EMEA and someone was like, would you just come back and work for Cisco?
Like, if I hired you today, would you come back and work for Cisco? After leaving, and Cisco has a great culture. Like, I can't tell you how many, I have so many close friends and like ex-colleagues that work there.
And I really look up to the company. I think that after experiencing working at a smaller company, I really enjoy working for a smaller company. One with like slightly less politics and slightly less organization.
I just personally think it's a lot more fun. I also, I'd really love to work for myself one day. I think that's another big goal of mine.
So going back to work for Cisco is kind of completely contradictory to that. And also, I mean, Kevin and I were talking earlier about representing the industry, right? And industry trends and vendor agnostic solutions.
And going back to work to a vendor like isn't really conducive to that because it's not that I can't make content about things that are not Cisco if I'm working for Cisco, but it's kind of like anti my job. Right? If I'm working for Cisco, you got to be pro Cisco.
And I just kind of think it makes you a shitty engineer. Like personally, I studied aerospace, right? My whole experience in IT was working for Cisco.
I didn't really get a lot of like cross vendor experience until I started working for Megaport. And Megaport has all sorts of partners with, you know, Fortinet and Palo and like all these other guys that we can run on our platform. And so like, I didn't really have experience outside of Cisco until I left.
And I just think it makes you kind of a shitty engineer if like you only know one solution, right? I mean, you're recommending the best thing you know, but it's also the only thing you know. And if you only have a hammer, everything's a nail when it could be a screw.
I think that's the analogy I'm looking for.
[Kevin]
Don't ask me analogies. Me and analogies are not good.
[Alexis]
You want to use the right tool for the job. But if you don't know all the tools, how can you pick the right one?
[Kevin]
And that's where us as creators who we tried to educate and help people online. If we are representing a vendor that is, you know, we have to stick to the script or the solutions and the people can't really trust us to give them an unbiased, you know, point of view or everything we say is in the lens of that vendor that we represent.
[Alexis]
Right.
[Kevin]
So yeah, it makes sense.
[Alexis]
I think it would be really hard to go back to Cisco now because I think it's almost like a little bit anti my personal goals.
[Kevin]
Mm-hmm.
[Kevin]
Yeah. Makes sense.
[Kevin]
All right. So my second follow-up question here is, you mentioned having some processing your personal and feeling obligated to tell your audience about your personal stuff.
[Alexis]
Mm-hmm.
[Kevin]
Do you feel that, like, it's an actual obligation that, like, you have, like, they deserve, the audience, the followers deserve to know information about your personal life?
[Alexis]
People yearn for the truth, Kevin.
[Kevin]
But if so, like, I feel like, you know...
[Alexis]
They yearn for the drama. My life is chaotic and people want the details.
[Kevin]
But it's interesting because, okay, I'm not saying we're movie stars. That's the easiest analogy for me. It's like Brad Pitt, right?
And I look just like him. So this is a good analogy. Brad Pitt isn't a movie, right?
His job is to act in that movie. And then he's only famous because people like him for his work. And then they kind of feel like they have an obligation or an access to him.
They see him out in person. And be like, hey, you know, take a picture with me. Give me an autograph.
Because he's a public figure. And I'm torn on that personally of, like, do people deserve access to my personal life?
[Alexis]
Are you owed? Are they owed an explanation?
[Kevin]
Yeah, like, I'm providing them a service. I make videos that educate and help them. And I do AMAs and I do all this stuff.
And they exchange that by giving me likes and follows and that kind of stuff. But nowhere in there is there an exchange of personal information. They aren't deserving of my personal life.
I choose to give them certain access to it.
[Alexis]
Yeah, bits and pieces when you choose to.
[Kevin]
Yeah, but like, how do you determine what the boundary is there of what your personal life, what you're choosing to share? Like, you went through a very public breakup with your boyfriend. I wouldn't say it was very public.
[Alexis]
I made, like, a couple videos about it.
[Kevin]
But videos of you crying. Videos of you being emotional.
[Alexis]
Like, things that I would personally never post.
[Kevin]
I know, but I just wouldn't do that.
[Alexis]
I think it depends. I think it depends on every creator. And, like, also what kind of, like, how well you want your followers to know you.
Like, something I think it's, I really enjoy when people feel like they know me. Like, I enjoy, I wear my heart on my sleeve if you guys have met me in real life. I'll tell anyone anything.
Anyone anything. All the time. Like, there are very little boundaries.
If you meet me in real life and we are complete strangers, you will know everything about my life within, like, 35 minutes.
[Kevin]
Alexis.
[Alexis]
Everything that's going on.
[Kevin]
That's called trauma dumping, and that's not healthy.
[Alexis]
Is it, though?
[Kevin]
You need boundaries, Alexis.
[Alexis]
I, but, I mean, maybe. Maybe I just need to do a better job. But I really enjoy, like, feeling like I know people on a deep level and feeling like people know me on a deep level.
And I feel like you only really get there by being open and vulnerable and sharing things. Like, you only have close friends at the level, like, your friends are only as close as you let them be. And that's, that's, I mean, I know we're talking about, like, we were talking about followers, but even with, like, friendships in your personal life, your relationships that you have with your friends and family are only as deep as you let them get by sharing vulnerable things.
And I'm not saying that, like, everyone deserves to know that. Like, I don't share, like, everything I share with my friends and family on the internet. But there are levels that I will share because I think it's something that's important to me to, like, be a little vulnerable and to feel known.
And when I share those things, usually what I get in my DMs and my comments is that other people are easily able to relate to that experience. Like, a video I'd really like to make that I've kind of dragged my feet on is when, and this was, like, three, four months ago. I mean, if we're, like, putting a timeline on this, we're, what, nine, ten months out from me moving out of Charlotte and, like, turning my life upside down.
But, like, back around the three, four month mark, when I was making some of those videos about, like, hey, I've moved out of Charlotte, I'm going through a breakup, this is a big life transition. I remember my dad, I was at home with my parents and my dad walked in and he was like, why do you share stuff like that on the internet? It's so unprofessional.
What if some executive is gonna see that and they're gonna think differently about you because you just posted a video of you crying? And, true, true. That's a risk I'm taking.
But at the same time, there's so many people that can have things going on in their personal life and also show up completely professionally at work. Like, you were talking about, you know, having a sick or dying parent that you're caring for, like, you know, something at home blows up in your face. A lot of people assume that if your personal life is blowing up, you're not able to show up effectively and do your job.
And maybe that's true in some cases. Because it's not true in all cases. I really want to make a video about that, right?
Like, my life completely fell apart. And I am still able to effectively perform. The fun story, and I know we're almost running out of time here, when Kevin and I, when I launched the idea of this podcast, if you guys are still with us, we're like an hour and 15 minutes into this, when I launched the idea of having this podcast, literally I had messaged Ethan, who owns Packet Pushers, on LinkedIn, and I was like, hey, I have this really crazy idea, can you schedule a meeting?
We scheduled this meeting three weeks out. Okay? The night before I pitched Ethan this podcast was when I broke up with my ex-boyfriend.
And so I showed up to this meeting with Ethan, literally with no sleep. I had no sleep, I had no makeup on, by all intensive, like, for all intensive purposes, I looked like a complete disaster. And so I get on the phone with Ethan and the Packet Pushers gang, and I'm explaining the concept for this podcast and why I want to do this show and why I'm so excited about it and what difference I think it's going to make, and my voice is raspy, I'm, because I was crying all night, like, I looked like hell and I'm like very intently explaining what I want to do.
And Ethan is like, you know, Alexis, I got to say, I'd love to support you in this, I think it's a great idea. Are you sure you're able to take on more work? Like, you kind of look like you're having a hell of a time, I'm not going to lie.
And I said, Ethan, listen, this is, I'm very passionate about doing this, I just ended a seven-year-long relationship last night, this meeting is very important to me, I was not going to reschedule it for three weeks from now, I want it to happen now. And I know I look crazy right now, I will have my shit together by the time you launch this, because it is something that I want to do. Right?
And again, you can have things blow up in your life and still show up at work. And I'm equally passionate about that, I should probably make the TikTok while I'm like, heated, because you got me going. But, anyways, that was my rant.
[Kevin]
For anyone who's wondering what our like, for anyone who's wondering what our like, FaceTime conversations sound like, that was basically it, where we ask each other questions, and then eventually, Alexis will just start talking at me about something, and she just will go off, and I just sit here going, and then I'll start multitasking something, and call back, oh, okay, yeah, yeah, yeah.
[Alexis]
Okay, anyways.
[Kevin]
That's the behind-the-scenes conversations.
[Alexis]
We are like, so off-topic now. Let's do...
[Kevin]
Alright, so we're getting...
[Alexis]
One more, one more...
[Kevin]
We're getting past an hour.
[Alexis]
Yeah, one more question, and then we'll wrap. And I think this one's a good one, based on the conversation we just had.
[Alexis]
In an alternate universe, what career would you have?
[Kevin]
Weirdly enough, I've gotten this question a lot in my Friday AMAs on Instagram.
[Alexis]
Oh, amazing.
[Kevin]
Yeah, like, people are really interesting on this. And, so, for a little while, I was in tech, and I was going through a life transition, and I was going divorced, and I was depressed, and my life was falling apart, basically. And instead of going to the Alps and going skiing I hate you so much.
and living the best life possible, What are you trying to say right now? No, just saying, we all deal with things differently. But very, honestly, very similar.
I looked at becoming a park ranger. What? Yeah, I want to become a park ranger.
And just, work in a park, you live in the park, and you just, fix fences and hiking trails, and deal with people, and ski off on my own in the woods.
[Alexis]
I never knew this.
[Kevin]
So, I still get, actually, I signed up for job alerts of park ranger jobs in my area, from the national parks in my area. And I still get emails, saying like, oh, a job popped up that fits your description or whatever. And I don't unsubscribe, because it's still like a little part of me.
It was like, maybe one day, maybe one day I'll just go to a park.
[Alexis]
I feel like that's part of working in IT. There's a part of your brain, where you always just kind of want to go off in the woods, and just disappear.
[Kevin]
Yeah. Get away from technology, get away from all the things, and just, be out and touch grass, basically.
[Alexis]
What do you think I'm doing? Why do you think I'm out here?
[Kevin]
I know, but you're, I don't know, you're doing it successfully. I was like, you do it beautifully. You're doing it like, successfully, and you're like, you're a boss, a boss bee.
I won't curse, because I don't want to give our editors a break.
[Alexis]
You were going to be park ranger in Tampa, Florida?
[Kevin]
Yeah, there's no great parks around us. It's swamp and flat land.
[Alexis]
The Everglades is a great park.
[Kevin]
That's scary. I don't want to do that. That's like crocodile, or alligator, we don't have crocodiles here.
Alligators and snakes, I don't want to do that stuff. I want to go to like, a paved area.
[Alexis]
What hiking trail are you going to maintain, if it's paved, Kevin?
[Kevin]
I can sweep it, and blow it off with a leaf blower. I don't know. I'm not outdoorsy.
I like camping every once in a while, but I'm not like a burly, outdoorsy guy, you know, like I can't do that kind of stuff.
[Alexis]
And you were going to be a park ranger?
[Kevin]
At like, Brandon Park. Like, it's nothing, like, nothing crazy. The pay was, was terrible.
Absolute garbage. I would have to live with roommates, and have my kids share a cot, in the living room or something. So it wasn't, it wasn't every fleshed out.
I'm saying like, you had this beautiful idea of, skiing, traveling the world, going to Europe, all that. My idea was to live in a, like a, crappy one bedroom apartment, and live in a, like, different levels.
[Alexis]
I mean, my original, my original idea was to live in a van, and van camp. And everyone was like, what are you going to do?
[Alexis]
Down by the river!
[Alexis]
By the river! I was like, yes, exactly! That's exactly what I'm going to do.
Actually, there's a girl in the co-living that's living in a van from Norway, and her van is beautiful.
[Kevin]
Oh, I bet. These people do, like, they do it right. Alright, so, we have to stay on track.
[Alexis]
Alternate career, alternate career.
[Kevin]
What would your career be?
[Alexis]
Um, well, growing up, I said I always wanted to be a dolphin trainer. That was my childhood. My childhood.
[Kevin]
I was not expecting, I don't know what I expected, just not that. I don't, like, air, like a pilot, or something. I did not expect a dolphin trainer.
[Kevin]
Okay, alright, dolphin trainer, um.
[Alexis]
Okay. Okay. Okay.
[Kevin]
Alright, why a dolphin trainer, Alexis?
[Alexis]
When I, let me finish the story.
[Kevin]
I'm trying, I'm trying to tee you up again.
[Alexis]
When I was a little kid,
[Alexis]
I always said I wanted to be a dolphin trainer, and then I decided I wanted to be a pilot, because my family never traveled growing up, and I thought if I was a pilot, I'd get to travel, and then I realized how much student debt you had to go into to become a pilot, and I was like, I'm not willing to take out that much student debt, which, like, jokes on me, because I ended up in a ton of debt anyways, um, and my eyes are too bad to join the military, so I can't be a military pilot and get it for free, and that's how I ended up being an aerospace engineer.
[Alexis]
Gotcha.
[Alexis]
Now, that being said, alternate career. There was a point in time where I considered going back into aerospace, um, when I was working in IT for, like, three years, I was, like, struggling really, really bad with my boss, I considered going back into aerospace. Now, considering everything and the journey I've been on, if I was to pick an alternate career, I think journalism would be really cool, um, and I'm almost, I almost want to, dabble in that a little bit, um, moving forward.
If you guys have seen any of, like, the conference wrap-ups I've done, um, I think, like, doing, like, tech journalism would be really cool, and writing, broadcast journalism, like, videos? Yeah, like, like, just, like, broadcast journalism, or, like, um, um, sort of, like, writing little blogs and wrap-ups and doing, like, some more formal stuff on camera, like, newscasting. Like, I think, I think that could be kind of, kind of cool.
[Kevin]
Tech Bites with Digital Bite.
[Alexis]
I hate you. Um, thanks for making, thanks for making fun of my dream. I didn't make fun of yours.
[Alexis]
I guess I did a little bit.
[Kevin]
A little bit. Not as much as Dolph Trainor. That's a relationship.
You know? I, I, I consider you, a little sister or something, where, like, I, I, it's my job to make fun of you and to, to tease you a little bit.
[Alexis]
Yeah. To put you down a peg.
[Kevin]
Otherwise, your head would be way up here.
[Alexis]
Maybe the next time we do a Q&A, it'll be Life Advice with Kevin, where Kevin just gives me his life advice about the decisions I'm currently making. And, I'm sure that people listening, I, I hope that you guys listening to this would get a kick out of it because either you're in Kevin's situation or you're in my situation.
[Kevin]
No, I think you're, I think your situation's good. Like, your love life and your dating situation is terrible. We're not talking about that here.
We're gonna have a whole episode on that.
[Alexis]
We're not talking about that here.
[Alexis]
Anyways, um, well, thanks, thanks to coming, thanks to coming. Thanks for coming to another episode.
[Alexis]
Thanks for coming. Thanks for listening to another episode of Life in Uptime. Um, we're your hosts, Kevin and Alexis.
[Kevin]
Mostly, we're mostly your hosts.
[Alexis]
Um, and if you guys have any other questions you'd like us to answer but we didn't get to, um, DM us on Instagram. This was fun. I'm sure we'll do another one.
And I forget word for word what the closer is but something something keep your uptime high.`,
  },
  {
    episodeNumber: "011",
    slug: "ep-011-inside-the-digital-nomad-life-the-good-the-hard-and-the-wi-fi",
    title: "LIU011: Inside the Digital Nomad Life: The Good, The Hard, and the Wi-Fi",
    guest: "Andrei Istrate",
    guestTitle: "Senior Mobile Developer",
    guestCompany: "Toptal",
    guestLinkedIn: "https://www.linkedin.com/in/andrei-istrate-233299b5/",
    description: "Alexis Bertholf and Kevin Nanns sit down for a conversation with Andrei Istrate, Senior Mobile Developer at Toptal. Andrei has taken the \"mobile\" part of his job literally: he's built a life around travel and experiences rather than settling in one location. Andrei talks about the travel opportunities that remote work has presented, how he takes advantage of these opportunities, and the professional and personal challenges of being a digital nomad.",
    airDate: "March 26, 2026",
    packetPushersUrl: "https://packetpushers.net/podcasts/life-in-uptime/liu011-inside-the-digital-nomad-life-the-good-the-hard-and-the-wi-fi",
    youtubeUrl: "https://youtu.be/MlaHLFMYfmY",
    transcript: `[Kevin]
This episode is sponsored by Meter. If you're tired of juggling five vendors and six dashboards just to keep the network up, Meter delivers the full networking stack, wired, wireless, and cellular, as one integrated system. Go to meter.com slash liu to book a demo. That's m-e-t-e-r dot com slash liu. Welcome to Life in Uptime, the show where we talk with the people behind the networks that keep our world connected. I'm Kevin, joined by Alexis, and every week we sit down with engineers, leaders, and builders in tech to uncover the stories behind their careers, how they started, what they've learned, and where they're headed next.
Our goal is simple, to help you see how far tech can take you, no matter where you start from.
[Alexis]
All right, y'all. This week we have a really exciting guest for you. His name is Andre, and he's a senior mobile developer who specializes in Android development.
Outside of engineering, Andre and I actually met a couple weeks ago at a co-living in Switzerland, and he's built a lifestyle around remote work that most people associate with influencers or digital creators, where he's been traveling and working remotely all around the world and designing his life around experiences rather than location. So we're going to talk today about a different model of success in tech and how you can use your flexibility that you get from having a career in this field to give yourself different experiences in life. So Andre, welcome to the show.
[Andrei]
Thanks for having me. I'm glad to be here and share my experiences with you guys.
[Alexis]
It feels crazy. I was just thinking about it. We were literally in Switzerland two weeks ago, because the last time I recorded this podcast with Kevin was at the co-living.
Insane.
[Andrei]
Oh yeah. Yeah, actually, I already missed the place. It's weird.
I get excited to get back home and after a week or two, I'm like, why did I land back? Why did I love the place?
[Kevin]
Yeah, no, I, where is home for you?
[Andrei]
Right now it's in Romania. It's the second biggest city in Romania. It's called Cluj-Napoca.
Believe it or not, it's a really big, it's getting to be a big IT hub and the IT community here is growing year by year. Interesting.
[Alexis]
So how, could you give us a very, very high level? How did you get into technology? Did you always picture yourself being a mobile app developer?
[Andrei]
Actually, no. Well, I was on a kind of like a crossroad when I finished university. It was like a technical university in this, in my city.
And I was specialized in control engineering, but I had the option to take something more lightweighted or spend more time learning more about control engineering. So from my perspective, back then software development was a lightweight choice that was very, let's say, attractive. Back then, which is kind of like 10 years ago, the market was different from now.
So it was really easy to apply to a lot of companies. A lot of companies were reaching out and yeah, it felt like the safer option.
[Alexis]
I feel like software engineering 10 years ago, you could get a job anywhere if you were a software engineer. They were like falling from the sky.
[Andrei]
Yeah, that's true. Actually, me and a couple of friends that were working in the industry, we made fun that for us being on LinkedIn, we got reached out by so many recruiters in the same way. It was an analogy with Tinder, let's say.
The same way guys were reaching out to girls, girls were reaching us to us to work for the companies.
[Kevin]
I mean, I remember watching a lot of those social media videos back then, where it'd be like, you know, interviewing with your salary and have like, oh, you know, I graduated two years ago, I work for so and so company, I make $300,000 as a software developer. And everyone's like, oh my god, so crazy. It was a big rush for everyone to get to software development.
And I see the same thing happening now with like AI and all that stuff. It's insane how cycles are in technology.
[Andrei]
Yeah, exactly. It was the beginning of the older cycle when I just finished university.
[Kevin]
Well, good timing.
[Andrei]
Yeah, thank God.
[Alexis]
And Andrei, have you always worked remote? You said you've been in the field for about 10 years. I feel like now it's much more common to graduate university and start a job remotely where maybe you'll never even meet people on your team, because post COVID, it's much more normalized.
But when did that start for you?
[Andrei]
So working remote actually started with COVID. And to answer the initial question, I went on the same path as the standard software engineer. First couple of years were just in the office working with all the team.
It was mandatory, it was expected to be in the same room with your team members. And let's say like the people that were on the same project with you, it was more productive to make sure everybody has an open line of communication all day long. It started to become a reality after COVID, actually in the middle of COVID, because that's when remote working became popular.
We had no choice, we had to work from home. And for me, honestly, this was the second crossroad. I started seeing that if I spend more time just in my house working from here, I'm not gonna end well.
So I started to look for different options.
[Alexis]
Working from home, I feel like being in your home office, and maybe, I don't know, Kevin, correct me if I'm wrong.
[Kevin]
Don't you bet I will.
[Alexis]
Yeah, he's gonna yell at me for calling him old again. But maybe it's a stage of life thing too, where working from home, you know, when you have a family and you have kids, and there's just more going on around the house. Your daily activities are much more involved with your responsibilities.
But I felt the same way, right? During COVID, I was 22, I was fresh out of college. And being from home, it felt more like a death sentence, right?
There was no social interaction outside of maybe if you were going to the gym or going to a club or something. But the office was such a social place, and I really felt like being confined to my home office was like, it was like grandma every single day. Yeah, I want people.
[Andrei]
Yeah, that's a really good way to put it. And for sure, I agree with this. It depends on like subjective circumstances.
If I would be with a spouse and have a couple of kids, I wouldn't be able to think about, even think properly about that. But yeah, like, putting it into practice and test it out. Yeah, it's, it's all about the circumstances that you already have.
[Kevin]
For sure.
[Kevin]
So I have a question. You are working remote. And when did you decide to like, start actually traveling?
Like, how do you make that jump of, you know, I'm working remote, I could do anything in the world, I could go anywhere. But to me, I go, okay, that's kind of scary to like, go away and try to work remotely. I'd want to start like, let's go, let's go to a pool first, or, you know, let's go to the work out of a out of a library for a couple of days, you know, start slow.
Was it like that for you? Or were you like, Nope, I'm gonna go to Switzerland and through this place I'm going.
[Andrei]
Actually, in the beginning, it was just traveling. And I was just extending the time. Um, first time when I went traveling just by myself alone, it was 10 years ago, and I stayed for a couple of months there.
And just by traveling, I realized, okay, I can manage a routine while I'm traveling here. Technology is the like, you don't need to spend some too much energy to find things that work for you as much as you used to in the past. You can go anywhere in the world, and you can find a gym, like a proper place to eat, like a place to do your laundry, and all the things that you need to have like a decent lifestyle, right?
So that will be a foundation. Um, but to get to the point, I started just traveling. And then I heard about these types of communities that they integrate the working part, the career part as well.
And it wasn't something like I invented the wheel here. I just reached out to people that were already doing that. And I've seen some feedback, and I said, let's try it a bit.
Like, I can get a plane ticket, and if I don't like it, yeah, it's gonna be some money and some time loss, but it's worth of trying out, right? Yeah.
[Alexis]
100%.
[Andrei]
Um, yes.
[Alexis]
I, I want to touch on what you said about routines, because I think so, so many of us are creatures of habit. And before I got on the road, I mean, I was locked in my routine. I got up at the same time every day.
I went to the same gym. I walked the same walk around the block, around my apartment complex. I knew exactly what time I was eating dinner.
I ate the same foods every day. And I feel like travel, for me, when I first got on the road, um, travel was really disruptive to that. But you acclimate so quickly.
Like, you acclimate so quickly, because like you said, there's, what was it one of my friends said? There are humans in every city, and the humans in whatever country you're in have the same basic needs that you do. Gym, laundry, food, sleeping, a pharmacy, right?
You can find those five things basically anywhere. And it might look a little different. It might be a little wonky, but like, you could figure it out.
And there is slightly more mental load or, you know, maybe you could call it inconvenience associated with having to figure it out. You can figure it out. I'll give an example.
Um, when I was in Amsterdam, I went to buy time release melatonin. Okay. Now in the U.S., it comes in like five and eight milligram tablets. In Amsterdam, that came in one milligram tablets. And so I bought this bottle of melatonin. I go to my hotel room, I open it up, and I'm like, they're all in one milligram tablets.
So I sat there to count out.
[Kevin]
You take eight of them, like a package a night.
[Alexis]
Or like, you know, you're in the grocery store, um, Google translate on, on Chrome. I'll just show you guys here. I know we're on a podcast.
[Kevin]
We're on a podcast.
[Alexis]
Yeah, yeah, yeah.
[Kevin]
If you want to see this, go to YouTube and watch us there.
[Alexis]
Great. You open up Chrome, you hit the camera app. There's a translate feature.
Okay.
[Andrei]
Oh, wow.
[Alexis]
You can put anything you want in the frame, menus, ground beef or pork. That's a tricky one.
[Kevin]
Oh, you're translating it? You're not just putting it in the camera?
[Alexis]
Yeah. You just put like the photo of the label in the grocery store. That one's great.
Um, what were we talking about though? Routines, right? You can find the new, you can find the new routine.
[Andrei]
Actually, um, a realization that I had because I had the other side of the coin while I was traveling, I had so much time off and I didn't plan the whole thing. I had so many days where I was just drifting, drifting, thinking I should see this, I should see that, but the weather is unstable and it was a bit daunting to be honest, uh, drifting. And I got to a point where the actual work was a grounding mechanism and it felt like I can be productive and I have the references that I've been, um, used to in my default routine, let's say, and I'm spending some time on that.
But I also, when I close the laptop and I finish the meetings and everything, I go and try the new stuff. So it's kind of like you make a salad. It's not like it's just novelty.
You also ground yourself in a layer of, um, let's say, yeah, habits.
[Alexis]
Yeah. Well, cause there's, there's a layer, a layer of normalcy and even like working with the same people, even though you're working remotely. Um, I felt that when I was in Switzerland, right.
I got to see you guys every day. And then I got on my computer. I was working with all my coworkers from Megaport or on FaceTime with Kevin talking about podcasts.
Right. But it brings a sense of familiarity to like an unfamiliar place for sure.
[Kevin]
But how do you deal with like, like you're in that environment there, everyone else is kind of like having fun and like vacationing and stuff. Do you ever get that tempted to like, like, ah, I don't need to work all eight hours today. I'll work like three here.
You know, I I'm working at home and that happens to me where like, I gotta do laundry and like, I'm back on my head. I'm like, okay, I'm going to go take a nap. Well, I mean, ideally, but, uh, or do dishes or like, you know, stuff that I need to do in the weekend that I can do during the day working from home, take 10 minute break here, 10 minute break here.
So I would imagine that would just be like so much worse. If I was in a beautiful vacation spot or something like ski, I'd be like, screw work. That's just ski all day.
Yeah.
[Andrei]
That's a reality thing for sure. Um, it's hard to not get distracted by the foam or let's say the fear of missing out because not everybody in a co-living is working the same hours, same job and the same level of complexity type of work that you do. Um, that kind of used to be the same with your team, right?
In your company, in the organization. But back there, you see somebody is just like an influencer on your left. You have an influencer on, on your right.
Yeah, exactly. On my right. And, uh, you see there are different levels of freedom in their schedule.
And, uh, I'm gonna, I'm not gonna lie. There were a lot of times seeing people, groups making plans and they do this amazing activity. And I'm like, no, I need to stay in the office.
I have to do this deploy. I need to, I need to do this publishing. I have this important meeting and so on.
The solution is mindset. Um, but I'm kind of like, this is, um, my view over things that are no good choices or bad choices. They're just like actions and consequence consequences.
If you accept your consequence, none of staying in the office more or going with the gang skiing together, none of them are good or bad. It's just like, if you accept the consequences of both, yeah, go on.
[Alexis]
I think the other really interesting thing, at least for me and for reference to everyone listening, this was my first time ever doing a co-living. Um, over the, the fall, the course of the fall, it was all Airbnbs or hotels or like friends' couches and going to Switzerland and meeting Andre. That was my first time ever actually doing a co-working with like a group of strangers that I was like purely brand new to.
Um, and I think what was interesting to me was seeing how, number one, how many different types of jobs everyone had. And like you said, Andre, how they were managing them, because some people were like me where after six o'clock, you just wouldn't see them because they're up in their room. They're up in the office because they're working East coast hours.
I was working from anywhere from five to 2 AM was my normal bout for the day. And it was a sacrifice I was willing to make to be able to get up every day and go skiing from 10 AM to four. Right.
Um, but there was other people who were working UK hours or Andre, I don't even know what hours you were working, but they had to be online during the day. And so for them to get away for a couple hours, they actually had to manage their schedule in a much different way. And it was just really, really interesting to see.
[Andrei]
Yeah, for sure. Um, right now in the beginning, when this co-living, co-working digital nomad was just like for steps, you didn't have a lot of places like to be compatible to your time, timeframe, working timeframe. But these days I'm, I'm confident you can pick up a place that's very tuned to your hours, regardless if it's East coast or West coast.
Yeah. You can pick a place from whatever now.
[Alexis]
Yeah.
[Kevin]
And how was the white, like you mentioned being Airbnbs and like you mentioned Andre about like the wifi, if you're just roaming, the wifi is kind of crazy. That would be like my number one concern. I've been to Europe multiple times and even the hotels and even the nice Airbnbs and stuff, it's still spotty.
So I would be, I don't know, freaking out that I would miss a meeting because I can't get on the fricking wifi fast enough or something like that. It would bring me so much anxiety traveling. I'm blown away that you guys can do this and be, it is not for me at all.
I love my routine in my house and my, we just got back from New York a couple of days ago and I'm still recovering. Like, and that was just New York. That was the same time zone and everything.
And I'm still trying to like get back on track. So I don't know how you guys do it, but yeah, my number one concern would be accessibility to, you know, what I need to get done for work. So do you run into that problem a lot or do you have to like plan ahead pretty meticulously to get that?
[Andrei]
Well, usually the places like this that I'm talking about, if they want to make sure they have a consistent customers, this is one requirement and they need to satisfy from the get go. I usually, when I look for co-livings, I check for reviews, especially on messages and replies on this. If I see something mentioned like, Hey, that was the wifi here.
And I see a message like that two or three times, that's a pattern. And I'm like, okay, I'm, this is on the no side of the list.
[Alexis]
I had better luck. Actually, I had zero issues with wifi at the co-living. I have had issues at most Airbnbs I stayed in Italy, Austria, Belgium.
Kevin, if you remember the podcast episodes we tried to record.
[Kevin]
Oh, I know they were terrible. That's why I'm like, I can't imagine you guys doing this. So what is a co-living space?
How is that different than like, I'm picturing like a hostel in my head. And I have no idea what a co-living space is.
[Andrei]
It has that component for sure. It's one of the things that it's focused on. It's on accessibility.
You don't need to spend a lot of money to stay for a long period of time that it's meant to be sustainable. With all the owners that I've been talking and we became friends right now from different co-livings, I see the same view. This is meant to create a community of people that they are supposed to keep connections.
So yeah, it's kind of like a hostel, but it has a to bring people together and socialize and create activities together. There are some hostels for sure that do that, but this is, it's kind of like, you have the option to opt out from activities, but when you're in a co-living, it's kind of already the assumption that you're in the group and you want to share and have a wonderful experience with the other people in the living.
[Alexis]
I would say that to me hostels feel much more transactional. People are just there for a couple of days, like a much shorter period of time. Maybe you hang out with someone for one night and you have a lot of fun and then you kind of part ways.
But at a co-living, just the very nature of it being a co-working community to me draws a different crowd. Everyone is a little bit more adult. Everyone has more-ish.
Yeah, more-ish jobs, right? There's definitely people that weren't working while they were there, but the crowd is just a bit different.
[Kevin]
So it's designed to work, like to go there and work from it, but then the main clientele?
[Andrei]
It's also, yeah, that's one, they're like two parts. One is working, they make sure you have everything you need to do to keep your job, let's say. So internet connection.
Especially internet connection. But the other side is like the community part of it. These co-livings, co-workings became very popular in the COVID period.
Personally, I see it as a response to all the loneliness that people that were forced to work from their homes and they were not able to leave it and just spent so much time alone. Some of them were creative and they were like, hey, let's be alone together, the kind of thing.
[Kevin]
Almost like a commune, where you're just coming together and having a shared vision and just hanging out together.
[Andrei]
Yes. From all my experiences with co-livings, I've never met people that were on a different frequency from that. I mean, everybody is very welcoming, friendly, and they're open to new ideas and experiences.
It's wonderful to see how many like-minded people you find in every co-living. And Alexis, I think you can back me up here.
[Alexis]
Yeah. No, just the level of conversations are very interesting because, I mean, the mindset and the lifestyle is different just to go and do something like that. And again, the one in Switzerland was the first one I've done.
I will definitely be back, whether to Swiss Alps or to a different one. But when I showed up, I didn't know how to ski. I didn't have snow pants.
I literally had no idea what I was walking into. I had barely seen Google reviews. I found this place online and was in a WhatsApp chat with Stefan.
Okay. That was the only reference I had. I didn't fill out the paperwork properly.
So I didn't get all the Q&A answered. And 48 hours before I was supposed to get there, I got thrown in a group chat with Bruno and Camilla. And they were like, hey, we'll pick you up from the train station.
Perfect. Hopped in the back of someone's car.
[Kevin]
And we drove.
[Kevin]
These were just random people at the co-living place? Well, yeah.
[Kevin]
We had never met. We went and got McDonald's.
[Alexis]
And they took me to the co-living and went to sleep, woke up the next morning. Everyone was like, oh, you don't know how to ski? Perfect.
There was this girl here two weeks ago. I think if you Venmo her, you can buy her old skis. Done.
Right? Within three days, I was completely set up. I had everything I needed to do to hit the mountain.
And I mean, I showed up there with zero thoughts. It was all I could do to just get on the train. But for me personally, I mean, I had been solo traveling since April.
So April, May, June, July, August, September, October, November. Almost eight or nine months on my own working remotely from Airbnbs. And just being able to come downstairs and see a group of people having dinner or playing a board game and have a little conversation with someone versus going and sightseeing or going to a museum or whatever you do during the day all by yourself.
[Alexis]
Yeah.
[Alexis]
And then logging onto your computer by yourself to work East Coast hours at night. The vibes were immaculate. Like so good.
I walked away. I was like, I don't think I ever want to travel any other way. Honestly.
[Kevin]
And these co-living spaces are like every country has them, like every big tourist area.
[Andrei]
I cannot vouch that.
[Kevin]
I mean, I don't, I don't need you to do some research right here. But like generally, you know, if you're traveling, is that, is that something that you look for when you're traveling? You pick a country, pick an area, someplace that you have to co-work.
[Alexis]
I would say they're normally a little bit off the beaten path.
[Kevin]
I've never heard this before, so I'm just trying to, I don't, I don't even know we're on a podcast anymore. I'm just having a conversation about you guys. You're traveling stuff.
I don't know in my book.
[Alexis]
Yeah. Like I wouldn't Andrean correct me if I'm wrong. Like I wouldn't say they're in like the most prime area of the, of the city you're trying to visit.
Like it's probably not the most ideal location. They're usually a little bit outside the city, a little bit off the beaten path. They're more unique.
It's different. I think there's a, there's a couple of different websites where you can find listings or what, if you get into it, they just kind of show up on your Instagram feed. That's what happened to me all the time on Instagram now.
[Andrei]
And I'm like, man, don't worry, the feed are gonna, after this talk, I'm pretty sure all three of us will see some co-livings when we check the phone.
[Kevin]
In the algorithm we trust.
[Andrei]
But, but, uh, even with co-livings, because it's becoming a business nowadays and the main reason why is this level of loneliness that everybody's experiencing. It's a business and there are different levels of co-livings. There are the ones that are very authentic and the backbone of these co-livings are the community and the people that they, they are the fire there.
And also other co-livings that are very marketed, they have an army on influencers that spend their time to promote it. And when you get there, you don't know if you're in a hostel or in a hostel with very kind people that are smiling a lot, but they don't want to do that much with you. You pay a lot of money for that.
It's, it's a lot of branding and rebranding. Um, I'd say go look for the reviews, look for the authenticity comes from people's reviews. Um, actually when I was in my data, there was a place in a very small town and there were like two co-livings.
That was the one that I spent. I think I spent like eight months totally in there. And there was another one very close by which it's very popular.
It's, I think it's called outside and they have this network of co-livings in all the world. And it's very expensive subscription. I'm not sure about the business model, but it's kind of like you subscribe for one year and you're allowed to go everywhere in the world and spend time at one of their co-livings.
The vibe was very different. I'm, I befriended with people from my co-living and people from that co-living. And it was such a big difference of mindset.
Some people, while most of the people in the co-living, I was there, they were looking more to very nature related activities, sports in nature, hiking, spending time in camping, like, yeah, things like that. And the people from the outside, they were like, let's drink, let's make noise. Let's go party.
[Kevin]
My people got it. All right.
[Alexis]
So I think, yeah, I was going to say, I think it goes back to, and I guess it depends on how you travel, right? I just try to get there. Sometimes getting on the plane and getting to the place is all I can do.
I'll ask the receptionist at the hotel what I should do. Lots of people at the airport talk to the Uber driver, right? If you just go to one and you find the people that you really vibe with and ask them like, Hey, have you stayed anywhere else?
It's really cool that you, you think I would like, they'll give you recommendations and then you can just kind of go from there. But Andrea, I did. I had another question for you.
How do you feel that this has affected your career? Like positively or negatively? Do you feel like it has helped you as an engineer, just meeting different people and being in a different environment?
[Andrei]
It helped me. It gave me perspective, maybe not that much as an engineer, but as a human being navigating this capitalistic world that I need to adapt as fast as possible and survive. I'm constantly amazed by the people that I find in those co-livings, you included here, Alexis.
I see so many creative people doing really good in areas that I didn't expect that was a full-time job. And I'm getting a lot of advice and like I said, perspective, I didn't know things were possible until somebody that I've never met in a couple of hours shows me and I'm like, oh wow, this is a whole business idea. It's expanding your perspective.
And sometimes even venting out. I had this experience in Switzerland with this wonderful friend from Poland. I was just venting because I had some meeting with a client of mine and I was complaining that I don't have time for the implementation because I spent too much time clarifying things.
And because I spent all my 10 years as a software engineer, my idea of work is I need to code, I need to push the code, I need to show the code works. That's work. And she was just listening to me venting out and she was like, oh, you're double working here.
You're also a manager and also like an engineer. Of course you need to ask them for more money. And I was like, hi, I think you're right.
So yeah, you get perspective. You get a lot of perspective.
[Kevin]
All right, quick pause because this episode is sponsored by Meter. If you've ever managed a network built from five vendors, six dashboards, and a bunch of contracts that no one fully understands, you know how fast that turns into chaos.
[Alexis]
What usually gets overlooked is the pressure that puts on the people running it. IT leaders need predictability, engineers need control and visibility, and most stacks just weren't designed for that.
[Kevin]
That's where Meter's model is different. They deliver the entire networking stack, wired, wireless, and cellular, as one integrated system. They design the hardware, write the firmware, build the software, manage deployment, and run support.
One platform, one partner.
[Alexis]
And that means fewer handoffs, fewer tools, and clearer ownership. It scales from branch offices and warehouses all the way to large campuses and data centers without turning network operations into full-time vendor management.
[Kevin]
If you care about uptime, accountability, and not being the middleman when things break, this is worth a look.
[Alexis]
Thanks to Meter for sponsoring this episode. You can go to meter.com slash liu to book a demo now.
[Kevin]
That's m-e-t-e-r dot com slash l-i-u to book a demo. Now back to the episode. On the flip side of that, okay, so, if it's, it's, it's given you perspective, but it hasn't hurt you, you think it's hindered your career in any aspects?
[Andrei]
Yes, it can. This is gonna be a bit hard to confess, but I recognize moments in me where I was, okay, let's finish this fast, push the code, and go snorkeling. Or everybody's waiting in their car, we have to do this, like, I told them I finish at four, it's four, I'm not finished, okay.
It's, it can be damaging if you don't have the level of discipline to be committed to your work. One way to prevent this damage is being honest with, with a lot of clients that worked. They, they see this honesty and, and they know if it's not like a hard deadline or a code red B0 that production is crashing, is crashing, and you can finish tomorrow.
If you're open and honest and say, hey, I'm gonna wrap things sooner today, I'm gonna make it up tomorrow, and everything is gonna be fine. But let them know, if they expect you to be online and you don't respond, or you have like an evasive respond, that can add up. And in spending a lot of time in an environment that, where you want to be outside with your friends, with your new friends, you don't realize how fast it's gonna add up.
So the client should know.
[Kevin]
Yeah, especially I could, I could see you like, you know, saying I had to sign off at the log off of the day, whatever. And they open Instagram and you're out there like, posting a selfie in front of something or like out there skiing. And you're like, what the, I thought he had something going on.
[Andrei]
Yeah, I thought he said the dentist.
[Alexis]
I was, I was going to say a lot of it is perspective too. And I, I dealt with this early in my career, but it's different when people know that you're working on the road because, oh, Alexis isn't answering, but I know she's in her home office. Versus Alexis isn't answering and she might be in Hawaii on a mountain.
You know what I mean? And even though, I mean, your day out of 24 hours, you're asleep for seven to eight, you work for another eight, right? As your assigned work hours.
And then the four to five of whatever you get to do with your free time. I mean, realistically, you could be doing anything. It could be the gym.
It could be laundry. It could be going grocery shopping. It could be skiing in Switzerland.
Those four or five hours of your personal time, but managing that perception of other people, if your clients or your coworkers are following you and all of a sudden you're not, you're taking a long time to answer, you could be at your desk knee deep in another email and it's just taking you a while to get back to their Slack message because you're focusing on a different item of work. But because they know that you're out there doing something else, the assumption is, oh, well, they're not working, right? They're not actually working.
And so you almost need to overcommunicate to manage that expectation and be extra visible and extra present and extra online, extra on camera when you're on your meetings, regardless of what time it is, because it's the price you pay for having that flexibility.
[Andrei]
Yeah, that's true. That's true. Be as transparent as possible.
Even go the extra mile. Show them that you're willing to be available. That's a great way to maintain your career, even increase it.
I got, there was a period where I got very good feedback from my work, but when we were in the meetings, the client was insisting for me to open the camera and they would see me just like tropical trees behind and me getting a 10 every day, like from Monday to Friday, I had a different face. But they told me like, Andrej, you're doing really well. This was even before all the AI started.
And they didn't have anything to complain. I was available. But yeah, I also was spending time and try to make most of the environment I was in.
To be honest, spending time in nature and being exposed to the sun and lovely people, it made me a healthier and that made me even better at doing my job. I was more aware, more at peace, more like calmer. These were things that were also impacting my professional career.
So I'd say we can switch the perspective here. Right now we're in a place where hard work doesn't mean smart work. It's these are two different things.
If you spend time on yourself to get like in a healthy environment with lovely people around you and you take care of your health and sleep, you can do better at work than staying lonely in your house and being on the same wheel. It was a good restart for me. So I'd say both are possible.
You can ruin your work and you can enhance it if you have some discipline and transparency.
[Alexis]
I'm curious because you mentioned AI and it's not about just working hard. It's about working smart. What's your take on AI as an engineer, especially as someone who's deep in the software engineering?
Because I feel like software engineers especially are being hit with that.
[Andrei]
For a lot of engineers, this for good reasons is perceived as a threat. Because a lot of companies would be, I'm not going to need 10 engineers anymore. I need a really good one that knows how to delegate things to these AIs.
So a lot of jobs are going to be taken. But on the flip side, if you're creative and you have a rested mind, this gives you a lot of leverage. If you position yourself in a good environment, you can see what's missing and you have all the tools to build it yourself.
I'm trying my best to see that this AI structure that we have right now gives the ability to make individual unicorns instead of big tech unicorns. Now there's the possibility to be just one individual that is very disciplined and organized and has a clear mind and sees what's missing from a lot of industries. For example, right now me, it's hard for me to say I'm a mobile or an Android engineer anymore.
I'm also doing design. I'm also doing DevOps. I'm learning new technologies.
The way I'm perceiving code is not more, okay, I'm a Java developer or a Kotlin developer. These are languages. But I know one language and I can use it as a reference.
And based on that, I can translate in way more. So right now I'm confident enough if I find a client that wants a backend or a web-based product, I'm going to go in and say, yeah, I can build that. I have all the tools and the tenacity to deliver that product.
So it's, like I said, I'm going to repeat myself here. You can lose jobs, but it also opens up for opportunities to take a lot of other work. And it doesn't need to be just in tech.
It can be more creative, more on the design side. Yeah, even building a game, it's easier than ever right now.
[Alexis]
I've seen, I know, man, I mean, I just got a, I posted a post the other day and someone commented and they were like, this is AI swap. And I was like, AI can be used for so many fun things if you're doing it creatively. I've seen so many creators incorporate AI into their style of content and it's video effects or motion graphics or things that memes, the meme videos are so good.
Like they wouldn't be possible without Sora and some of these other technologies that are coming out. And if you can use your brain to apply it better, I don't know, I think it's like the best of both worlds.
[Kevin]
I think that's probably where the hate is coming from is the people who can't, who look at it as like, I don't want to have to evolve. I don't want to have to change and learn new things. And as AI thing is coming in, it's being scary.
It might take my job. So screw AI. I hate AI.
I don't, I don't want to deal with it. And it's just inflexible people who are, who are terrified of losing their jobs and don't want to, don't want to expand their horizons at all, which is crazy to me because in tech, that's, you have to do that constantly. So it's just the next thing.
[Alexis]
It would just be something else.
[Kevin]
Yeah. Like SD-WAN was the same thing. Automation and all this, like, it's all the same stuff.
Every couple of years, there's a new technology that comes out. That's supposed to change the world. AI is bigger granted than the other ones have been.
I think it's actually going to change the world, but I mean, we'll just adapt. We'll just change and adapt. And then 10 years from now, my kids will be dealing with a new, a new thing.
That's going to disrupt everything.
[Andrei]
It's giving, yeah, this has been the case, the whole humanity, like in the beginning, somebody was like cultivating and doing agriculture just manually. And then like automated tools came in and there were a lot of people upset. Because they didn't have a job anymore.
This is always going to be the case. You need to decide on what side of the fence you want to be. You want to adapt and evolve and relearn or stuck, be stuck in that mentality.
[Kevin]
Yeah, I just, and I don't get it. I honestly don't understand it because like, use it as an opportunity to do something different or like whatever, like use it as an opportunity to grow in a certain area. Like I, I've been doing cloud code.
I'm sorry, Andre. I've been, I've been, I've been vibe coding and I know a lot of programmers hate vibe coding is because it is not good code. I'm sure it is garbage security holes everywhere.
Hard-coded APIs, you know, terrible. It's fun.
[Kevin]
Especially, especially because Kevin's screen, he's texting me and Dale and he goes, I'm drunk vibe coding at the airport.
[Andrei]
It's great. Sounds like a good night activity. Exactly.
Having a couple of beers and cloud with you and just chatting together. Tomorrow you're a unicorn.
[Kevin]
But it's, it's allowing me to do things in a quicker pace that I would not have been able to do without it. And I think that is the, the key to AI. And if you can use that as an ability, as a skill to accelerate whatever you're doing, whatever project you're on or whatever you're trying to learn, I think it's a, it's a fabulous tool and you're, you're a fool to not try to use it.
[Andrei]
Yeah. Just repelling it, like resisting to the change. It's not going to help anybody.
I'd say embracing it. I'm for the last year or so I'm constantly using them, but I also slipped a bit. I, there were moments where I abused it and the vibe coding is real, but the vibe debugging, it's also real.
And that's a, so close to how I'm kind of concerned about this because I see an inflection point when it comes to the skill of an engineer from the newer generation. Back then, when we were in a university, we, we didn't have a choice. We had to understand the concepts, the abstract concepts from a software engineering.
Right now, that's not that much the case. There's so many ways you can trick and cheat and get your grades and get the diploma and then look for a job. But there are going to be a lot of people that don't understand the concepts and yeah, AI can do their job.
But when something like in real life, these heroes, like production incidents, when everything is crashing, they're going to happen. And you might like a client might have a couple of engineers that when things go south, no one knows the code base good enough or the architecture to understand where the problem is coming from. So, you know, when it's the same thing, when you go to the gym and you work your muscles, the same thing happens when you try to grasp and understand the complex abstract concept in your mind.
And all three of us had this experience in our studying years. I'm afraid if we, if the new generations, they're not going to have that anymore, we needed to replace it with something. Because this AI, it's offer something that not only humans are, let's say, prone to abuse it, every living being conserves energy if they're not forced to evolve.
So it, it takes a lot of mental effort to go on the longer, longer path when you know the shorter trail is available. It's, and yeah, I'm kind of concerned about that.
[Alexis]
It's gotta be a balance between going the longer path and then also using the shorter path to keep up with everyone else at the same time. Because if you don't, you are also going to get left behind.
[Alexis]
Unfortunately, yeah.
[Alexis]
I'm curious, Andre, for someone who's looking for a remote job, I get asked in my DMs all the time, right? How can I get a job like yours? I don't have a traditional engineering job that is letting you work remote, but you do.
So what would you recommend to someone who's looking? Is it something you bring up in the interview? Is it something you get the job and then try to talk your way into later?
What's your advice there?
[Andrei]
Well, recently the market shifted a bit. The hype words right now are like hybrid or back to office kind of narrative. So the aftermath of the COVID has been, has passed.
When you know how to do things really well, you can find clients from worldwide. And when you're from a different country, remote is the only option. And they don't mind that much from where remote you're working from.
But that's true. If I'm looking for jobs here in Romania, where I live, filtering out this hybrid and back to office, it's going to be a really big filter. Half of the positions or the offers, they're going to be filtered out.
So I guess people, companies are trying to bring people back in their office. But if you're very skilled in your department or domain, you can always find work remote.
[Alexis]
I think about it like a negotiation, like back when I was renting apartments and it would say no animals, no animals allowed. And I was like, well, I have a 750 credit score and I can pay rent. Does that count?
And then they'd meet me and be like, yes, actually you only have two cats. There's some wiggle room there. So maybe you get the interview, you prove you're a really good engineer.
They really, really want you. And then you're like, okay, so I come with some terms and conditions. Do you care what country I'm in?
[Kevin]
Well, that brings me to my question of, you know, is this something that's feasible for someone who's early career? Or is this really only something attainable, like mid senior level?
[Andrei]
There's a better chance to get a remote job when you're closer to a senior level, especially in junior level. They need to have somebody around them to show their strings and be observed and have like a proper learning path. So, yeah, a senior can be, can have more access to this.
Um, uh, I wanted to say one can always like reach out to this freelancing platforms. There are a ton of them and it's not, it doesn't take you that much time to apply to them. Some of them are very thorough with the recruitment process, but most of them, they just like you sign in, you put the details, your work experience, and then you're good to go.
And keep the funnel of opportunities as much open as, uh, as much as you can and allow, allow yourself to go to some bad interviews. Like you're, you're going to get the muscle working right. This, um, I'm not feeling ashamed anymore if I apply to a job and, uh, I'm not going to be a match, uh, let's say, um, cultural wise or technical wise, things like this happen.
Um, I had experience where people that prove technically they were, uh, lower than me, they didn't want me to join their team. And when I was interviewed by them and there was also moments where I recognized, okay, I don't know the technology and the area that good. So I'm, I'm okay with both scenarios right now.
It's a trial and error. One good advice would be try as much as possible, propagate your resume and your work history and reach out to all these platforms.
[Kevin]
And I feel like people get a trap of saying like, I want a job and they're not very picky about the job itself. And like the job they're interviewing the person, the job is very picky. They know exactly the kind of person they want, but the interviewee on the other side is just like, please just hire me.
I want money. And they, they need to get into the reverse that and be like, no, I'm also interviewing you. And these are the things that I want out of an employer.
And one of those might be flexibility in working location, something like that.
[Alexis]
Lauren, I think it, I think it depends on where you're at too. Andre, I like your point about, you know, early in career versus mid career versus senior. You, when you're early in career, I think something that's really, really important is getting yourself visibility and visibility, credibility, trust.
You need to, you need other people on the team to trust in you and know and have confidence that you are capable and doing the job. That comes with experience. That comes with projects.
That comes with showing up. That comes with FaceTime. That comes with sitting on calls.
And whether you are remote at home or remote somewhere else, yes, you could do those things. Once you have leverage, you are indispensable to the company in one facet. Leverage gives you negotiating power, whether that's for salary, whether that's for hours, whether that's for which projects you're working on or which teams you're working with or where you are physically located, you need that leverage to negotiate those things.
And you accumulate that as you get more skills and more things under your belt. However, that's also coming from a very privileged stance of you have a job and you have negotiating power. If you got laid off, you don't have a job, you got bills to pay and you got to put food on the table, you got to get a job first.
So I think that's where maybe the, just get any job. I just need a job. If you just need a job because you need to pay your bills, sure.
[Andrei]
Yeah, that's very well put.
[Alexis]
What's the saying? Start working for the job you want, not the job you got. If you got a job and you don't like your job, use some of your extra hours or your extra time to start working towards the job you actually do want.
[Andrei]
That's a really good way to put it. I want to add this when it comes to remote working. Right now there are some places, for example, I can say about London where somebody pays something like 2000 pounds for one month worth of rent.
But if you go to a co-living place, you pay a quarter of that to get into a place that can be even more spacious and more healthy and not as boring as UK when it comes to weather. I heard this tendency, actually it's a trend of people finding really amazing exotic places, but money-wise they spend way less than they're used to spend back at home. So they're also traveling, they can work and they save money through that.
And that allows you, it opens up for the opportunity to, let's say, not be that picky because you need to pay your rent, pay the utilities and everything. You can have something lightweight, get the same money by the end of the month when you cross all the budgeting you do and still have a healthier lifestyle. So this is also an option.
[Alexis]
It's about tailoring for experiences.
[Andrei]
Yeah, I remember a lot of people were doing that in Nepal. Four years ago, I was in this wonderful town in Nepal called Pokhara and I've seen so many digital nomads there. Every restaurant had a couple of people like from UK, from US, they're just sitting there with their MacBooks and coding every day.
It was interesting to see, because Nepal is very cheap, they had the comfort that they had back home, but it was just one tenth of the price and they were able to make a lifestyle there. And also it's Nepal, so you can see Everest, you can see so many exotic places from there and you can still do your work. Well, it depends on the time zone.
Yeah.
[Alexis]
You make it work.
[Andrei]
Yeah, for the most part. You can make it work.
[Kevin]
I'm time zone independent at this point, Andre, come on.
[Kevin]
All right, Andre, we're getting close towards our time limit. I have two very, very important questions for you. Number one, behind you, there's an access point hanging from your ceiling.
Can you please tell me what the access point is? Because I've been staring at it for the last hour and it's driving me nuts and I can't recognize it. Oh my God, it's moving.
What is that?
[Andrei]
It's my laptop moving.
[Kevin]
Oh, it's not even an access point. It looks exactly like a router. Oh my God.
It's been driving me nuts. You don't see that, Alexis? Top left of your screen.
Here on top? Yeah.
[Kevin]
Yeah, it looks like a fish or like a TV mount or some lights.
[Kevin]
Oh, to me, it's like they're just some lights. It looks like you're on my screen that's about this big. But it looks like a circle with antennas coming out.
Okay, I should have asked that way earlier.
[Andrei]
I'm not an alien, I promise.
[Kevin]
It's just one of those things where my eyes go to it and I can't stop staring at it unless I... Okay. Anyway, so that was question one.
Check. Question number two. It was very important.
Question number two, what is the craziest story you have of living in a co-living space while trying to work and you have this situation that has happened to you that you were like, that was absolutely insane?
[Andrei]
Well, I had this situation when I was in Madeira. We were a very close group and we were doing a lot of activities together. So we planned out to do a picnic Friday evening and everybody was cooking.
They were preparing everything. The cars were ready and then I get the call from my client like, hey, our production is done, something happened. And it was a feature that I built that why everybody reached out to me.
I knew everything there and everybody was waiting for me. I think like six or seven people were waiting for me and I got this call and I told them guys, 10 minutes, please. I need to check this out.
[Kevin]
Never 10 minutes.
[Andrei]
So I looked at the code when I got the message from my supervisor, like, Hey, this is your code. This is your feature. Solve it.
And I look at the code, every line that was this, uh, last file with, I think it had like 500 lines, something, everything was written by me, except the line that was breaking. Somebody else changed that with a force push. And the, the error was something it was looking for a 31st of a month.
And it was 30, 30 September. And the next day was the 1st of October and it was crashing because the day didn't exist. And I lost the opportunity to go to the, with the, my gang to enjoy our start of the evening of the weekend.
Because I had to solve somebody's problem with, they didn't told me they forced push on my, uh, feature. And I just, I was a bit angry. I just showed the kid Blake, like, okay, this is the problem intentionally showing the name.
And I'm like, I'm out. Peace. Have a nice weekend.
[Kevin]
Oh man. That's rough. There's, I'd be so tempted to be like, ah, sorry.
It's a time. It's weekend. Bye.
Like it's, oh man, that's rough.
[Andrei]
Well, we reported, uh, we had, uh, we had a bill prepared. We reverted until we solved the problem. But, uh, I, I found the problem.
I was like, okay, you made the problem, make it disappear. I'm going to enjoy my weekend ticket, which was not the best thing to do. It was a mix of emotions in me because I let people down while I was blamed on something.
And, uh, um, my response was, uh, let's say on a low frequency that, uh, I learned from that experience. I should have been more professional.
[Kevin]
Now, would you have, if you had been home in like a home office in that same situation that happened, would you have then stayed and fixed it and like had a different reaction?
[Andrei]
Yes. I knowing myself. Yes.
Because I didn't have anything better to do. But the level of stress was here because I had plans with other people and I felt guilty because I was making other people waiting for me, which even if you were home, that's possibly happening to like, you could have plans.
[Kevin]
Um, it's, it was the weekend. You could be meeting friends at a bar locally, something like that too. So it's not, you know, I'm, I'm trying to, in my head, I'm going, okay, pros and cons of, of working remote.
And a lot of the cons that I'm hearing are the same things that could happen where you're living now, you know, same things happen.
[Alexis]
It goes back to managing, managing your time, communication, being visible, meeting expectations.
[Andrei]
Yeah, you're right, Kevin, that can happen everywhere. But, uh, from home, I feel like I'm more used to saying, Hey guys, I'm going to be seeing the pub after 30 minutes. I'm going to be 30 minutes late, but there was like, in the front door of the house, there were like six, seven people like staring at you and they're like, Andre, Andre, where are you?
[Kevin]
I'm like, okay, true. Yeah. I could see it being very different living with them.
Yeah.
[Alexis]
Would you say Andre, that working remote, I feel like when I'm home in my home office, I am much more inclined to overwork. Like I will wake up, I will open my computer and I will work and work and work. I'll go eat something and then work out and then get back on my computer and work and work and work.
Right. My default mode, unless I have dinner planned with my parents or like something is working. I enjoy working.
I like what I'm doing. And I feel like for me, traveling has forced me to step away more and it's not that I'm working less. I mean, I am technically working less.
It's just that I'm working a normal amount instead of the extra amount that is normal when I'm at home.
[Andrei]
Yeah. Well, I can ask you, was the same in Switzerland? You felt like, okay, I should work the whole day after the eight hours?
[Alexis]
No, I mean, I only gave myself eight hours, right? I would sign on at 5 PM and I worked until one in the morning. And at one in the morning I was spent, I would pass out, I'd wake up and then I'd go ski.
And so it was almost like I was forcing myself to only work eight hours. And don't get me wrong, when we were skiing, I still brought my laptop and popped it open at a couple of the cafes.
[Andrei]
Yeah, I've seen it.
[Alexis]
But I worked less because I only allocated that time to work versus at home. I feel like the scope creep is so much more real.
[Andrei]
I relate to that. When I'm at home, let's say I finish with the work, my leisure time back home in the crowded cities, when the weather is not as good, it's opening another screen, going to Netflix or another streaming service. And I'm still looking at the screen.
It doesn't sound attractive, but you don't have a lot of options. You cannot go out every night if you have to work the next day in the morning. You need to be, let's say, fresh.
And in the town, in the city, you don't have that many options as you do in an exotic, co-living place.
[Alexis]
So, Andrei, as we wrap up the show, I've got one last question for you. If you had a piece of advice for someone listening who maybe wants to follow in your footsteps, or if you were going to give yourself from five years ago a piece of advice, what would that be?
[Andrei]
I'd say try it out step by step, book a week or two, and allow, give yourself this space of, let's say, maybe that's meant for me. Maybe that's not meant for me. You're going to realize, and it's not so much of a burden or time wasted, knowing exactly that you're not meant for co-living or for this type of environment.
It's a good thing because you don't feel, oh, maybe if I should do it, if I'm not going to do it, like questioning. It's not that hard to have one attempt. That would be one.
And work-wise, look for freelancing opportunities and go out there. Expose yourself, try to fail more, even at interviews. Yeah, that's the main advice here.
But I've never met a person yet that they regret trying co-living. And I never met somebody saying, oh, okay, this is not for me. I'm not going to come again.
Usually, all the people that I meet in co-living, they're like, okay, see you next year. So I'm kind of like, I don't know, not hoping, but I'm not going to be mad if I'm going to meet somebody. I'm going to be, okay, lost from the bucket list, I guess.
[Alexis]
Perfect. Well, that is it for this episode of Life in Uptime. Huge thank you to Andre for sharing his journey.
And thank you to you for listening. If you guys enjoyed this conversation, be sure to follow the show so you never miss an episode. And if Andre's story today gave you something to think about, make sure you share it with a friend or colleague who might need it.
And until next time, keep learning, keep building, and keep your uptime high.`,
  },
  {
    episodeNumber: "012",
    slug: "ep-012-behind-the-curtain-at-life-in-uptime",
    title: "LIU012: Behind the Curtain at Life In Uptime",
    guest: "Melina Bertholf",
    guestTitle: "Executive Assistant",
    guestCompany: "Digital Byte Technology",
    guestLinkedIn: "https://www.linkedin.com/in/melina-bertholf",
    description: "Kevin and Alexis are back with a behind-the-scenes look at the podcast with guest Melina Bertholf, who joined the team a while back to help manage content. (And yes, sharp-eyed readers will notice a family name shared by Alexis and Melina). After interviewing many guests about their tech journeys, our hosts share their own personal stories about how they got into tech. Melina keeps them honest, and brings her own perspective as a non-tech person diving head-first into this environment. AdSpot Sponsor: Nokia Nokia Event-Driven Automation (EDA) is a cloud-native infrastructure automation platform built on Kubernetes for data center networks. Transform your data center operations with intent-based networking, real-time observability, multi-vendor support and integrated GenAI and agentic AI capabilities.  The new Ask EDA is your 24/7 AIOps assistant that doesn’t just understand what you ask, it understands your network, predicts issues before they hit production, gets clear explanations for problems, applies fixes and validates them—all without endless documentation searches or late-night calls to senior engineers. From troubleshooting errors to monitoring network health, Ask EDA is your digital twin and smartest network engineer assistant—always on, always ready.  Learn more about Ask EDA at nokia.ly/EDA and try EDA for free at docs.eda.dev",
    airDate: "April 9, 2026",
    packetPushersUrl: "https://packetpushers.net/podcasts/life-in-uptime/liu012-behind-the-curtain-at-life-in-uptime",
    youtubeUrl: "https://youtu.be/uT1AbXlAYJQ",
    transcript: `[Ethan]
Today's sponsor is Nokia event-driven automation. EDA is a cloud-native infrastructure automation platform built on Kubernetes for data center networks. EDA supports multiple vendors and integrates both generative and agentic AI, including the new Ask EDA.
Find out more at nokia.ly slash EDA.
[Kevin]
Welcome to Life in Uptime, the show where we talk with the people behind the networks that keep our world connected. However, not this episode. I'm Kevin, joined by Alexis, and today we have a special guest that is not technical.
Alexis, who are we talking with?
[Alexis]
We are talking to my little sister, Melina. Melina, how are you doing today?
[Melina]
Great.
[Alexis]
Kevin and I had so much fun with our last episode that was slightly unstructured that we decided to do it again. I'm not sure if you guys have seen Melina in some of our content. We brought her on board about three weeks ago, but we wanted you guys to get to know her a little bit because she's going to be around in the future.
[Kevin]
Sounds creepy.
[Alexis]
Around.
[Kevin]
She will be watching and listening to everything.
[Alexis]
I just, you know, sometimes when you bring another person on board, Melina's helping us with some of our content, and so I didn't want anyone to be like, who is this random girl that keeps showing up in Kevin and Alexis's reels? Who is she? The daughter.
[Kevin]
Yeah, she's like a producer for the show. She's, you know, she's managing everything. She manages us, basically.
Without her, we'd be completely lost.
[Melina]
I would just be eating cookies in New York.
[Kevin]
She would do that anyway.
[Melina]
Couldn't stop it.
[Kevin]
Cookies and ice cream and candies.
[Alexis]
Technically, no one stopped me. You guys just let it happen. I recorded you.
[Melina]
I keep saying I'm going to be healthy eating on the road.
[Kevin]
No, it's all a lie. Okay, so today's episode, we want to kind of talk about our own journeys in tech and how we ended up here because we've interviewed a lot of people who are in technology and they have all amazing stories, but we also realized that not everyone listening knows us and has been following us for, you know, the three years that we've been doing content. And so you guys might not know our stories, who we are, why we're even here in our, you know, our journeys through tech.
So this is a good opportunity for us to just talk about our experiences. And Melina's here just to keep us honest and give us her experience of joining through this process and seeing it from like a non-tech person, which I think is a really cool experience she has that a lot of people who are coming in are having the same feeling she is where she's overwhelmed. All these acronyms are flying at her.
All these new technical things are coming at you and you have no idea what anyone's talking about and you have to try to keep up.
[Alexis]
I think the other thing that's fun is that every time we get into a topic like this, Kevin, I feel like I learned something new. Like I feel like I'll know you pretty well and then you'll actually start talking about your career or what you did. And I'm like, oh, wait, I didn't know that.
And we talk all the time. So this will be fun.
[Kevin]
You don't let me talk. It's all you talk.
[Alexis]
Okay.
[Kevin]
I'm kidding. I'm kidding. Mostly.
[Alexis]
Why don't we start with, did you grow up dreaming about being a network engineer?
[Kevin]
No, not at all. Never. It's a standard story of a kid playing video games, right?
My dad was actually in technology. He was a web designer for the local school district. And so he had computers at home.
He had technology at home. He always had the best laptop. And we actually had the first internet in Florida.
It was called Fern, Florida Internet Research Network. And it was an education only internet network. And so I was exposed to the internet at a very young age for better or for worse.
And I got like an instant. This is the coolest thing ever because no one else on my block has this. And it's a really awesome thing.
No idea how it works. No, no, really.
[Melina]
It's the coolest kid on the block.
[Kevin]
Yeah. And that's all I cared about. Like I didn't actually care how it worked.
I didn't actually care about the technology part of it. It was just the cool factor. And I could like go and aim and talk to people and go in chat rooms and do all kinds of things that I would not be happy about my kids doing talking to strangers and stuff.
But it was a more innocent time. It was a more innocent time.
[Melina]
Omegle and Skype.
[Kevin]
Well, they didn't have that then. But you're younger. Youngins.
It was all like ICQ and like chat rooms. You don't know what ICQ is, do you?
[Melina]
No.
[Kevin]
Oh, man, you guys are killing me. We're only like five minutes in the episode and I'm already old. That happened fast.
That might be a record.
[Alexis]
I'm not sure what else you expected when we said we were going to talk about your career.
[Kevin]
True. Okay. Back in the olden days.
[Alexis]
So you were the coolest kid on the block and then you went to school. Did you study computers?
[Kevin]
Yeah. So I wanted to be a web design because that's what my dad was doing. That's pretty much all I knew of the internet.
Like I knew the internet went out there and that's how you interact with it. You go to websites and that is the internet. And I want to do someone technology.
Did not like programming. I tried doing some programming. I did some basic HTML, CSS, that kind of stuff or websites.
But that's as far as I wanted to go. Went into college, majoring in web design and absolutely hated it. Talking to users or people like who are paying me to do their websites was the absolute worst thing.
Because I spent, you know, days on a website design that they wanted, that they told me about. And then they would nitpick every little thing. This margin is half an inch too fine.
This button's green and I wanted it blue. And it was meetings after meetings, after meetings, talking to them, trying to fix the design and every time they would change it. And it just kept, I was like, I hate user.
I hate people so much. And I was, believe it or not, I was not as a social butterfly as I am now. I believe it.
[Melina]
I don't.
[Kevin]
That was fast. Dang. I was a nerdy kid.
Did not know how to talk to people. Did not know how to do small talk. I was terrified of having conversations.
So the idea of spending time and talking to people over and over again was terrible. And so I graduated with an IT degree, general IT degree, no idea what I wanted to do. Got my first job at the school district, because again, my dad worked there and it's about who you know.
And I was like a general IT person for a school. And it wasn't until we ran into a network issue at the school that I actually had to dig into networking. And it was a computer lab.
And the computer lab had a hub that would connect like 25 computers. It was like multiple hubs, all daisy chained together. And the computer lab during the peak hours would always crash out.
Kids would not be able to connect to the internet and they couldn't figure out why. So they called the IT guy. I went to the classroom, crawled under the desk.
There was like inches of dust everywhere. And you know, it was disgusting. And I had no idea what I was looking at.
All the lights were green. And I knew enough of IT at that point where like green meant good and red meant bad. I think that's like pretty general now.
But at that time, that was that was hot stuff. Okay. And there was a little light that would blink green and then red and then blink green and red and green and red.
And I was like, okay, red is bad. So this little light's called collision. And let me go back to my desk and start Googling network hub.
I think it's a Netgear or something collision. And that took me down this giant path of what a collision is, broadcast domains, hubs for switches and all this stuff. And the more I learned about it, I was like, wow, this stuff's actually cool.
Like this isn't just, you know, you connect to a modem and the modem goes out and it's done. I can actually see where the computers are connecting and packets are going and things are happening. And that was like, it was tangible.
It wasn't just, it goes out of my, out of my wall and hits the phone lines and it's gone. This was something I could actually touch and see and cables and all this other stuff.
[Alexis]
You had the internet in your hands.
[Kevin]
Yeah. It's like the IT crowd, you know, they have the little black box. Tell me, you guys know what the IT crowd is, right?
You're, you're looking at me like you have no idea. Oh my gosh. I'm not going to go on a rerant.
Okay. I won't, I won't put you guys through that again, but check out the IT crowd. But yeah, it was cool.
I could touch my hands on it and it was something that the more I learned about it, the more I wanted to do. And at that point I was like, I need to quit the school district. I need to quit my help desk job, basically get my CCNA and I want to become a network engineer.
And that started my journey and I didn't look back since. I've been in love. It's been a, it's been a true love story ever since.
[Melina]
It's amazing.
[Kevin]
Yeah.
[Alexis]
I love that.
[Kevin]
So that's my, my elevator speech of how I got into tech. Alexis, I know.
[Alexis]
Your villain origin story.
[Kevin]
I wouldn't say it's a villain because it's, it's, if I was in like server team or something like that, maybe I'd be a villain, but.
[Alexis]
All of your lights are green.
[Melina]
Like all, all of your whole brain is green.
[Kevin]
It's symbolic. Yeah.
[Alexis]
Oh, okay. Okay. I actually, I kind of wanted to hop to Malina next.
[Melina]
Oh, you still want to talk about yourself.
[Alexis]
She's still at the beginning and I feel like it's very relatable. And just reflecting on when I was first getting into technology and how scary it was when I felt like everyone knew something that I didn't. And Malina has been thrown into a role where she's working with a lot of very technical people.
And not only is she not the only beginner, right? She's on a team of one. So how are you learning?
You know, what's that been like?
[Melina]
It's funny because I was actually just saying today. I used to always say, you learn something new every day. And I was thinking about it and I was like, I feel like I learned like 10 new things every day now.
Like it's, it's, I'm like.
[Kevin]
Not only that, but you're, you're being not only thrust into technology, but you're being thrust into like people that are experts. Like, it's not even like, you know, you're starting at a help desk job and the kid, everyone around you is also learning or whatever. You are like, we're interviewing high level people that are big wigs in this job.
And like, you're, you're conversing with people who are like, that I'm awestruck by. So like, it's like, I can't imagine like you like talking to CCIEs and stuff like that. Like I, to me, that was a mythical creature back when I was starting networking.
Like CCIEs were like this idol that were like, you don't, you don't talk to them.
[Melina]
You don't touch them. I was talking about what was it COO? And I'm like, I don't even know what that means.
Throwing around titles.
[Alexis]
So Malina, can you tell us a bit about your journey post? Maybe start with like junior year of high school.
[Melina]
There's nothing to talk about in junior year of high school.
[Alexis]
You made a decision not to go to college. Yeah. Okay.
You want me to start there? Yes. That's a great place to start.
[Melina]
So junior year of high school, COVID happened and we had to wear masks in school and we were sitting on our computer and it made me the laziest person in the world. And I'd fall asleep in my classes and mom would have to come wake me up and it'd be a half hour after my class ended. And I'm like, Oh, gotta get out of there.
I jumped every class late because I was always asleep. I lost all motivation. It was awful.
So when they were like, Oh, like this, anyone want to come back to school? We could wear masks. We could separate our desks.
I decided, yeah, it might help with my motivation. So I went and it was awful. And it ruined my senior year of high school.
It was so bad. We had to wear masks in graduation. We had to sit six feet apart at graduation.
It was awful. And everyone was rude about it because it was like the sticklers that were like, you have to stand six feet apart. And it just ruined everything.
So then I decided I wanted to go to Temple for college for psychology. I really liked psychology. My sophomore, junior, senior year, I'm just interested in how people act and stuff like that.
I just like psychology on stuff. And I committed to Temple. And I was filling out my dorming stuff with mom.
And I was like, what if I just don't go? She was like, is that what you want? I'm like, a gap year.
Like, yeah. Gaps, years, gaps, six years. So then I worked at Texas Airdouse for, I continued to work there for six years and got less and less of a people person.
And now I'm here.
[Kevin]
Which I've seen some of your TikToks where you were like, taking pictures of bad customers. One person wrote in ketchup on your table or whatever, no tips, service sucked or something. So yeah, I don't blame you.
[Melina]
Bad service and ketchup on the table.
[Kevin]
I dealt with crappy people doing web design. They were like, that button's a different color. I've never had someone throw ketchup at me.
So I think it's a different level.
[Alexis]
What do you feel like your main takeaways were from working there? Do you feel like you learned tangible skills? I feel like people always say working in the service industry, there are skills that will serve you the rest of your career.
[Melina]
Yes, I definitely have better communication skills with people. I hate talking to people on the phone. If I have to order a pizza, I'm like, hey, can I order a large?
I hate talking on the phone. I hate going into shipping your boxes at the UPS. I'm like, yeah, can I ship this to California, please?
I feel like I didn't have good social skills. And COVID again, ruined that for me. And so serving definitely, I could just be someone that those tables don't know.
They don't know who I am. I'm just their server. And I could, I was lying to people out of my butt.
Telling those stupid... Just, yeah, making up stories, knowing people don't know you. I didn't care.
You would just go make a little bit to entertain yourself. Yeah, if it was a boring, slow day and I'm just like miserable or something, you got to do something and cheer yourself up.
[Kevin]
What kind of lies did you make up? I want to hear your like, did you have like a whole backstory of like, my name is Natasha and I am from Russia.
[Melina]
Oh no, I mean, I have a name tag on that says my name. I can't think of anything specific. Like, I mean, I had these like crazy regulars that were obsessed with me for like, no good reason.
They were just a little weird. That was a nervous laugh. Okay.
So I mean, no, it was just like an older couple and they were like obsessed with me going to college because like, I would just tell people my life story and if they got a little weird about it, yeah, I apply to them like, oh yeah, I'm applying this spring. I'm applying this fall. And they're like, oh my God, when are you going?
And I'm like, oh, I'm actually moving to California to go to college. Surprise. And they're like, oh my God, we're so proud of you.
And then they see me a year later and I'm still there. I'm still there. So I don't care.
[Alexis]
What has been your initial reaction? I and this is on me. I feel like I've thrown a lot at you.
Melina's been on board for maybe a month now. And I'm like juggling in circles. Her first task was setting up a new domain.
So we stopped using Gmail addresses. She's like, what is this DNS?
[Melina]
I never knew what a DKIM was.
[Kevin]
You threw the newbie at DNS, Alexis. That's like, come on.
[Melina]
I was at another time zone. She has Google and cloud co-work. I didn't.
I didn't when this was happening.
[Kevin]
But she paid someone to get it working, which that's, you know, that works.
[Melina]
Alexis did.
[Kevin]
Oh, Alexis did. Okay. Wow.
[Melina]
Outsource.
[Alexis]
We can outsource. It's called using every tool you have available. And sometimes Fiverr is a great tool.
[Kevin]
Yeah. I mean, as a small team, you have to, you know, manage your resources.
[Alexis]
Melina, what? I'm curious. Initial initial 30 day review.
Well, not of me.
[Kevin]
No, no, we can do it. Let's let's do it. 30 day review of your boss.
[Melina]
When Alexis moved in together, she was like, so like, how was it living with me for a week? Like, am I a good roommate? Can you tell me everything I did?
Feedback in performance metrics. It's a good communication skill, because if you don't know, it's going well. I'm not knocking you for it.
It was, it was funny. So like first 30 day trial.
[Alexis]
I was going to ask more about tech initial reactions of working in technology, not of working with me, but yeah.
[Kevin]
I'm curious about the working with you part, though. It's that's the part I'm curious about.
[Melina]
Okay. It's not that bad. Like.
[Kevin]
It's not that bad. Okay. That's a great way to start.
[Melina]
Like me and Alexis never got along. So to understand like why she is the way she is and like doing it for her and helping her. Now I get it.
And I'm like, okay, maybe she's still a little bit crazy, but it's less crazy than what I thought it was.
[Kevin]
No, that is a compliment, Alexis.
[Alexis]
I'm hearing a compliment. They're running joke. They're running joke right now is when we go on family vacation again, instead of just me sitting on my laptop.
Now it's going to be me and Melina sitting on our laptops.
[Kevin]
Well, now you're paying her to be on your laptop for you, right?
[Melina]
Yeah. So you could have off and I guess all this work we could switch. But yeah.
So like working with Alexis isn't awful as I thought it would be.
[Kevin]
That's a solid review. I know when, you know, my boss says you don't completely suck. It always feels good.
Okay. So Alexis, is that okay? Okay, boss.
How has been the technology? How's been like drinking from a fire hose?
[Melina]
It's definitely interesting. Like I hear things that I never thought I'd hear before. I'm like trying to understand things that I never thought I'd try to understand before.
Like I said, I've learned 10 new things every day, but don't quiz me because I can't have any answers for you. I just like, I don't know. I do my research when I want to understand it.
And if I like, don't grasp it, I like continue to research it, but not like to an extreme. I'm not like obsessed with learning it. It's just like, I'm just like kind of trying to retain the information that I'm getting thrown at me, but it definitely helps when the person I'm helping makes like informational videos.
And also you make it helps when I'm like editing something. I'm like, oh, okay. I get it.
[Kevin]
Honestly, like, have you guys talked about like partnering up for content? Like, I don't know. I use my wife and my kids for content all the time.
I'm like, is there something that you guys do with technology you had to understand? And one of my most successful videos was about website cookies. And that was my daughter, my 15 year old daughter.
She was like, every website I go to, I have to click accept cookies. I'm like, I have no idea what that thing is. So I'm like, okay, I'll make a video about it.
And it ended up like having over a million views and like it went great. So you guys should.
[Melina]
I can't wait to watch it.
[Kevin]
You don't watch my content?
[Melina]
I think you did like. No, I do. You were like pumping something cookies.
[Kevin]
Probably. Who knows? I'm a weird guy.
But yeah, I mean, it's a, it's a, she's a resource. What I'm saying? You should use her as being like, what don't you understand about technology or about anything?
[Melina]
You want me to start making you lists?
[Alexis]
Yeah, no, literally. I think that's the other, I think that's the other thing. And I'm sure we'll get into this a bit more later, but moving from a hands-on engineering role into a role where I am doing a lot more high-level content creation, the process of deciding what to make is so much different than it was when I first started.
Which when I first started making content, I feel like I've told the story a few times now, but I was a solutions engineer at Cisco and I just made videos about what my customers were asking me questions on. Every video had the basis of, if one person has this question, more do two. And with technology, more often than not, that's true.
But when I moved from a hands-on role where I was working directly with customers themselves into what I'm in now, which is more of a community-faced role. My job at Megaport, I actually, it's funny. I just put together a list of initiatives I'm running for my boss with like a status update on each and there's like 12 different things, right?
Not all of them are content-focused. And a lot of it's more about driving community, brand presence, how to enhance like the technology and the technical voices without glazing over all of the marketing fluff, right? And being like an advocate for actually...
[Kevin]
That's difficult, yeah.
[Alexis]
Just talking about the technology as it is. I'm sure you guys have all seen, you know, ad campaigns with some like beautiful marketing slogan on it. And you're like, what does that even mean?
[Melina]
Yeah.
[Alexis]
I'm really big on just saying the thing as it is. You don't need to sugarcoat it. You're marketing to engineers.
You can just tell them and expect them to have a level of understanding because they work in... They're specialists, right? Like they are engineers.
You can just tell them the thing.
[Kevin]
Every engineer has like a giant BS detector. If we start hearing fluffy words, it goes off. And we're like, I don't trust a single thing you're saying because it smells like BS.
[Alexis]
Right. So that's a lot of what I'm doing now. But in order to go back and make technical videos, now I'm not getting those direct questions from customers.
Of course, I get a lot in my DMs. I get some of my comments. But it's not really the same as like sitting across the table from someone and having them ask you questions directly. So the process has just looked a little bit different now.
I also feel like I'm kind of losing my voice. So if you guys hear me coughing, I'm so sorry. I was sick.
[Kevin]
Yeah. And you're traveling and you're... I deal with my customers still and I deal with co-workers and I pull a lot of content from there.
But I also have the time to do some research on my own projects. I have a home lab that I'm spending probably too long, much to my wife's chagrin, doing projects and stuff like that. I'm doing the open claw and some AI agents, messing around with that stuff.
[Alexis]
And it looks really cool.
[Kevin]
It is really cool. AI agents are... I know people hear about AI, AI, AI.
But AI agents are taking it to the next level. I used to be before... I'm not saying I don't know a soapbox about AI.
But I used to be before like, every job is going to be fine. AI is overhyped and overblown and blah, blah, blah. But now that I'm actually messing with AI a ton, man, I am nervous for all tech jobs, really.
[Alexis]
It's something I really wish I had more time to play with and set up. I mean, I have a small home lab that's in Malina's office right now. It's kind of funny.
It is really bizarre seeing Malina sit at my desk where I usually am. There it is.
[Kevin]
Perfect, perfect.
[Alexis]
But it's something I wish I had more time to play with because I feel like when I am home, I'm home for such a short period of time. It's all either admin things, going to the dentist, fixing my driver's license, like random appointments. Like I have to cram all of that in like three or four days, once every other month.
And then outside of that, I'm on the road. And a lot of... You're sticking to the road.
Well, I think it's so... Where I'm at in my life right now, it's worth it. It does take a lot more brain power to make sure that, okay, I have my hotel booked.
I have my flight booked. This is done. I need to find a place to eat.
I need to find a gym where most people... You're sleeping in the same bed every night. You're going to the same gym every day.
You go to the same grocery store. You're using the same pots and pans. And so it does take a lot.
You're on autopilot a lot. Yeah, and I have really... I feel like from COVID onwards, I mean, similar to Melina, COVID, I was graduating college, right?
And so I went to my first job at Cisco. I went in the office. I was there for like three weeks, and then we got sent home.
And in a lot of ways, that transition from being in college and being like super social and around people all the time to just being isolated in a work-from-home job in like your new adult life, people always talk about college being super formative. But I also think the two or three years where you're adjusting to your new cadence, what does it look like to be a working adult? What does work-life balance look like?
How do you make friends that aren't college friends now that you're a working professional? And I feel like that change for me was really hard because, again, it was COVID. And I'm so lucky that it didn't affect my high school or my college years.
But especially transitioning into corporate, I do feel like I kind of struggled to figure out what a good balance was. And every day, I used to say every day felt like Groundhog Day. Every single day felt the same for so long.
And I mean, we did three moves during that time. I lived in Raleigh, North Carolina. I lived in Washington, D.C. Then we moved to Charlotte. And I thought that moving cities would fix it. I thought that moving cities would kind of fix the monotony. And I feel like looking back, time went by so fast.
Everyone says that time goes by faster as you get older. But I really think it's just a lack of novel experiences because once you remove some of the spontaneity of being in person or being in college, like when you're in college, anything could happen. You could bump into your friend at the library, and the next thing you know, you're down the street at the bar.
Or you're walking to class. You feel like anything could happen. There's people bopping around all of the time.
When you're in person, you and your coworker might go for lunch somewhere new. The amount of novelty might be less, but at least there is still some spontaneity that can happen. But when you're in a work-from-home job, you really have to go out of your way to plan things, whether that's trivia night, getting together with friends.
Like, it's very rare that something random or spontaneous happens during the day because you're doing the same thing every day. And I feel like because of that, time just sped up. Like, 2022 to 2026, I feel like I did the same thing every day.
Yeah, even though my life right now seems really chaotic from the outside looking in, and there's a lot going on, and I'm in a new city, and I'm bopping around and doing this and doing that and the other thing. And like, yeah, it's hard to go make sure I have a gym, and I'm cooking different food in different countries, and I'm using Google Translate to find new labels. Like, it's almost like...
[Kevin]
It's exhausting. It sounds exhausting.
[Alexis]
I mean, like, yeah, it is in some ways, but it's also, it's like scratching an itch in my brain because for so long, I just felt like I was doing the same thing. And now I'm doing something new all the time. It's like a new puzzle in every country, every day.
[Kevin]
Are you ever going to want to settle down, though? It sounds like you don't like the monotony, and like, that's what adult life is. I'm sorry to tell you.
Once you get married and have kids, and like, you get in this routine, and kids strive on routine. You can't mess with kids too much.
[Alexis]
Sure, but I also think there is a big part of it is what you make of it. And we talked to... I know we talked to Andre last week about the co-livings, and like, there's so many people that live alternative lifestyles that are not just like your standard status quo and make it work.
You just have to be open to it. I mean, I met a woman. I was flying back from London, and I sat next to this woman.
We talked for eight hours. Like, when I tell you, like, our necks were bent.
[Melina]
God, I would hate that.
[Alexis]
No wonder. Oh, I'm sure the guy next to us was so mad. We hit it off.
We hit it off. I went and stayed at her house in Florida, like, had dinner with her family. She's amazing.
She's amazing. But her and her husband, they do like five or six international, week-long international trips a year. They own a home in Florida, a home in Colorado.
They each run their own business full-time. They have four children that they homeschool. And they just make it work.
They have four boys under the age of 12, and all of them are homeschooled. Oh, my God. And she runs her own business, and they do all the travel.
And they're both, like, equally successful in their own right. And I was just like, that's the dream. That's so cool.
And like, she was like, yeah, we've slowed down with the travel a bit just because with the boys. But she was like, kids are adjustable. They get used to it.
You just have to have the mindset that you want to make it work.
[Melina]
Okay. All right. I'll give it to you.
[Alexis]
Talk to me in 10 years. If this podcast lasts 10 years, we can resurface this episode.
[Kevin]
What do you mean? What do you mean if? Come on.
You got to have faith.
[Alexis]
10 years from now. Mark the clip.
[Ethan]
Actually, I think I can do that right here. Today's sponsor is Nokia's event-driven automation. EDA is an infrastructure automation platform.
It is cloud native. It runs on Kubernetes. And it is great for data center networks.
You're getting intent-based networking paired with real-time observability. And we've recorded video by episodes with the Nokia team showing off EDA capabilities on our YouTube. And in those videos, you can see how Nokia models intent, pushes that into the network, and then ingests telemetry so that you can observe exactly what is happening in the network.
EDA also has both generative and agentic AI capabilities. One of which is Ask EDA. Now, Ask EDA is, it's more than just making documentation easy to consume.
You can ask plain language questions and get context-aware answers back because Ask EDA knows about your specific network. So you can use it for troubleshooting and problem explanation, and even for applying and validating fixes. So you know how at some point the network got too big and too complex for you to keep it all in your head?
Yeah, Ask EDA doesn't have that problem. It is your always-on assistant with perfect network knowledge at the ready. If Nokia's event-driven automation platform with Ask EDA interests you, find out more at nokia.ly slash EDA. Try EDA for free at docs.eda.dev. And Nokia makes it easy to test drive their tools in a lab. And you can be up and running with EDA just doing a Git repo clone and a make. So one more time, that is nokia.ly slash EDA for more info and docs.eda.dev to lab it up. And now back to today's episode.
[Kevin]
All right. So speaking, while we're talking about your life, let's talk about your entry into IT. Now I know a little bit of your backstory where you were into airplanes.
You wanted to be a dolphin trainer, then you got into airplanes, wanted to be a pilot, right?
[Alexis]
I'll give a thousand-foot view. Maybe if anyone isn't corporate, we'll give the thousand-foot view what we're doing here. So I originally wanted to be a pilot.
I guess when I was like little, when I was like, when I was really little, I wanted to be a dolphin trainer. And then I decided I wanted to be a pilot. Thank you, Kevin.
I decided I wanted to be a pilot. My family never really traveled growing up. We took the same vacation every year to upstate New York.
And I had always wanted to explore and see new things. And I was like, well, if I'm a pilot, I can do that. Well, I found out that pilots have to go into a significant amount of student loan debt to get their wings and get their hours.
And it's very, very expensive. So I was like, well, maybe I can be a military pilot. I'm blind.
If you guys didn't know, I could not see. I had, I think I was like a negative six and a half. That's what I am right now.
I was, when I tell you, I was so blind. I could not see my hand in front of my face.
[Kevin]
And so... All I remember is the, not to interrupt, but that Cisco Live video where your glasses broke and you're like taking the camera up to your face and you're like, no one can see in the podcast, but she had this weird goofy face or like, and she's trying to like see.
[Alexis]
I put my camera in 0.5 and I was, the nose piece fell off my glasses at Cisco Live and I had to super glue it back on. But I was so blind, I couldn't see to do it and no one would help me. And so I put the camera on 0.5 and I had to have it this close to my face in order to put the stupid superglue on the stupid nose piece. And...
[Melina]
We'll link it in the comments.
[Kevin]
It's one of my favorite clips. Yeah.
[Melina]
I've had some pretty, pretty bad times like that with my glasses. I'm blind too.
[Alexis]
There's nothing you could do about it. And so then I was like, well, I can't be a military pilot because my eyes are too bad. What's the next best thing?
I'm good at math and science. I guess I'll just go be an aerospace engineer.
[Kevin]
I guess I'll just do that.
[Alexis]
At least then I could still kind of work on planes. And again, I wanted to travel. I had like no fear of God.
And so I decided I was going to go to the number one aerospace school, whether or not Embry-Riddle was the number one aerospace school. It was the number one thing in the Google search.
[Melina]
I don't know how much money they paid for that.
[Kevin]
Did you really Google search it and be like, number one aerospace school? And like there's a sponsored post, number one, you're like that one.
[Alexis]
Quite literally. That's exactly what happened. And I was like, oh, it's in Daytona Beach, Florida.
That sounds wonderful. I'm living in Scranton, Pennsylvania. Anything sounds great.
So my parents were like, you can't visit. And I said, I don't care. I did the virtual tour like three times.
And I was like, cool, sounds good. Took my dad's credit card and applied and put down the down payment for my dorm. Wow.
And that's how that went. Racked up like 140 grand in student loans while I was there. Did three different internships.
Yeah, it was painful. I'm almost, I have almost paid them off.
[Kevin]
Oh my God, that's crazy.
[Alexis]
But I moved down to Florida completely on my own, did three internships. I ended up getting into GE Aviation, the Navy, and then finally I worked for Boeing. And every time I walked away from my internships, I was just like, this ain't it.
Like, this is not what I want to do. I imagine me just sitting in a cubicle, like tapping away at a computer all day. Like, yeah, I couldn't, I couldn't stand it.
And so I was talking to anyone I could talk to, just trying to figure out like, why do you like your job so much? I can't sit still.
[Kevin]
Convince me, please.
[Alexis]
I can't sit still. Like, I refuse to accept that this is normal. And eventually someone was like, hey, have you heard of tech sales?
I think you'd be good at it. And I was like, sales? Was it not my ex's dad?
[Melina]
Was it not my ex's dad?
[Alexis]
There was multiple, there was multiple people. So the first person, I was on a tour, I was touring a aircraft carrier when I was working at the Navy. And you asked for the story.
[Kevin]
Your story is cool. You're just so casual about like, I was, yeah, I was touring this frigging carrier. It's cool.
It's whatever. I just chose to be an aerospace engineer. I was good at math and science.
I was like, yeah, I'll just be an engineer. Like, you're so casual about it.
[Alexis]
Yeah, that's kind of how I go about my life, Kevin. I don't know what to tell you. So I was on an air, I was literally on an aircraft carrier and we were getting a private brief.
Again, we were interns for the Navy, like literally for the Navy. And we were getting a brief from this guy.
[Melina]
For the Navy.
[Alexis]
His title, his title was literally director of science. And his job.
[Kevin]
All of science. He's just.
[Alexis]
Director of science.
[Kevin]
Director of it all.
[Alexis]
Yes.
[Kevin]
Like Bill Nye, okay.
[Alexis]
His job was to brief the generals about upcoming like trends and things they should be aware of. And anyways, we're in this aircraft carrier. All of the other interns are like goofing around in a corner.
I don't know what they were doing. And because I'm me and I like yapping, I went over and started talking to this man. Because again, I have no fear of God.
And I was just like, hey, great presentation. Just networking. I just like talking to people and networking.
It's kind of what I do. And so we were having this whole conversation and he goes, have you ever thought about tax sales?
[Kevin]
It's so random to me. Like, why would the director of science advocate for tax sales?
[Alexis]
I don't know. I don't know. He was like.
[Kevin]
But you're someone who's already having an internship. Like you're already there for a reason.
[Alexis]
I am not sure. I don't remember what we talked about. I just remember him being like, I think you'd be really good at it.
I think you should look into it. And so I went back to school and I got an internship at Boeing. And I was like, this is it.
This is it. Like Embry-Riddle, if you're an aerospace engineer and you get an internship with Boeing, like you peaked. You've peaked.
Like that's it. That is endgame. And so I got this internship and I went out there and I hated it.
I mean, like everyone I worked with was very nice, but the work I was doing, I just didn't find interesting. Again, I didn't like the whole cubicle thing. And I felt like I, that was my last option.
Like I was like, this is supposed to be the best job and I still don't like it. And now I'm a senior in college with this very expensive four-year degree. What am I going to do?
And when I went back to school, I met my now ex-boyfriend and his uncle worked in tech sales. And he was going into tech sales. And I was like, oh, there's that weird thing again, tech sales.
I wonder what that's about. Well, the nice thing about tech sales is that you can ramp up and make a lot of money very quickly. And for me at the time, I had a large student loan and I was looking at my estimated monthly payment and I was like, oh my God, how am I ever going to pay this off?
This is crazy. Why did I do this to myself? I felt like I had no guidance.
Neither of my parents have college degrees. And so we really didn't have a lot of guidance of like, maybe you shouldn't get a six-figure student loan. Like there was nothing.
I had no savings for college. It was all on my own. And like, yeah.
Anyways, so I was like, well, that sounds very nice. I can make a commission and I can pay off my student loan and I don't really care that much about aerospace. I mean, planes are cool, but it's not like end-all be-all.
And what I really like is talking to people and teaching people and like tutoring others. So if I could just do that in a different field of technology, I'll just go do that. And so I was super, super lucky.
I got into a training program with Cisco called the Cisco Sales Associate Program. And basically what it was is that Cisco recognized that to be a solutions engineer, it's typically a very senior role. Like most people going into solutions engineering positions have 10, 5, 5 at least, if not 10 or 15 years of experience.
Like you were really in it before you move into sales. And because of that, there wasn't a lot of diversity in their workforce. And not diversity just from like bringing in more women, but diversity in like bringing in young people.
Because what happens is that when you're only bringing in people who are 10 years into their career, you have a lot of your SEs who are a lot older. And so they developed this program to help inject younger talent into their workforce and bring them up to speed very quickly. So I got in this accelerator program.
I took my CCNA, CCNP in a year, did a lot of whiteboarding, labbing, mentoring, shadowing, all of the things with these very senior engineers. And then I got kicked in front of customers at like 23 and told to go sell switches. And that's how I got into Cisco.
That was my introduction to IT.
[Kevin]
Again, very casual. You're like, I just started working for the largest networking company in the world, Cisco, and then got my CCNA and CCNP in a year, big deal. And I was, you know, in dealing with, you know, all these advanced level networking people at Cisco.
[Alexis]
I think my first bomb I priced out was like three and a half million dollars. And I remember sitting there on my couch, again, COVID, I'm sitting there on my couch in this like work order. And I'm like, money's not real.
Money is not real. All of this is fake.
[Kevin]
It's insane once you get into networking, or at least in technology in general, and start looking at like these purchase orders. Like I work for the government, like local government, Hillsborough County government. And we are, we don't blink at over a million dollars.
We're just like, oh, that's only a million? Okay, cool.
[Alexis]
It's insane. Yeah. So I did, I mean, I was a solutions engineer.
I supported 50 some odd customers. I rotated through them every quarter. I seem to pick up, lose some, pick up some new ones, worked with all types of businesses, like all different businesses.
And eventually I started making content. I made memes. I helped Cisco social media team make memes for a while until I started posting them on my own channel.
And it just took off from there. Again, I grew my channel under the guise of if one customer has a question, more do too. So that's how I initially started making videos.
And then there was a lot of funny things that happened when I needed to move. Yeah, it's a long story, but I was managed out, which was not a very pleasant experience if anyone else has ever been managed out of a business. I got managed out of Cisco, but it was the best thing that ever happened to me.
Hands down. I ended up at Megaport. My CEO met me through LinkedIn.
I was making content about SD-WAN and the Cisco-Megaport partnership. And he basically messaged me and said, who are you? Who are you?
We need to talk. And he was my biggest advocate throughout the process of me leaving Cisco. And when I finally left, voluntarily resigned, he sent me a piece of paper and said, write a job description, put a number on it, come work for me.
And so that's how I ended up at Megaport.
[Kevin]
Are you willing to talk about that process?
[Alexis]
The writing my own job description?
[Kevin]
I know you get a lot of questions about how do you get a job that you have? I've never heard of anyone just creating their own job before. Number one, what did you think your CEO saw in you?
What qualities did you have that he was like, that person, we need to hire her at whatever cost and get her in here?
[Alexis]
Kevin, you are really good at asking questions.
[Kevin]
Yeah, I do this for a living.
[Alexis]
Thank God we have you on the pod.
[Melina]
Like I said, he's the life to the uptime.
[Kevin]
I said this. I'm the life. She's the uptime.
And now you're the in. So funny.
[Alexis]
I'm the in. So it's funny. I put a podcast out about or not a podcast.
I put a tick tock out about this while I was out in Hawaii. Here's another casual thing. Kevin's gonna make fun of me for.
I was just flown to Hawaii to present to an organization called VCPEIT, which was a bunch of leadership at venture capital organizations that were investing in IT. It was great. They were awesome.
But you need to build leverage. If you're early in career, I truly believe the first five years of your career, all you're doing is building leverage so that you can have more autonomy later on. Because in a business, if you make yourself truly indispensable, and I don't mean indispensable like, you know, you acquired a bunch of skills and you can get promoted.
I mean, like you are the only person that can do this thing. You have defined the category for X. And there's people I can think of at Cisco.
I don't want to name names, but I've met engineers who were like the backbone for multicast routing in broadcast systems or the number one industry advocate for IPV6. Or, you know, the list goes on and on and on.
[Kevin]
So are you saying you should specialize very, very specialized in your first like five years?
[Alexis]
That's a hard question because I consider myself hard. I consider myself a hardcore generalist. However, I would say what makes me special is social media.
I am really good, really, really good at social media and communications. So I truly believe the first five or so years of your career, all you're doing is building leverage. You're building leverage and you're building trust that you can get the job done, that you know you're going to do what you say you're going to do.
If you can do those things, people will rally around you.
[Kevin]
What is leverage? Define leverage. Before you go on too big of a rant and I can't stop you.
What is leverage?
[Alexis]
You need to make yourself indispensable. Like you are the pin, right? I'm sure you guys have seen the meme, especially with the cloudflare outages.
If one person, you know, if cloudflare goes out, the whole internet goes out, right? That's fine. You need to do something similar at your organization.
And businesses hate this because what they try to do from a business perspective, you want to avoid this. You don't want to be one single person that is that critical to your business. However, if you can find and make yourself that person, you can start demanding a lot of things.
Because they cannot function without you.
[Kevin]
Yeah, so I'm a network architect and I'm now a supervisor at my job. And I can tell you actively trying to not have that happen.
[Melina]
Right.
[Kevin]
Like if that one person leaves or gets hit by a bus or gets sick for a month, like you don't want to have that big a hole where like we just say, I'm sorry, users, you know, if it's the Wi-Fi guy is out, like, oh, sorry, Wi-Fi is just down.
[Melina]
He got hit by a bus. That was a great example. It's a real fear.
[Kevin]
It's a real fear. We say that all the time. Have you heard that in IT too?
[Melina]
I learn something new every day. What did I say?
[Kevin]
Ever since I've been in IT, it's been like, you know, we're afraid of someone getting hit by a bus. I don't know why the saying is there, but every job in IT has had the same saying.
[Melina]
Yeah, it's always, it's always hit by a bus.
[Kevin]
We're actively trying to avoid silos.
[Alexis]
100%. But if you can make yourself, and I can name several other engineers, whether that's over like IoT, multicast routing, IPv6, you become known for something in the industry, in the community. And if you can become such an indispensable advocate for that thing in your area of expertise, it's beneficial to the business to have you on board, right?
So for example, I would say part of what makes me, me, I'm a generalist and my specialty is social media and communication. I'm really good at getting a broad message out to a lot of people. It's something that's unique, right?
There's not a lot of other ways you can deliver that without me. Therefore, when I want to do my job in different countries, when I want to work with other organizations or vendors across the industry to help continue growing this message, it is beneficial to let me do so. Because there's only one of me.
To answer your question, what do I think my CEO saw?
[Melina]
I have the, what?
[Melina]
I don't think, I just, I want, I want to say like, Pause for dramatic.
[Kevin]
Yeah, go ahead.
[Melina]
Oh my God.
[Alexis]
You see how, you guys have to remember.
[Melina]
She just wanted to like build it up.
[Alexis]
People aren't always watching this on video. There can be a dramatic pause and it's okay to pause to think.
[Melina]
Yeah, no, it's.
[Alexis]
I have, I have the most respect and admiration for Michael Reed, my CEO. Number one, he was taking a bold bet on a position that not a lot of other companies had. Technical, having someone, basically hiring an influencer to do quote unquote evangelism is not something that's commonly seen.
It's not something that's commonly done at big tech companies. It's not something that's done a lot of smaller companies. You might see developer advocacy programs at some more SaaS based companies, but that's not what he hired me to do.
He hired me to come on and be a full-on advocate and influencer. To do that requires a lot of flexibility. And a lot of basically trust and just giving someone a long rope and being like, I trust you to do right by my company on the internet.
I don't have a team of people that approve the content that I post on my personal pages. I, our approval process for even technical content that I write is like me. And sometimes I pull in a senior engineer to fact check what I'm saying.
Right. And to do that as a corporation requires a lot of trust. And there's not a lot of businesses out there that are willing to give one person that trust and flexibility, but that's exactly what you need to do to make it successful.
Because the second that you start putting marketing, an approval process and marketing this and that and the other thing, and you need to use these specific words and demo has to be this way, it doesn't work. And Kevin, you know, as well as I do to put content out, it needs to be authentic. It needs to be you.
It needs to be within your creative process. And the things that do the best or hit closest to home or that we care a lot about are pieces of content that we just wanted to create. And we're excited about and we're passionate about.
And when you take something like that and you put a bunch of like corporate BS on it, it just doesn't work. And so Michael Reed really gave me just a long leash and a place to grow and just said, go figure it out. Right.
I trust you. I trust you. You write by the company.
This is what we're trying to accomplish. Go do it. And so as a result of that, I've started, you know, four or five different programs within Megaport.
You guys see the content that I post on my socials, but there's a lot of different things I run behind the scenes for them, but just never even see the light of day either because they're internal. They're training programs. It's pieces of content that I'm coaching other people to create because ultimately when I'm making content like for Megaport, it doesn't always need to be my face.
I can just be the brain behind it. And so he was, I mean, really a pioneer in creating this position. And since I've done it, we've seen how many companies?
Four or five. Kevin and I will find job descriptions every now and then and be like they're trying to hire an influencer. We've seen like four or five other companies will come out with similar positions, but in order for it to work, it's that like trust and flexibility.
If you put too many guardrails around it, it's just not the same.
[Kevin]
Yeah, and that's what we've seen everyone else do is they're trying to recreate it, but in a marketing way.
[Melina]
And it doesn't work.
[Kevin]
It's not organic at that point. Like it has to be authentic and organic, even if it's a product, even if it's a service that you're trying to sell, like you have to truly believe in that product and the service and think it's really freaking cool or else it's just you're selling. You're just pretending.
[Alexis]
So I really, no, I truly do believe, though, the only reason I was able to get into this position is because I spent all of that time building leverage in one particular area. And again, mine was social media. That's what I happen to enjoy.
But I think there's so many different areas you can build that in, especially from a technical perspective. And I've seen people be advocates for specific technologies, whether it's multicast, whether it's IoT, whether it's IPv6. Like when I think of those things, I think of specific people I've met that are like industry defining engineers in that area.
And I know that kind of goes against your specialist versus generalist view. But I think even as a generalist, like I found things that make me stand out. And, you know, I think other people could too.
[Kevin]
Yeah, I think it's important. What I want listeners to hear is that being a generalist is still important. Like know all aspects of what your network is.
If you are a network engineer, network admin, whatever, know a little bit about everything. But if you do have a passion for something, like if you are really into IPv6, whatever, you're like, this is the cool, this is the future, this is how to be using IPv6. Dig into that.
That's cool. But don't neglect the rest of it too. Like don't just be like, okay, IPv6 is my thing, and I don't care now about wireless, and I don't care about layer two or whatever.
But you still have to know that stuff. But you can follow your passions and specialize.
[Alexis]
Yep. Awesome. Well, I think that's all we got for today, guys.
[Kevin]
I'll leave you with that.
[Alexis]
That is all for this episode of Life in Uptime. I don't have the outro in front of me, but I hope you guys enjoyed this one. If you have any questions, comments, feedbacks, topics that you would like to see us dive into, let us know in the comments, or you can always shoot us a message on social media.
[Kevin]
We have emails now. Do you want to talk about our emails?
[Alexis]
We do. Malina set off emails for us.
[Kevin]
Thanks to Malina.
[Alexis]
We have alexis at lifeinuptime.com or kevin at lifeinuptime.com.
[Kevin]
Very creative.
[Alexis]
Yay. So shoot us an email, leave us a comment, or DM us on socials, and we will see you next episode.`,
  },
  {
    episodeNumber: "013",
    slug: "ep-013-the-engineer-who-built-a-business-to-fund-a-mission",
    title: "LIU013: The Engineer Who Built a Business to Fund a Mission",
    guest: "Ray Cline",
    guestTitle: "MSP Owner / Nonprofit Founder",
    guestCompany: "Libertas Consulting / TEKnowledge Worldwide",
    guestLinkedIn: "https://www.linkedin.com/in/libertasray/",
    description: "Ray Cline has been in the tech trenches since he was twelve years old, helping his Dad run a bulletin board service. Today he runs an MSP called Libertas Consulting and leads a nonprofit called TEKnowledge Worldwide (TKW) that has donated over a million dollars in network infrastructure to communities in need. Join us for a candid conversation with a funny and inspirational human as he walks us through his life in IT and his plans for the future.",
    airDate: "April 23, 2026",
    packetPushersUrl: "https://packetpushers.net/podcasts/life-in-uptime/liu013-the-engineer-who-built-a-business-to-fund-a-mission",
    youtubeUrl: "https://youtu.be/SaXouBQme-w",
    transcript: `[Kevin]
This episode is sponsored by Meter. If you're tired of juggling five vendors and six dashboards just to keep the network up, Meter delivers the full networking stack, wired, wireless, and cellular, as one integrated system. Go to meter.com slash liu to book a demo. That's M-E-T-E-R dot com slash liu. Welcome to Life in Uptime, the show where we talk with the people behind the networks that keep our world connected. I'm Kevin, joined by Alexis, and every week we sit down with engineers, leaders, and builders in tech to uncover the stories behind their careers, how they started, what they've learned, and where they're headed next.
Our goal is simple, to help you see how far tech can take you, no matter where you start from.
[Alexis]
All right, guys, welcome back to the show. Today's guest has been in the trenches of, why are we laughing?
[Alexis]
That was- We're rolling, we're rolling with it. We're rolling, we're fine, guys.
[Ray]
Oh, that was hilarious. I love it. What an intro.
[Alexis]
Oh, thank goodness.
[Ray]
Cheers to you, Kevin.
[Kevin]
It's getting more and more epic each time.
[Alexis]
Sorry, do I keep going?
[Kevin]
Yeah, absolutely. Let's do it live.
[Alexis]
Okay. Today's guest- That was a great take.
[Kevin]
What are you talking about?
[Alexis]
Today's guest has been in the trenches of IT since before most of our listeners knew what a network was. He runs an MSP, leads a nonprofit that has donated over a million dollars in network infrastructure to communities in need, and is about to take on his biggest project yet. Ray, welcome to Life at Uptime.
[Ray]
Thanks for having me. I appreciate it. Woo-woo.
[Alexis]
So take us all the way back to the beginning. How does someone end up running IT when they were 12 years old?
[Ray]
Insanity, lack of purpose, I don't know. So I guess my story begins at the young ripe age of, I guess, 12, we'll go with 12. My dad used to run what was called a bulletin board service back before the internet was a big thing.
That's really how hospitals communicated. That's how people kind of communicated before the internet was the thing, right? And at a young age, we had all these computers in my house.
And I'm like, wow, these things are pretty cool, pretty interesting. And the next thing I knew, I was helping my dad run this bulletin board service. And then I started going to conventions and trade shows and starting getting recognized as what they called a sysop, sysoperator, back in the day, which was fun.
And that kind of steered me towards, I actually am really good at this stuff and kind of brought me into the IT fold.
[Kevin]
Now, was it just that you're really good at it or did you actually, you really enjoy it? Where you're like, no, this is my passion. This is like who I am.
You know what, it's one of those things, right?
[Ray]
Like I loved it. Like I just thought, you can get paid for this? Like, how is that possible?
Like you can get paid to play with computers? Like, where was this in the school handbook? It wasn't there.
So no, I think it was one of those things where I started doing it and the more I did, the more I realized like, this is awesome.
[Alexis]
So you were pretty set your career path when you were going through school. You knew you wanted to do something in IT. Did you have any sort of formal education?
[Ray]
Yeah, so I went to a tech school and ultimately ended up, you know, fast forward going through, you know, tech schools, getting a degree and then also going through, you know, the formal, an MCSE, which I don't even think means anything today, but I got it in the 2000 track. So, you know, back in those days, if you got that, you could write your own ticket and, you know, so here we are.
[Alexis]
And when did you realize that this is what you actually wanted to do? Was there ever any doubts versus, I feel like playing with computers and, you know, maybe getting your first job in IT versus running your own business, those are two completely different pitits.
[Ray]
So I think truthfully, you know, besides the bulletin board service and besides all that other stuff, when I was in high school, I had a phenomenal computer teacher and he really made it, like made the class fun, right? How exciting is it to, you know, write code in Pascal or anything else like that? Yes, I learned that too, which was silly in today's world, but he had this thing where if you got done your work, he would play Solitaire.
That was always his thing. He'd be playing Solitaire while we would be writing code. And he always said, if anybody in this class could beat me in Solitaire, you're gonna get an A.
Had nothing to do with the class, but this guy could beat Solitaire in like a minute. Like he was just nuts. I used to beat him like fast.
Guy took me under his wing as soon as he realized that like, oh God, this guy has figured out how to make Windows beat the game for him. So show me how you did that. And I was just trying to get an A and not do anything because I was like so focused on what I wanted to do.
But I'm like, if I can just find a way to beat this guy, never have to do any more of my work, I'm gold. So he was a real big inspiration for me. He took me under his wing and I kind of loved the trajectory he was doing.
And, you know, at some point as I get older, I hope that I can go into teaching when I can no longer climb into ceilings and do all this physical work that I do. I think that would be a lot of fun.
[Kevin]
That's interesting because that's kind of where I started my career is teaching and being in a school. And that's where like, you're thinking like, oh, once I'm old and feeble, then I'll go there and play Solitaire. I'm already feeble.
I'm already old, man. I feel it every day. So out of college, what was your first like big job after you had college and training and all that?
[Ray]
Yeah, so while I was going to school, I was working full time overnight in a senior living property and that's where my career really started. I was doing like overnight, quote unquote, security. And what that entailed was me really, I was supposed to be staying awake and watching the doors because the building was still really under construction in Center City, Philadelphia.
And what I watched more of was the back of my eyelids. And then some ran computer programming that I was doing because I would leave work and then go to my classes the next morning, which was tough. Working overnight and then going into school was brutal.
And then coming home, taking a couple hours nap and repeating that cycle. Somehow, as that building was being built, we had a gentleman that was living in the property that was the regional IT director for all of the senior living properties. So when he saw that I had this technical ability, he started bringing me around to the properties with him and I was no longer doing that overnight shift.
And one day, there was this old system and it was all DOS-based. And it was the accounting system. So I guess it was A-R-A-P.
And it was, if you guys remember now, maybe your listeners won't, but I do. Y2K was the thing, right? So for anybody old enough to remember Y2K, some software was not written to be able to understand what was gonna happen when the clock rolled.
So we found out that there was a bug tied into the software that would force you to call the support of that company that was running that software so that you would have to pay to upgrade it to a new platform. I figured out how to circumvent that. And then that company that I was working for wanted me to then go do it at all their properties.
So they put me in a train and said, come to New York City, show us what you did, and then we're gonna send you to all of our properties around the country to do that. I went and did that. And they're like, all right, well, stop back in New York City on your way back.
And straight out of college, they offered me a job working in New York City, which was amazing. And it was awesome. So clearly I took it because 21 years old, what else are you gonna do?
When somebody wants to pay you to live in New York City, you move to New York City.
[Alexis]
Where were you living for then?
[Ray]
Philly.
[Alexis]
Philly.
[Ray]
In my parents' basement, like most IT people, I was living in my parents' basement.
[Alexis]
So this was like a huge shift for you, right? You just finished school. You're finally out on your own.
You got a ticket to move to one of the biggest cities in the world, or I'd say one of the most influential cities in the world.
[Ray]
It was awesome. And that progressed. And I started really learning on the job what it's like to build infrastructure and build networks and build teams, not just in a single environment, but at a massive scale.
By the time I left the company, they had 30 different properties all across Long Island, Connecticut, Pennsylvania. It was huge. And to this day, I still love driving past the properties that I used to manage and go, I built that building, even though physically I didn't build a building.
But I guarantee you, my networks are still in those buildings, which is pretty cool.
[Kevin]
Yeah, that's always a fun part of being in the networking field, at least, is that you can, like, there's, I used to work at USF, which is down the road from me, and going there, like, oh, that building right there, I did the network for that. That dorm over there, I did the network for that. It's cool being able to actually see what you built instead of just like your programmer or something like that.
It's all software, virtual, that kind of crap. It's one of the benefits of networking, I think. But so, can you take me back real quick?
I'm just curious. The circumventing the program for the software, was that legal? Well, the company doesn't exist, so I guess it doesn't matter.
Well, I'm not saying that to get you in trouble. What I'm getting at is, I find it kind of interesting that both of your, like, big starts or big things propelled you was kind of hacking Solitaire, and then kind of hacking another system. And that was just you being interested in learning how things work and figuring out ways of circumventing obstacles.
[Ray]
Yeah, and yeah, truthfully, yeah, it's been great. My entire career has been brought to me doing things that I shouldn't have been doing. Thanks, Kevin.
My whole life is a lie. No, you know what? You're right.
And honestly, I don't look at it that way. And I think most IT people think of things and doing things a different way, right? I don't think I intentionally set to break it.
I'm like, this is DOS, this is simple. There's like, there's no brains in DOS. It's lines of really simple code.
And I'm like, I went in there and I just found the countdown clock. I'm like, we're just gonna run that out and life goes away. And it did.
So, you know, it was really, I think it was really trying to find a solution to a problem. And then the company that I was working for was like, yeah, now go do this everywhere. And then they offered me a job.
What was I gonna do? Again, I was young. It was awesome.
I'm gonna do it again in a minute.
[Alexis]
I think also, oh, go ahead, Kevin.
[Kevin]
That thinking is still, why I bring this up is that that thinking I think is still valid in today's market for people who are coming into tech right now and learning tech and wanting to break in. That philosophy of I see a problem, now I wanna figure out how to fix it or how to change it is a very extremely valuable skill in IT. And even though now systems are much more complicated than DOS, it's still a very valid thing to do and to tinker and to just get your hands dirty and figure out how things work.
So, I mean, it's funny, it's so long ago that you wrote, I'm so long, I'm calling you old now. Wow, the tides have turned. Guys, it's been great.
I've really enjoyed talking to you both.
[Alexis]
You didn't even give me a chance, Kevin.
[Kevin]
I know, I'm the one being an ageist today. No, I think we're about the same age. But 25, clearly.
Yeah, we're just in mid-20s. I'll take that. I forget what I was talking about.
Now I got so distracted by your compliment of 25, I'm beglumped.
[Alexis]
No, I had a comment. What I was gonna say, Ray, is that it must have felt really, really empowering to have someone believe in you and invest in you that way after making that discovery. And we talk a lot about how to stand out, how to build confidence, how to build trust within your organization.
I think that's such a great example of seeing a problem, identifying it, brainstorming on how to fix it, and then taking steps towards it, even though it was a little bit of a hacky problem, right? But you're proving that you're thinking outside the box in order to solve things.
[Ray]
And, you know, not to make it a pun, I think thinking outside the box is what IT is. Truthfully. I think, you know, look at some of the companies that we all work for.
They're outside the box thinkers building the box, right? It's pretty impressive to see where technology's going with everything because of people that think outside the box.
[Alexis]
So what changed after that? Did you get another corporate IT job or what made you decide to finally go out on your own?
[Ray]
So that took a while. So that was like my first job straight out of high school or straight out of college, actually. I met a woman and unfortunately, you know, not to make this grim, I literally went to her funeral today.
So my very first customer. Ooh.
[Alexis]
That's not where I expected us to go, right?
[Ray]
I know. Well, this just happened. So literally this is like breaking news, right?
My very first customer, I was on a train going from Philadelphia to New York City because that was my weekly thing. I would go up and I would go to New York every week, spend the four or five days up there, take the train back home because I still wanted to be at home on the weekends for whatever reason. I met her on the train and she was our marketing director for our properties.
And her and I knew each other in passing, but did not know each other like we knew each other further down the road. She saw me on the train and she always had the coolest laptops. So Sony for a long time was making like the smallest laptops in the world.
Like I think it was their plan to go smaller, smaller, smaller. And she was sitting on the train and we caught eyes and she said to me, she goes, aren't you the IT guy for the company I was working for? I said, yeah.
And I said, aren't you the marketing consultant? And she goes, yeah. And then we just talked and I helped her fix her computer problem while we were on the train.
And then we kept seeing each other on the train and we started sitting and chatting with each other on the train every time we would see each other. And she goes, you should do this for a living. She goes, I don't know why you're working for these guys.
You're way too smart for these people. She goes, would you be my IT guy and help me with all of my other customers? And she became my first customer and she would refer me to other people.
Now I was still working in New York at the time but she put the consulting bug in my ear. So because of her, I found a bunch of other customers that I would still work and do this like side hustle while working for the full-time company that I was working for in New York. And it became this thing where ultimately when that company in New York got sold to another much larger company, I just said, I'm gonna go out on my own and just full-time consult.
And I did. And why I left New York is a whole other reason besides the work. I left New York right around 9-11, like very shortly after.
I was there watching it happen and I'm like, I just, I can't be here anymore. So, and it's also where the name of my company, Libertas, came from, Liberty. If you named your company anything during that time that had anything to do with American flags or life, liberty, love, like it sold.
So I named the company Libertas, which is Latin for liberty, consulting. I took four years of Latin in high school just so I could use it to name my company. There you go.
But as I'm circling around and I apologize for that, when I left that job, because it got sold to another company, I started consulting. And I did that probably six months. And it was terrifying, right?
Because you figure I'm 22, 23 at that point. And I'm like, I don't know that I can make this a full-time career. And I was working for a company that's like, well, just come work for us.
There's a bunch of money. And I'm like, sold. And then I forgot about the consulting.
And I'm like, cool, I'm fat, dumb, and happy. I'm making all this money, great. That company sold.
So now I'm watching all the people that I worked with for seven, eight years at that point, because I was with the company for a long time. They sold. They offered me a job.
I'm like, no, I'm gonna go back and do this consulting thing for a while. So I started going back to consulting. And I went back to my old customer and said, hey guys, I'm back.
Come back with me. And then one of those customers hired me. And they're like, here's a bunch of money.
And I'm like, okay. So now, fast forward, maybe I'm 30 at this point. Maybe I'm in my young 30s at this point, I don't remember.
That company was awful. Was the worst job I've ever had in my life. Me and the owner hated each other.
But the best part about it was, as I was leaving the company, I signed them on as a client. I said, you and I hate each other so much. Like, it's the funniest story ever told.
We literally almost got in a fist fight in the office. And I was still able to sell him a consulting agreement. So I said to him, for the next six months, I will train my replacement if you continue paying me.
And they did. He's like, if this gets you out of my office and out of my face, I will continue paying you. And I'm like, cool.
I had to train three different people to do the job I was doing, because they all left the company within six months of working. That's how great the company was.
[Alexis]
I think what's really interesting about that story, Ray, is that you meet, working in IT, you meet so many people. And so when you decided to go out on your own, you immediately had customers based on the relationships that you built, because people trusted in the skills that you had and that you showed them through the work you were doing with them over the course of your career.
[Ray]
Yeah, my superpower is making people believe I'm capable. So I might have you guys believing it. That's why I'm on this podcast.
But joking aside, yeah, no, I think you're right. Like, I'm really good at building relationships. It's something I've always been good at.
And I think it's because I hope that I'm as genuine as I come off across as, because the things that I do, I really do love. And I do love IT and I do love the things that we do within my MSP that make the companies that we work for so much better.
[Kevin]
What brought you to consulting over and over again? Like you kept getting, you know, this money thrown at you, but yet you always seem to go back to consulting. What was the drive there?
What was the underlying force that would pull you back?
[Ray]
I love problem solving and I love doing something different every day. Like, you know, you do something different in IT every day. There's no offense or buts about it.
But, you know, for one customer, we might just be their wireless guy. For another customer, we might just be their, you know, help desk. For another customer, we might be, you know, I'm acting CIO for a company right now.
That job is completely different than anything else that I've ever done. But it's led me to this, right? So I keep getting to do different things every day with the companies that I work for.
And it's fun, it's exciting. I'm not pigeonholed into, you're just gonna be working in the same office for the next forever. It's great, I love it.
[Alexis]
And you say we, is your team, is it you, is it a couple other engineers on your team as well?
[Ray]
So I only have one full-timer. You met Sean. Sean is my full-timer.
He sits behind me in the office. We, you know, as an MSP, we saw that a lot of work that we don't get to, right? So as my MSP, we try to do as much in-house as we can.
But, like if I'm in a ceiling pulling cable, I am completely not helping the customers that I need to be helping. As much as I love climbing into a ceiling and doing that kind of stuff, I can't do it anymore. It's just not efficient.
So, you know, we sub that out. So a lot of the guys that we use day in, day out to do some of those things, if we need to, you know, install a bunch of computers, I'm not gonna send Sean or myself to do it. We just work with some of the other local companies that do that to be our smart hands.
So, but we, one of the things I learned as I was younger and I was consulting is to always say we. So that anybody that you talk to thinks you're much larger than you are. And it worked.
So I never talk about Libertas or myself as me or I, it's always we, we do this, we do that. So.
[Alexis]
That's great advice.
[Ray]
You guys all caught me in the biggest lie ever told. No, it works. Definitely works.
[Alexis]
Honestly, yeah, we're on life and off time.
[Kevin]
There we go. That was, that's, we try to aim for the truth here. You know, be authentic.
So you were consulting and then you went to, you created your own MSP. Now, is there a difference in that? Or was it just now you have a business name, you call yourself an MSP?
[Ray]
Yeah, so, you know, MSP keeps changing what it is day in and day out, right? You know, managed service provider. So, you know, at the core of what we do, yeah, we're an MSP, right?
Because we offer 30 different products, depending upon who the customer is. So we're providing all those products to different companies. So by definition, we're an MSP.
But the thing that I love the most about the MSP is all the consulting that I get to do. I love just sitting on phone calls with customers and teaching them how to spend their money better. And, you know, the one company that I'm working for that, you know, I'm the CIO for, and I use the air quotes, I found within the first six months over a million dollars in overspend.
Wow. It's real money, like real money. And that is something that my company does really well while consulting is we go in and we evaluate what your business is doing, what you're spending your money on, where you're spending your money on.
Most businesses spend it wrong. They do. You know, they'll buy 100 licenses of offices, you know, Office 365, fire half the staff and forget to cancel the licensing.
It happens so often. But there's real money in there in trying to figure out where you're spending your money. Most people, unless they have this background, aren't looking at those things.
So, especially for a small business.
[Alexis]
I think the cool thing about working for an MSP or even, I guess in my like prior life as a Cisco SE is that when you're working across, and Kevin, I think I've had this conversation with you as well. When you're working across a bunch of different customer networks, you can get a lot of experience really, really quickly because you're exposed to so much. Versus now you might not have the depth of owning and operating your own network or one single network for five to 10 years, but you get exposed to way more technologies because everyone's using a different set of tools.
And so when you have that bird's eye view of what's trending, what are other people doing, what is more commonly used here and how does it work across different industries, across different size customers, I think it could be really good experience, especially if you're maybe earlier in career or you're mid career and you're looking to build out your portfolio and really amplify and increase your skills quickly.
[Ray]
Yeah, I agree 100%. Yeah, for sure.
[Alexis]
So Ray, you also own a nonprofit in addition to your business. What was your decision like to start that?
[Ray]
Also insanity, I think is the best way.
[Alexis]
You weren't busy enough.
[Ray]
No, I, you know, no, clearly not. So I've served on a bunch of boards. I've served, you know, in community settings, I've served in, you know, networking groups and online networking groups.
And a lot of the reasons that I did those things was so that I could find a way to give back. If we rewind this a little bit, very quick. You know, I grew up in a Catholic school.
My mom, Catholic school teacher, beat it into my head, be charitable, be giving constantly. And at one point I had the opportunity to be Santa Claus in her school. So for like four or five years when she was teaching pre-K, I would dress up as Santa Claus at Christmas every year.
And I would go back and, you know, give the kids, you know, have them sit on your lap, tell you what you want and things like that. And to me, it was like, this is awesome. How can I turn this into something more that we give back to the school?
I turned it into a fundraiser that by the time I was done, it was raising $25,000 a year for the school before I left. My mom finally retired, so I'm not doing that anymore, unfortunately. But I wanted, what's that?
[Alexis]
Is that the same Santa outfit you wore to my house? No way!
[Ray]
Yeah, it was, it was the same Santa suit. You didn't think I just had that for fun. I mean, clearly not.
[Alexis]
For reference, y'all, Ray and Sean came to my house and installed, if you guys see the rack of gear in any of the videos I've been posting, they came and helped me install this rack full of Alta Labs gear. And Ray and I did a skit where he delivered them to my door dressed as Santa.
[Ray]
Yeah, it was a lot of fun.
[Alexis]
Anyways, as we were.
[Ray]
I just thought you showed up to all your jobs that way. Well, sometimes, it depends how cold it is, right? I mean, it was cold that day, so I mean, it worked perfectly.
So I wanted to find this way to, you know, build an online community of people that wanted to give back, right? So TKW is in its fifth year now. And, you know, I started that organization with some amazing people.
And we all have the same mentality that we want to give back our skills, give back our services, and partner with people that want to give back those things to communities in need. And, you know, the last four years we've donated, you know, nearly a million dollars of product and services, maybe over a million dollars in product and services at this point. And this year, with the Ronald McDonald House, we're matching that.
Like, the plan is a million dollars in product and services for the Philadelphia chapter of the Ronald McDonald House. So it's cool. It's amazing.
[Alexis]
For someone who's never heard of TKW before, what TKW stands for, Technology Worldwide?
[Ray]
Technology Worldwide.
[Alexis]
Technology Worldwide.
[Ray]
Yeah, technology, and it's T-E-K-N-O-W-L-E-D-G-E, which I thought was super cool when we started it. And then I realized nobody could pronounce it. Like, I get, is it T-E-K-N-O-W-L-E-D-G-E?
Is it T-E-K-N-O-W-L-E-D-G-E? Is it, and I'm like, no, it's T-E-K-N-O-W-L-E-D-G-E. So we've since dropped it and we just call it TKW.
[Alexis]
Yeah.
[Ray]
So we're working on that.
[Alexis]
And for someone who's never heard of it before, it's the way that I understand it, it's kind of like extreme home makeover, but like nerd edition.
[Ray]
Nerd edition. That is one of our projects. That's called Tex Giving, is the extreme makeover, nerd edition.
Perfect. That is one of the projects we do, and that's why we do what we do. So Tex Giving is the annual charity giveback where we do this donation project, like towards Ronald McDonald House, which is what we're doing this year.
So what we do is we already started planning it, and what we're doing right now is we're fundraising, we're planning it, and we're trying to get vendors and partners on board that want to help us do this. So for this particular scope of project, we're giving them a brand new access control for there are nearly 200 doors in their property, because it's a hotel, if you think about it. Like that's what Ronald McDonald House is the busiest hotel in Philadelphia.
We're giving them new wireless, new network, new security cameras. Like that is the ask right now. So now, between now and October when we do it, it's my job and the committee's job to try to A, fundraise for all of this, which is, we looked and we ran the numbers, it's like $300,000 of cost in hardware.
So it's now getting vendors or sponsors to sponsor all of that equipment. And in the past, we've had people like Alta Labs donated the network to the last place that we were. We've had some other vendors come in like Eaton Vertical Cable donate all the battery backups, the wire.
We've been very lucky. Our partners love what we're doing and wanna be a part of it, which is even cooler. The fact that they want to be there doing the installation is a whole other thing.
But I think I actually forget the initial question, Alexis, because I started rambling like I do.
[Alexis]
No, it was, I mean, the question was just, what does TKW do? And I think it's so powerful too. I remember when we were talking about it, as we were installing this rack in my house, one of the comments that I had made, I'd never run structured cable before.
So to have Ray and Sean walk me through how to do that, it's just something I never had the opportunity to experience with. And I think as a young engineer, someone new to the industry, maybe you get put in a silo where you're learning one technology. But when you go volunteer in a project like this, you can really get hands-on with things that maybe you weren't exposed to or you would have had a harder time getting exposed to.
And I also think it's such a powerful way to meet other people in the industry, in your local area, get hands-on skills and showcase them. I mean, what's the best way to network? Number one, in person.
Number two, in person, doing something relevant to your job, right? Think about how much better of a relationship you can form when you're working alongside someone else where now they know you're capable of doing the job or the way that you learn or what it's like to work with you versus just over beers at a happy hour. Right, both are important, but one of them is significantly better than the other and they're both miles better than just submitting a paper resume online.
[Ray]
No, you're right. And so the byproduct of starting TKW is exactly that. So people that come to our events, come to our installations, they end up working with each other throughout the year.
And that's kind of what I hinted to a little bit earlier. Like some of the people that I've met through this organization work for me. I work for them.
Like we pass work back and forth just like any other networking group would do because we've seen their work, we've taught them, they've taught us. Like we can go to any place and do the same quality of work because we've all been in the literal trenches together doing these projects. So I know when I call Ryan down in North Carolina, I know that he's gonna do the same quality of work that I would do here in Philadelphia and he knows the same about me.
And it's just really nice knowing that we now have this network of people all around the world that we can call on to say, hey, you know what? I need these 10 cables pulled in a hospital. You're my guy, go do it.
And there's like, we don't have to worry about the quality of work because it exists. So.
[Kevin]
Do you, is there opportunities for someone whose early career to volunteer and still, you know, be contributing, but also at the same time learning and networking and all that?
[Ray]
Yeah, absolutely. So TKW, we have a Slack community and that's really what it started as. It started as a Slack community of people online that get together to do these really cool things together once a year.
And that's what text giving is. And we call it text giving because it always falls between Canadian Thanksgiving and American Thanksgiving. So that's, one of our guys gave it that name and it stuck a couple of years ago.
But you know, when we're not doing that, we've got Slack. We've got the ability for you to talk to people and bounce ideas off of each other in a text format. You know, hey, I'm thinking about, you know, installing this type of camera.
What will be better? What type of cable should I use? This alarm does integrate with this access control system.
Like those are the kind of conversations that happen within our community all day long. And then we lure them in like, hey, so you remember all those things that you got answered for free? Because our community is free.
We'd love you to come to the event, wherever the event is and volunteer your time back. Now you'll get to physically work shoulder to shoulder with a Kevin or an Alexis, somebody that you've only talked to online so many times and learn from them. And it's such an amazing thing.
But for sure, green people, we've had a lot of green people that have never pulled a cable before. They come to our events and, yeah, Alexis, and you know how to terminate wire now. You do.
Like it's not- You did. You get to see hands-on how it works and then you get to do it. Like when you come to our events, we're putting you to work.
We don't let people just watch. Except for me, I just watch. I don't know anything.
[Kevin]
All right, quick pause because this episode is sponsored by Meter. If you've ever managed a network built from five vendors, six dashboards, and a bunch of contracts that no one fully understands, you know how fast that turns into chaos.
[Alexis]
What usually gets overlooked is the pressure that puts on the people running it. IT leaders need predictability, engineers need control and visibility, and most stacks just weren't designed for that.
[Kevin]
That's where Meter's model is different. They deliver the entire networking stack, wired, wireless, and cellular, as one integrated system. They design the hardware, write the firmware, build the software, manage deployment, and run support.
One platform, one partner.
[Alexis]
And that means fewer handoffs, fewer tools, and clearer ownership. It scales from branch offices and warehouses all the way to large campuses and data centers, without turning network operations into full-time vendor management.
[Kevin]
If you care about uptime, accountability, and not being the middleman when things break, this is worth a look.
[Alexis]
Thanks to Meter for sponsoring this episode. You can go to meter.com slash liu to book a demo now.
[Kevin]
That's M-E-T-E-R dot com slash liu to book a demo. Now back to the episode. So is the Slack the best way, if someone's listening right now and they wanna get involved, they wanna help you guys out, is Slack the best way of getting involved?
[Ray]
Yeah, so we've got a, you can go to our website, technology.org, and there's a button that says join. And it's a quick form you fill out, and we'll get you into our Slack community absolutely free.
[Alexis]
That's awesome. And Ray, I'm curious. You said the Ronald McDonald House is your biggest project to date.
What other projects have you done? Just to give people an idea.
[Ray]
Yeah, so the first project we did was a church in the suburb of Philadelphia. That project was pretty big. We gave them 40-ish access points throughout their entire property.
So it was, it's a church, but it's also a preschool. It's a food pantry. It's like it's a community center is really the best way to describe it.
So we put a bunch of wireless in, a bunch of network, I think 50 or so cameras, point-to-point wireless, because they've got multiple properties on their buildings. Full structured cabling, access control. That was year one.
Year two, we went to Baltimore, I believe, and we did a youth fitness gym. You know, in urban Baltimore, there was a gym that was started just to help get kids off the street to better themselves. And it's a really powerful place.
And we did, you know, it was on a smaller scale, but I think we put in a dozen or so cameras. We did some custom stuff with like they've got, they have this really cool like squat rack. That's what it is.
It's a squat rack. So we mounted a camera next to the squat rack that immediately sends video to an iPad and it records you. So you can play back and watch your squat position.
And it teaches you while you're doing it live.
[Alexis]
Proper form.
[Ray]
Proper form.
[Alexis]
That's awesome.
[Ray]
So we did stuff like that. Some intercom, some cameras, some access control. And then the year following, we went to North Carolina and we did a preschool called La Escoleta.
And La Escoleta was great. That was a big project too. A lot of conduit work, a lot of conduit work.
Speakers, so we did AV for their classrooms. We did access control for their doors. We did wireless throughout their facility.
Pretty much the gamut is we try to do as much of the trades that we have in the community as we can so that we've got people in AV. We don't want them to not be included. We want them to come to these projects.
So we do AV, security access control, wireless, all of it. And then last year, we were up in Rhode Island and that was the largest project from a physical standpoint. So we did, it's a company called Sojourner House.
And Sojourner House is a safe haven for women and children, battered women and children. They also have this big mission for helping stop sex trafficking. So we did four of their facilities across Rhode Island.
So in one weekend, we did four properties with the same thing, access control, wireless, security. And it was a testament to how powerful this community is. The fact that we could be at four different properties miles away from each other on the same weekend and still accomplish the same level of skill and the same level of quality that we do on all of our installs.
And those projects help them make their businesses run more efficiently and better. And that's why we do it.
[Alexis]
It's amazing. Did you ever think that you would be owning not one, but two businesses when you first got started in IT? I feel like that's a big mindset shift too from being an engineer, working with someone else, maybe owning a network, but owning a business and the communication skills and the, I don't know, like organizational skills.
I know even just running my own little business and the paperwork and some of the contracts and things that go along with the work that Kevin and I have been doing online now has been daunting for sure. And that's, I mean, it's an online business. It's nothing even remotely related to brick and mortar or shipping equipment or anything like that.
[Ray]
No, the short answer is no, God no. And if I were to do it all over again, I would probably talk myself out of it. Fortunately, you know, I said it earlier, I love what I do.
And I do have a fantastic team. Like this is not me, I don't run this company on my own. I would never say that I do.
I've got a fantastic team. We've got, you know, we call them TACs, Technical Advisory Committee. They're people that volunteer their time to help us with these projects.
People volunteer to be on the committees to help us run these programs that we do. So it's not like, you know, I'm sitting here running all of it. It's a lot.
I don't sleep. I know you know what that's like. But ultimately at the end of the day, to say that over the course of five years starting a nonprofit while running an MSP and donating the amount of resources that we've been able to donate in such a short period of time, it is the greatest accomplishment of my life.
So I'm pretty proud of it. And I hope the community is proud of it. I think they all want to kill me at some point.
I'm looking at all of my board members right now. But every time we pull a project off, you know, we're just so, so proud of what we've done. And we've met amazing people along the way, like you guys.
I would never meet you guys if it weren't for, you know, this community.
[Alexis]
What was the biggest mindset shift you felt like you had to go through to like make that jump?
[Ray]
I think, and we're going through it right now, is nothing is unattainable. And we've got to get past that mentality. We've never done this before, so we can't do it.
And I say it all the time in our committee meetings. I'm like, just because this is the way we've done it does not mean that we can't do it this way. Just because we've never done it before doesn't mean that we can't still do it.
We just have to change the way that we're building that box. And it's tough. It's really hard, especially when you look at this organization and go, okay, it took us four years to do a million.
How are we going to do it in the next six months? We're going to do it by doing it. That's how we're going to do it.
And I don't like to fail, so.
[Kevin]
It's that, like, kid who's beating Solitaire and figuring his way around the program. Like, you're thinking outside the box and making it happen and figuring out a way, even if it seems impossible or seems hard. I'm trying.
I'm really trying.
[Alexis]
I feel like it's such a cliche. I don't know. I feel like you hear about a lot.
Oh, just because we've always done it this way doesn't mean we have to. And it's such a cliche. I feel like you hear that in every business, but it's different to be the one making the statement that actually has to make that leap and do it differently and push for something different and prove it can be done.
[Ray]
Yeah, when we started TKW, nobody, we got so much backlash from so many people online. What do you mean you're asking us to volunteer our time? What do you mean you're expecting a vendor to donate 10,000 feet of cable?
One, it's fantastic marketing for them. Two, people are really giving if you give them that opportunity to be such. And I think TKW has proven that.
[Alexis]
I mean, I think it's genius, honestly, because there's, I mean, there's a million different ways you could volunteer, whether it's at a food pantry or like volunteering your time, volunteering your labor, but volunteering your skills and IT today, technology, infrastructure, you can't run a business without it. Every single business, every single organization, nonprofit, what have you, you have to be online. And especially if you're running a facility in person, you need the infrastructure, period.
And if you can't afford the skills or the labor to make it happen, you're not going to have a successful business. And so, I don't know, I think it's genius. And number one, being able to let people volunteer a technical skillset that they have, but also helping them form and develop relationships with each other and gain new skills at the same time.
Like, I think it's a win-win-win for everyone involved.
[Ray]
It is. It's just, it's a big commitment, right? But it's a commitment to love.
It truthfully is.
[Kevin]
All right, so for this year, you're doing Ronald McDonald, and it is the largest project that you're most ambitious. If someone wants to help you out, if someone wants to donate money, donate equipment, donate time, what is the best way to get ahold of you and what things do you need the most right now?
[Ray]
That's a really good question. So the answer is kind of multifaceted, right? So if you are listening and you just want to donate funds because you think this is a phenomenal idea and you just want to send us cash, you can go to donate.techsgiving.org, and you can just donate however you want, whether that's a monthly or recurring donation. If you want to donate equipment or your time, just go to the techsgiving.org website. You can just go right to that website. There's a form to sign up so that you can come and be a part of the program.
But if you're looking to sponsor equipment or if, let's say, you're a hardware manufacturer and you say, you know what, this story's great. I want to donate 10 UPS systems. There's a form on that website as well about sponsorship opportunities.
So just go ahead and click on that, and you can get involved. The need is pretty big right now because we are just initially in the planning phases of this right now, and the things are on a table we talked about earlier, but we need a lot of technology to make this work.
[Alexis]
And you can also join the Slack. If anyone's just looking to get involved and be nosy and see what's up, don't forget about the Slack.
[Ray]
Don't just be nosy.
[Alexis]
I'm in the Slack. I get notifications all the time.
[Ray]
We just had a question the other day about a couple of companies that you work with, Alexis, and I think they could use some of your feedback. Because I'm like, I know who knows about this. Talk to Alexis.
[Alexis]
I'll have to go check.
[Kevin]
All right, so you're a very busy man. You're working basically three jobs, right? Like you're MSP, the nonprofit, and then also you're on the board trying to do all this stuff with the nonprofit.
So you're volunteering not only your time, but your hours too. What does your actual weekly day, or your week look like day to day? Like are you just calling people on meetings all day, or are you actively still working, going to sites?
Like what does your actual day look like?
[Ray]
It's crazy. So most days I'm just in my office. A huge majority of what I do is conference calls, team meetings, Slack meetings, Zoom meetings, whatever it may be.
But yes, we're still on site. I still go on site when I need to be, if we're planning something, or if we're doing a new implementation, or we're bringing on board a new customer, I'm on site and we're doing all the strategy at that point. Once that's done, I can kind of hand that off to others, but we're still managing it from the back end.
But my day to day is majority just calls, and strategy, and meetings, and things like these. Man, that sounds exhausting. It's, I spend so much time in this chair.
I have aged 20 years in the last six months, I think. But it's from, you know, it's awesome.
[Alexis]
Right, you look the same as I saw you last December.
[Ray]
That's not good, Alexis. That is not good. Like, don't get old.
I'm telling you, just don't.
[Alexis]
So what do you wish people understood about, if someone's listening to this and they're thinking about going out on their own, or taking that initial jump, what do you wish people knew before making that happen? Is there anything else you would have done to prepare?
[Ray]
So, you know, again, it's another cliche thing, right? You gotta believe in yourself, because I didn't. Numerous times when I was younger, you know, I looked at a paycheck as opposed to life value, right?
I kept looking at, somebody's throwing you this big number, you gotta run to it. Money is the root of all happiness, right? Is what you think of when you're young.
As you get old, you realize your most important resource is your time, and the thing that you give the most of is the thing that you love the most of. If I could go back and kick myself when I was younger, I would have said, this consulting thing is frickin' awesome, keep doing it, because you're gonna meet amazing people, and you're gonna do amazing things, but you gotta get it out of your own head, and that takes a lot. And I think the best piece of advice I can give is believe in yourself and just do it.
Find a way to do it, no matter how hard it is. Find a way to do it, because you can.
[Alexis]
And if you're gonna lose hours of sleep, I think it's better.
[Ray]
May as well make it.
[Alexis]
You might as well do it when you're young.
[Ray]
Well, I said, okay, well, I'm not young anymore, and I'm losing a lot of hours of sleep, but, you know, look at it this way, you know, I have made a lot of people very wealthy in my career, and it's simply because I gave so much of my time to build what their dream was. Now I'm building my own dream, and I wish I would have stuck with that 20 years ago. Because the money, yeah, thank you.
The money, money, it always comes back to money, right? No matter who you talk to, it always comes back to money. The money will find you, like it will, if you're good at what you do and you love what you do, the money will find you.
The money is the least of your concerns. It might be the thing that you think about the most in the beginning, but it is literally the least of your concerns. It will come to you, it will find you if you keep at it.
I can promise you it will.
[Alexis]
Someone, I think that's, I don't know, that's been a huge shift for me this year as well. I've been on my own little eat, pray, love journey, right? Doing all the travel, and I remember I was talking to one of the executives at Megaport, and I was like, oh my God, I'm starting to sweat a little bit, okay?
Like I'm spending a lot of money, like way more than I'm probably comfortable with. And he said, Alexis, your earning potential only goes up over time. As you are building more skills, he was like, if you have time to do things that you want to do and make memories you want to make while increasing your skills, you gotta do it now, right?
The money will come. And I think, I don't know, maybe there's a balance to that because I remember being in school and having my parents say, pick a career, right? You gotta pick a job and pick one that's gonna pay you money because you can do something you love, but if you're always poor, you're never going to enjoy it, right?
It's about finding that intersection between what's going to pay well and your skills. And I think there's truth to both sides. I feel like I'm certainly now doing something that I like and have fun with and pays well.
It did take me from when I graduated high school, when was it, 10, 12 years to figure that out, right? Graduated high school in 2013, so 11 years to finally get there, but it's been a journey for sure.
[Ray]
So I graduated college in the early 2000s. We're in 2026 and I'm now just getting there. So you cut it in half.
You're killing it. So you're doing great.
[Alexis]
Talk to me in 10 years, Ray.
[Ray]
Alexis, I'm still alive. I hope I'm still talking to you in 10 years.
[Alexis]
Wait, I didn't call Kevin Old in this episode.
[Alexis]
Hang on.
[Kevin]
I was waiting for it. That was the opportunity right there. There's time.
I was just waiting, waiting. I was like, she's going to take it. She's going to take it.
[Alexis]
Kevin, when did you graduate high school?
[Kevin]
2003. Oh, Kevin, I am older than you. But not by much, because I graduated college in 2007 and that's still early 2000s.
I would still classify that we're in the same age.
[Ray]
I'll take that.
[Kevin]
I appreciate that.
[Alexis]
You listen to all the same trending songs in your eighth grade dance, so.
[Ray]
Can we talk about our eighth grade dances? Did you leave room for a Holy Spirit? Did that happen for you?
What? No, what are you talking about?
[Ray]
Dancing with girls? What was that?
[Kevin]
Oh, well, I didn't grow up in a Catholic school or anything, so we were booty dancing. We were grinding. We were doing all kinds of dirty stuff.
[Ray]
Yeah, so were we. Nuns weren't happy. It was fun though.
Man, whatever.
[Kevin]
Hiding under the bleachers.
[Alexis]
How do we get this back on track?
[Kevin]
I don't know. This is fun. I think it is on track finally now.
What are you talking about? We were off track then. Now we're good.
[Ray]
Oh no. Alrighty.
[Ray]
I mean, I gotta ask you guys questions. We could flip this script like crazy because I'm willing to do that. I mean.
[Alexis]
Ray, do you have questions for us?
[Ray]
Absolutely. Oh my God, I have millions of questions for you guys.
[Alexis]
Okay.
[Ray]
Like, Kevin, where does this voice come from? Like, we've gotta start there, dude.
[Kevin]
You know, I don't even think I have a good voice. I just like playing with voices. I like the intro.
It's all just because I think it's fun to just be a little weird and like have a game show. I have a microphone in front of me, so I wanna be like, you know, you know that kid in a mirror? You discover like you can dance within a mirror.
[Alexis]
That's how you feel when you're on the mic?
[Kevin]
That's how I feel. Yeah, because I see myself in the camera right here and I have a mic in front of me. I'm just like, I'm like playing pretend in front of everybody.
[Alexis]
It's like when, maybe that's the same like feeling that girls have when they put on a cool outfit and it's like, I am her. Except it's you and your microphone.
[Kevin]
Yeah, I don't think it's the same vibe, I think. Mine's like weird and awkward child and you're like, boss.
[Ray]
Kevin, I can relate.
[Ray]
So, two things. One, I was a DJ for a long time in clubs and the minute you put a microphone or turntables in front of me, I'm a completely different person, completely different personality. You guys think this guy's insane?
This is nerd, right? DJ Ray is completely different.
[Alexis]
I think you've got to bring that out at the next event.
[Ray]
Yeah, I want to see DJ Ray. DJ Ray. Yep.
God, that's a story for off air sometime. And the other thing, and Alexis, I think you saw it. Like when I put that Santa suit on, you become a completely different person.
Like you just stop caring. I mean, it's fun. And maybe it is like when you stand in front of a microphone or you put on a pretty outfit, I don't know.
You said it, I'm just trying to agree with you. You put on a pretty outfit, you put on Santa Claus, same thing. Yeah, whatever, pretty.
They're high boots, I can do it. Let me go. Let me see, what questions do we have for you guys?
So, I know why you started this podcast because I've been watching them and I think they're great. But what do you guys hope to get out of this podcast? What do you want for your viewers?
[Alexis]
I think number one, the reason that we started it, this was my brainchild I bullied Kevin into, although it didn't take a lot for him to say yes. And I felt like I had been meeting so many cool people through this experience, through creating content on the internet. And the conferences I'm able to go to and the access I've been able to get within these companies or vendor organizations at like the executive level.
And I wanted a way to share that with other people because I felt like I was learning so much and I wanted a way to share the access publicly where other people could learn the same way that I was from their experiences, from their stories. And that's kind of how this came about and was born.
[Kevin]
Yeah, for me, I wanna give my audience. So my audience is primarily entry-level people who are getting into tech. And I remember me as a kid who was interested in tech but had no clue about anything, how anything actually works or the people in tech.
And I was like, what would have benefited me back then is actually hearing what tech was like, how life is like when you're in tech. And that's the main thing I wanna get my viewers out of this is that they can kind of understand what life's a little bit like, the different avenues of getting into tech, different types of careers they might not hear of from, you hear of tech, you kind of hear of like cybersecurity, whatever the hot AI cybersecurity, that's all you're gonna hear.
[Alexis]
You can make money doing this if you just take the certification.
[Kevin]
Yeah, exactly. But so someone might not even heard about like you could be a low voltage cable tech and still be in tech. Data centers are huge.
I get there's a lot of avenues in tech that you don't don't hear about. And then there was also why Alexis didn't take a lot of convincing of me. That was a weird way of phrasing that sentence.
But the reason why Alexis didn't have to, I talk so weird, dude, I should not be doing what I'm doing.
[Alexis]
The reason I didn't try to convince you to join.
[Kevin]
Yes, those words is selfishly, I really enjoy talking to people and meeting new people and podcasts and being a host and getting a constant stream of really cool people doing really cool things is like, I love this. I wouldn't be able to meet half the people without this podcast. So I'm really, really grateful for it.
[Alexis]
But the other thing I would say is that everyone's career, the reason we called it life in off time is to talk about career stories. I feel like there's a lot of technical podcasts out there where you'll go really in depth on technology, but we wanted to focus more on mindset, on career, on battling imposter syndrome. What was it like when you decided to go from being an engineer to being a business owner?
What had to shift within your head to embody that new identity and take on that new role? What was it like when you were advocating to your boss for a raise, right? Some of the more career aspects that everyone goes through and everyone deals with working in tech versus, okay, how about that one time you took down the network?
How did you fix it? What was the protocol? What was your troubleshooting?
You know, what was the back end? How did you feel? How did you feel inside when you had to go to your boss and tell them that you failed, right?
[Kevin]
Because no one- You won't find that in the book.
[Alexis]
Yeah, and some of the journeys we've seen, there's no cut and dry path to get into technology. There's no cut and dry path to follow once you're in. And so people learn from hearing about others' careers.
And so we just wanted an opportunity to deep dive into that.
[Ray]
So I will pay you guys a compliment. I don't know how well you guys take compliments. I don't take them well at all.
I hate them. Same. But I will tell you, and Alexis, one of the reasons I was really intrigued with meeting you when I found out- You're so cute, Kevin.
[Ray]
Oh, dude. Wait, you gotta do it more like that.
[Ray]
Tell me how amazing I am.
[Ray]
You are so pretty.
[Alexis]
How are you real, bro?
[Ray]
Sometimes- No, it was supposed to be fun, Alexis.
[Alexis]
Sometimes you guys should- I'm just like, what?
[Ray]
Oh my God, that is so funny. Do that again. No, don't do that again.
[Ray]
You guys excel at making really difficult concepts really easy to understand. And if that was what you're trying to do, you're nailing it. So I look at some of Alexis's videos, and one, your quality is insane.
Your editor is fantastic. You take really hard technologies, and I use Meter, for example. The video that you recently did on Meter helped me explain it to somebody else when I didn't think I could.
So that was phenomenal. And Kevin takes concepts that are so difficult for somebody that doesn't understand entry-level IT, and you make it like, this is easy. This is approachable.
Like, I can figure this out. And you do it with the most sultry voice on the planet. Like, how can you not follow your stuff, right?
[Kevin]
Well, thank you for the compliment. So I actually, I went to college for IT, and I had a networking course. And I absolutely hated networking.
Not because of the content, but the way it was taught to me. The way I didn't, I didn't click with me, and it just seemed terrible. So it took me finding networking on my own, teaching myself networking a little bit for me to fall in love with it.
So when I started making content, I kind of want to take that same vibe, that like, it's, there are a million CCNA stuff. There's a million people all teaching networking stuff. But no one can teach in my particular voice that I understand in my way.
And my goal is just to help other people that are like-minded like me, who learn the same way as me, or resonate with me, that they can watch my stuff and learn it the way that I would learn it, or make sense to me. So I think there's a million ways to learn, and just having more content out there, and doing it, I don't know. I always advocate people to create content.
Like, even, I get, the excuse I always hear is that one's always doing it. There's no point, but.
[Alexis]
Teaching it helps you understand it better. If you can't explain it to someone else, you don't actually know it.
[Ray]
No, I 100% agree. And you guys do it really well. So please keep making content, because there is a lot of really bad, bad content creators out there that make just crap.
I won't mention names, but we can, could we drop them in the bottom here? Because I would love them to be on my list.
[Alexis]
Our stuff, you know, Ray, our stuff was crap at one point, too. You get better as you go. I will say that.
[Ray]
Yeah, but I think some people's stuff is intentionally bad. Just completely crap.
[Alexis]
You're trying to give them a pass, Ray.
[Ray]
No, I'm not giving them a pass. I'm tired of it.
[Alexis]
Like, if we could see more. Ray's kind of doubling down.
[Ray]
Yeah, like, I'm not a nice person. I would love to see more, you know, stuff that's educational.
[Alexis]
I started a non-profit.
[Ray]
Yeah, I started a non-profit.
[Alexis]
I'm not a nice person.
[Ray]
Yeah, ask me my opinion on certain things, and you'll see the not nice guy come out. But I do applaud what you guys are doing. So please keep doing it, because the world needs more educational content that makes sense, that makes things simple.
And it has to find its way to the top of the algorithm as opposed to all the other stuff out there that doesn't need to be on there.
[Alexis]
Appreciate it.
[Ray]
So keep at it. And what other questions can I answer for you guys?
[Alexis]
Oh, well, I was going to say, Ray, where can people find you as we wrap up the episode?
[Ray]
That's your hook at the end of the episode? The music is playing.
[Alexis]
I got it. I have to get to dinner with my parents.
[Ray]
They're waiting. Oh, well, then you better do that. So I am pretty much Libertas, L-I-B-E-R-T-A-S, Ray, on all of my platforms.
You can find me LinkedIn, Facebook, Instagram, however you want to find me with that. TKW, it's at TechKnowledge or at TechKnowledgeWW, depending upon where you're finding it on all platforms. So please find me.
[Alexis]
Everything in the description.
[Ray]
Thank you. I appreciate that.
[Alexis]
Cool. Well, guys, that is it for this episode of Life in Uptime. Huge thanks to Ray for sharing his journey and thanks to you for listening.
If you enjoyed this conversation, be sure to follow the show so you never miss an episode. And if today's story gave you something to think about, make sure you share it with a friend or a colleague who might need it. And until next time, keep learning, keep building, and keep your uptime high.`,
  },
];
