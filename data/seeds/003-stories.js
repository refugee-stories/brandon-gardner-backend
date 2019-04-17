exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("stories").insert([
        {
          source:
            "https://medium.com/globalgoodness/12-powerful-refugee-stories-from-around-the-world-5c0a54d2e2ed",
          title: "Alia",
          story:
            "The last thing I remember of Syria, before we left, was when my mother was taking me from our place to our grandparents. The roads were full of dead corpses. I saw dead people with no heads or no hands or legs. I was so shocked I couldn’t stop crying. To calm me down, my grandfather told me they were mean people, but I still prayed for them, because even if some considered them mean, they were still dead human beings. Back at home, I left a friend in Syria, her name was Rou’a. I miss her a lot and I miss going to school with her. I used to play with her with my Atari, but I couldn’t bring it with me. I also used to have pigeons, one of them had eggs, I would feed them and care for them. I’m worried about them, I really pray someone is still caring for them. But here I have a small kitten that I really love! I miss my home a lot. I hope one day we’ll be back and things will be just like before."
        },
        {
          source:
            "https://medium.com/globalgoodness/12-powerful-refugee-stories-from-around-the-world-5c0a54d2e2ed",
          title: "Bizimana",
          story:
            "Bizimana was two years old when his family had to flee the Rwandan genocide to Burundi. From there he moved to camps in Tanzania and now lives in Nairobi, Kenya. He received business start-up training and has established a business that has grown so fast he is now able to start a cafe service. He is also a prize-winning singer."
        },
        {
          source:
            "https://medium.com/globalgoodness/12-powerful-refugee-stories-from-around-the-world-5c0a54d2e2ed",
          title: "Yara",
          story:
            "Yara has loved sewing since she was a child. “My mother taught me when I was a young girl and said it would always be a useful skill,” she said. “I never imagined that one day it would come to mean so much, and provide me with a small income.” Originally from Syria, Yara studied embroidery at a self-help group in Tripoli, Lebanon, run by Concern Worldwide’s local partners. She attended workshops for two hours a day, and was able to leave her younger children at a partner-run kindergarten. “Embroidery is a new skill for me,” she said. “There is so much to learn and every day we do something different. The main thing is that it occupies my mind and it stops me from thinking too much. Using my hands and creating something beautiful calms me. The lady who teaches the embroidery class is like a mother figure for us.” Yara has been living in Lebanon with her five children and husband for the past two years. “We were a close-knit family, but we had to flee Syria,” she explained. Her parents and one of her sisters were a refugee camp in Jordan, and two sisters still in Syria. “I worry about them every day.”"
        },
        {
          source:
            "https://medium.com/globalgoodness/12-powerful-refugee-stories-from-around-the-world-5c0a54d2e2ed",
          title: "Achan",
          story:
            "I am a widow who had eight children. Seven of her children died during the ongoing war in her home country of South Sudan. As a result, she was left with many orphans to take care of. Before the war, she was a peasant farmer in Sudan who cultivated to sustain her big family. When the war broke out in her community, she and her family ran to save their lives, leaving all their belongings behind. She believes her home has been destroyed by the rebels."
        },
        {
          source:
            "https://medium.com/globalgoodness/12-powerful-refugee-stories-from-around-the-world-5c0a54d2e2ed",
          title: "Shahid",
          story:
            "We hid ourselves on the mountain for about eight nights. From the mountain, we saw a battle between [the violent group] and the PKK [Kurdish forces], who fought very courageously. After the sun set, we went to them. They treated us with much respect and took us to a place where there were lots of Yazidis and gave us food. Thus, after eight days of walking between the Iraq and Syrian borders, they helped us reach a quiet region in Northern Iraq. From there, we drove to Sulaymaniyah City."
        },
        {
          source:
            "https://medium.com/globalgoodness/12-powerful-refugee-stories-from-around-the-world-5c0a54d2e2ed",
          title: "Khadegah",
          story:
            "It is very hard for me to understand the bloodshed, since I have never hurt anyone. I have seen some of my family members killed and others injured. I identify that I am a refugee from a conflict land, Darfur, Sudan. I always think about my father, my mother and the rest of my family. I think about my former neighbors of 11 years. I don’t know if they’re alive or not."
        },
        {
          source:
            "https://medium.com/globalgoodness/12-powerful-refugee-stories-from-around-the-world-5c0a54d2e2ed",
          title: "Fouzia",
          story:
            "During the factional war, my family and I left the country as it became unbearable to live in Kabul. Hundreds, or I think thousands, of rockets were hitting the city every day. We left for Tajikistan and came back when we heard there is peace in Afghanistan. We lived in Tajikistan for 14 years with the hope of going back home. Tajikistan was not our country.” Fouzia wants to be a teacher to help spread peace through education in Afghanistan. For her safety, we did not share her photo, but rather another photo from AAE’s school."
        },
        {
          source:
            "https://medium.com/globalgoodness/12-powerful-refugee-stories-from-around-the-world-5c0a54d2e2ed",
          title: "Abdul",
          story:
            "Abdul now lives in an apartment building with forty female head of household refugee families in Amman. His father was killed in Syria. He has been seen a number of times in the psychosocial clinic run within his apartment building. Staff from International Humanistic Psychology Association visited his school because of his complaints of being bullied by one particular student. He couldn’t believe they would come to try to help him, as he had tried with the school teacher and felt unheard. He said it was one of the best things that had happened for him since they came to Jordan. Abdul hopes to drive buses, likes to help others, and loves soccer."
        }
      ]);
};
