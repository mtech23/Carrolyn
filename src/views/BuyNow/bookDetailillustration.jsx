import { React, useEffect, useState } from "react";
import LayoutTheme from "../Layout";
import { SubHeader } from "../../components/SubHeader";
import dogBanner from "/images/gallery-dog2.png";
import BannerImage from "/images/hero-bg.png";
import { useNavigate, useParams } from "react-router-dom";
import { Player } from "video-react";
import { ReviewsBox } from "../../components/Reviews";
import { Helmet } from "react-helmet";
import { cartIcon } from "../../../public/images";

export const BookDetailIllusrationPage = () => {
  const { id, slug } = useParams();
  const navigate = useNavigate();

  const [bookDetail, bookDetailData] = useState({});
  const illustrationbooks = [
    {
      id: 1,
      head: "Spot On: Chaos At The Dog Rescue",
      slug: "spot-on-chaos-at-the-rescue",
      desc: "To Lynn, handling some of the worst scenarios is not an unusual condition. Its her life’s work. But when a kidnapping and a murder happen, her focus all of a sudden changes. Something has to be done and Lynn is fearless enough to try..",
      completedDescription: [
        "To Lynn, handling some of the worst scenarios is not an unusual condition. Its her life’s work. But when a kidnapping and a murder happen, her focus all of a sudden changes. Something has to be done and Lynn is fearless enough to try.",
        "As Lynn and Maryanne carry out their own investigations, the case becomes increasingly personal. Long-submerged secrets surface as Lynn teams up with the cops to solve the puzzle before a cunning killer claims another victim.",
      ],
      img: "illbook2",
      trailer: "SpotOnMysteryAtTheDogRescue-Trailer",
      link: "B0BJ7VWV9W",
      paperback: "9.99",
      hardcover: "",
      ebook: "3.99",
      reviews: [
        {
          authorName: "Brown Jones",
          description:
            "'SPOT ON - Chaos At The Dog Rescue' is a heartwarming tale that left me in awe of Lynn's dedication to saving these precious dogs. The author beautifully captures the bond between humans and animals, reminding us of the power of compassion.",
        },
        {
          authorName: "Young Hall",
          description:
            "From the moment I started reading 'SPOT ON - Chaos At The Dog Rescue,' I was hooked by the thrilling mystery and unexpected twists. Lynn's determination to uncover the truth kept me on the edge of my seat throughout the book.",
        },
        {
          authorName: "Adams Bakers",
          description:
            "The raw emotions evoked by 'SPOT ON - Chaos At The Dog Rescue' made me shed tears for the hardships these innocent dogs endure. Lynn's unwavering empathy and relentless efforts to provide them a better life left a profound impact on me.",
        },
        {
          authorName: "Warren Long",
          description:
            "'SPOT ON - Chaos At The Dog Rescue' had me laughing out loud with its witty dialogue and charming characters. Lynn's adventurous journey is filled with humorous moments that brought a smile to my face.",
        },
        {
          authorName: "Jordon Hamilton",
          description:
            "Through the pages of 'SPOT ON - Chaos At The Dog Rescue,' I was transported to a world where kindness and love conquer all obstacles. Lynn's magical connection with the rescue dogs touched my heart, reminding me of the extraordinary bonds we can form with animals.",
        },
        {
          authorName: "Russel Foster",
          description:
            "'SPOT ON - Chaos At The Dog Rescue' exposed the dark side of human behavior, leaving me frustrated with the injustices these animals face. This thought-provoking narrative shed light on the importance of animal welfare and the need for change.",
        },
        {
          authorName: "Graham Griffin",
          description:
            "Lynn's unwavering determination in 'SPOT ON - Chaos At The Dog Rescue' filled me with hope for a better world. This uplifting story reminded me that even in the face of chaos, one person's actions can make a significant difference in the lives of others.",
        },
        {
          authorName: "Jacob Campbell",
          description:
            "'SPOT ON - Chaos At The Dog Rescue' beautifully captures the bittersweet reality of rescue work. Lynn's journey is a testament to the immense joy and heartache that comes with saving lives, leaving a lasting impression on my heart.",
        },
        {
          authorName: "Lily Lopez",
          description:
            "I couldn't put down 'SPOT ON - Chaos At The Dog Rescue' as Lynn's adventure unfolded before my eyes. The gripping narrative and vivid descriptions made me feel like I was right beside her, experiencing every moment of the chaotic and unforgettable journey.",
        },
        {
          authorName: "Noah Allen",
          description:
            "'SPOT ON - Chaos At The Dog Rescue' ignited a fire within me to make a difference in the lives of animals. Lynn's dedication and unwavering commitment to her mission inspired me to take action and be a voice for those who cannot speak for themselves.",
        },
      ],
    },
    {
      id: 2,
      head: "Spot On: Mystery At The Dog Rescue",
      slug: "spot-on-mystery-at-the-dog-rescue",
      desc: "When Lynn wakes up to find some of her rescue dogs missing, she is terrified. Who would steal her dogs, and for what purpose? The mystery continues when a man is found shot to death at Lynn’s shelter.It soon becomes apparent her pups were stolen to send to China to take part in dogfights. Lynn and her friends cannot let this happen so rush to save their precious pets...",
      completedDescription: [
        "When Lynn wakes up to find some of her rescue dogs missing, she is terrified. Who would steal her dogs, and for what purpose? The mystery continues when a man is found shot to death at Lynn’s shelter.",
        "It soon becomes apparent her pups were stolen to send to China to take part in dogfights. Lynn and her friends cannot let this happen so rush to save their precious pets. Their investigation takes them to New York City’s Chinatown where they must stand up to the Chinese mob.",
        "Lynn will not back down. She will find her rescue dogs and maybe even solve a murder in this adventure story about one woman’s love for fur babies and the lengths she will go to save them.",
      ],
      img: "illbook1",
      trailer: "MysterAtTheDogResscue",
      link: "B0BJCBM7PW",
      paperback: "",
      hardcover: "",
      ebook: "3.99",
      reviews: [
        {
          authorName: "Sarah Thompson",
          description:
            "'SPOT ON - Mystery At The Dog Rescue' is an exhilarating adventure that had me on the edge of my seat from start to finish. The author skillfully weaves together a tale of suspense, courage, and the power of friendship. I couldn't put it down!",
        },
        {
          authorName: "James Anderson",
          description:
            "What a gripping conclusion to an incredible series! 'SPOT ON - Mystery At The Dog Rescue' had me hooked from the first page. The author's ability to create tension and keep readers guessing is truly remarkable. This book is a must-read for any mystery lover.",
        },
        {
          authorName: "Emily Johnson",
          description:
            "'SPOT ON - Mystery At The Dog Rescue' is a heart-wrenching tale of resilience and determination. The characters face unimaginable challenges and their unwavering loyalty to each other is truly inspiring. The author's vivid descriptions transported me into their world, making this a truly unforgettable read.",
        },
        {
          authorName: "Daniel Roberts",
          description:
            "This book is a rollercoaster ride of emotions! 'SPOT ON - Mystery At The Dog Rescue' had me laughing, crying, and cheering for the characters throughout their journey. The author's ability to evoke such strong emotions is a testament to their storytelling prowess. I highly recommend this book to anyone who enjoys a good adventure.",
        },
        {
          authorName: "Olivia Davis",
          description:
            "The author's deep understanding of the human-canine relationship shines through, making this book a beautiful tribute to our loyal companions. I was truly touched by this heartfelt tale.",
        },
        {
          authorName: "Benjamin Taylor",
          description:
            "This book is a true page-turner that will keep readers hooked from beginning to end.",
        },
        {
          authorName: "Sophia Ramirez",
          description:
            "'SPOT ON - Mystery At The Dog Rescue' is a thrilling and suspenseful read. The author skillfully builds up the tension, keeping readers on their toes throughout the entire book. This is an absolute must-read for fans of mystery and adventure.",
        },
        {
          authorName: "Michael Thompson",
          description:
            "'SPOT ON - Mystery At The Dog Rescue' is an action-packed novel that will leave readers breathless. The author's attention to detail and knack for creating vivid imagery made me feel like I was right there alongside the characters, experiencing their triumphs and tribulations. I was captivated from the very first page and couldn't wait to see how it all unfolded.",
        },
      ],
    },
    {
      id: 3,
      head: "Spot On: Canine Babies At The Dog Rescue",
      slug: "spot-on-canine-babies-at-the-dog-rescue",
      desc: "When Lynn wakes up to find some of her rescue dogs missing, she is terrified. Who would steal her dogs, and for what purpose? The mystery continues when a man is found shot to death at Lynn’s shelter.It soon becomes apparent her pups were stolen to send to China to take part in dogfights. Lynn and her friends cannot let this happen so rush to save their precious pet...",
      completedDescription: [
        "When Lynn wakes up to find some of her rescue dogs missing, she is terrified. Who would steal her dogs, and for what purpose? The mystery continues when a man is found shot to death at Lynn’s shelter.",
        "It soon becomes apparent her pups were stolen to send to China to take part in dogfights. Lynn and her friends cannot let this happen so rush to save their precious pets. Their investigation takes them to New York City’s Chinatown where they must stand up to the Chinese mob.",
        "Lynn will not back down. She will find her rescue dogs and maybe even solve a murder in this adventure story about one woman’s love for fur babies and the lengths she will go to save them.",
      ],
      img: "illbook3",
      trailer: "SpotOnCanineBabies-Trailer",
      link: "B0BJ7XVN69",
      paperback: "9.00",
      hardcover: "",
      ebook: "3.99",
    },
    {
      id: 4,
      head: "SPOT ON: Canines on a Cruise",
      desc: "They say that a dog is among the most loyal animals on earth and a man’s best friend too! Well, it wouldn’t hurt to have one or maybe two fur babies, right? “Spot-on: Canines on a Cruise” is a remarkable novel written by Carolynn Tucciarone which portrays the amazing life of a loving couple that owns a dog rescue in Austin, Texas. From rescuing bull terriers from a ditch to nurturing all injured and abandoned dogs...",
      completedDescription: [
        "They say that a dog is among the most loyal animals on earth and a man’s best friend too! Well, it wouldn’t hurt to have one or maybe two fur babies, right? “Spot-on: Canines on a Cruise” is a remarkable novel written by Carolynn Tucciarone which portrays the amazing life of a loving couple that owns a dog rescue in Austin, Texas. From rescuing bull terriers from a ditch to nurturing all injured and abandoned dogs, the couple takes on another challenge of rescuing abandoned fur babies in South Korea. They embark upon their journey and narrate the experience of their lifetime word by word. From China to Mexico and Seoul in South Korea, they then had a successful canines on a cruise! Step inside their shoes and take part in their adventure-filled journey in “Spot-on: Canines on a Cruise!”",
      ],
      img: "illbook4",
      trailer: "SpotOnMysteryAtTheDogRescue-Trailer",
      link: "B0BJ7X187V",
      paperback: "",
      hardcover: "",
      ebook: "3.99",
      slug: "spot-on-canines-on-a-cruise",
    },
    {
      id: 5,
      head: "SPOT- ON: NEW BEGINNINGS",
      desc: "This book is the end of my SPOT ON SERIES.",
      completedDescription: ["This book is the end of my SPOT ON SERIES."],
      img: "illbook5",
      trailer: "SpotOnMysteryAtTheDogRescue-Trailer",
      link: "B0BFJV9NRY",
      paperback: "9.99",
      hardcover: "",
      ebook: "3.49",
      slug: "spot-on-new-beginnings",
      reviews: [
        {
          authorName: "Carlos Wayne.",
          description:
            "'SPOT ON - New Beginnings' took me on a gripping journey from start to finish. The way the author intricately weaves the threads of adventure, love, and suspense is truly commendable. I found myself deeply invested in the characters, rooting for them throughout their ordeal. The heart-wrenching moments of being kidnapped and sold left me on the edge of my seat. And that ending! Oh, it left me both satisfied and yearning for more. Kudos to the author for crafting such an engaging tale.",
        },
        {
          authorName: "Ricardo Paul",
          description:
            "As a fan of the Spot On series, 'New Beginnings' did not disappoint! The thrilling adventure in Canada and Mexico had me hooked from page one. I connected with the dogs on a personal level, and their journey was both heartwarming and heart-wrenching. I admire how the author delicately handled the emotions throughout the story. Although it marks the end of the series, it does so on a high note, leaving me with bittersweet feelings. Thank you for this emotional rollercoaster.",
        },
        {
          authorName: "Gerald Joey",
          description:
            "“This book showcases the author's incredible storytelling prowess. The way the narrative unfolds, with its twists and turns, kept me intrigued until the final page. I appreciated the attention to detail and the well-developed characters. However, the ambiguous ending left me pondering the fate of the dogs. While I prefer conclusive endings, I acknowledge the author's intent to spark reflection and discussion. An impressive conclusion to the Spot-On series.",
        },
        {
          authorName: "Martin Scott",
          description:
            "This book touched my heart deeply. 'New Beginnings' takes readers on an emotional rollercoaster, celebrating the bond between humans and dogs. The kidnapping plotline was unsettling, but it beautifully highlighted the resilience of these brave dogs. The author's prose painted vivid pictures, making me feel like I was right there with the characters. And the ending! The uncertainty surrounding the dogs' return left me hopeful yet anxious. An emotional and powerful read.",
        },
        {
          authorName: "Jessica T",
          description:
            "'SPOT ON - New Beginnings' stands out as an engrossing conclusion to the series. The adventure-packed journey across Canada and Mexico kept me engrossed, eager to uncover the dogs' fate. The author masterfully incorporated surprising twists that kept me guessing at every turn. The characters' growth and development were a joy to witness. I'll miss this series, but I'll cherish the memories it left behind.",
        },
        {
          authorName: "Rick Victor",
          description:
            "This book left me with mixed emotions, but in a good way. The heart-pounding adventure the dogs embarked on was captivating, and the portrayal of their resilience was heartwarming. The book's exploration of love and hope, even in the face of adversity, resonated deeply with me. The open-ended conclusion allowed me to imagine the future of the dogs, making the story linger in my mind long after I finished reading.",
        },
        {
          authorName: "Liam Nick",
          description:
            "As a devoted fan of the Spot On series, 'New Beginnings' felt like saying goodbye to old friends. The author's talent for crafting complex characters and immersive settings shone through once again. The dogs' experiences were both heartrending and inspiring, making the story hard to put down. The ending, though uncertain, left me with a sense of hope and nostalgia. Thank you for giving us this remarkable journey.",
        },
        {
          authorName: "Ava Sandy",
          description:
            "'The kidnapping plotline had me gripping the book tightly, desperate to know the dogs' fate. The story's emotional depth and the dogs' unwavering determination kept me engaged throughout. While the ending was open-ended, it allowed me to ponder the possibilities, and that glimmer of hope made all the difference.",
        },
      ],
    },
    {
      id: 6,
      head: "NEW BEGINNINGS: DO YOU BELIEVE IN GHOSTS?",
      desc: "Join hands with Lynn and her friends over a new adventure that will keep you reading with delight. Discover the thrill and excitement of traveling across the cities, meeting your childhood friend, est...",
      completedDescription: [
        "Do you believe in ghostssss?",
        "Join hands with Lynn and her friends over a new adventure that will keep you reading with delight. Discover the thrill and excitement of traveling across the cities, meeting your childhood friend, establishing new roots in a city with their help, and working with them for the rehabilitation of the fur babies in the rescue.",
        "Carolynn has channeled her creativity into creating a spine-tingling tale filled with paranormal encounters beyond the grave and other typical supernatural phenomena. From the downright chilling to the unexpected encounters, the content is filled with versatile food for thought to ponder over to, which we are blissfully blind.",
      ],
      img: "illbook6",
      trailer: "SpotOnMysteryAtTheDogRescue-Trailer",
      link: "B0BFGFT3GQ",
      paperback: "",
      hardcover: "",
      ebook: "3.49",
      slug: "spot-on-moving-on-who-believes-in-ghosts",
    },
    {
      id: 7,
      head: "Moving On: To New Heights & And New Adventures",
      slug: "spot-on-moving-on-to-new-heights-and-new-adventures",
      desc: "Inspired by actual events, a woman and her friends explore new adventures, ups, and downs on a road trip. She has never traveled alone, so she decides to travel with her close friend. She deeply felt and flawlessly recounted the...",
      completedDescription: [
        "Inspired by actual events, a woman and her friends explore new adventures, ups , and downs on a road trip. She has never traveled alone, so she decides to travel with her close friend. She deeply felt and flawlessly recounted the journey of exploration—of the world outside and the soul within—that takes her to new heights and New adventures. However, living a life of purpose isn't always as simple as it appears. In truth, it was, at times, tedious, draining, and even desperate. However, she achieved the confidence and experience for which she had yearned. This book explains how she grew stronger on The road and experienced the highs and lows of new experiences. On her road journey with her companion, Moving on: To new heights and new adventures is a narrative about a lady learning and unlearning, from backroads to breakdowns and New adventures.",
      ],
      img: "illbook7",
      trailer: "MovingOnToNewHeightsAndNewAdventures",
      link: "B0BFJMX9TC",
      paperback: "",
      hardcover: "",
      ebook: "3.49",
      reviews: [
        {
          authorName: "Sarah Jenkins",
          description:
            "'Moving On: To New Heights & New Adventures' is a captivating account of a woman's transformative journey. Through her eloquent storytelling, she shared the highs and lows of her road trip with her close friend. The book radiates positivity and serves as a powerful reminder that stepping out of one's comfort zone can lead to remarkable personal growth.",
        },
        {
          authorName: "David Thompson",
          description:
            "Reading 'Moving On: To New Heights & New Adventures' was an emotional rollercoaster. The author's honesty in recounting the challenges she faced on her solo road trip was commendable.",
        },
        {
          authorName: "Emily Parker",
          description:
            "This book is a beautiful tale of self-discovery and resilience.",
        },
        {
          authorName: "James Anderson",
          description:
            "The book sheds light on the ups and downs of life's journey, making it a relatable and worthwhile read",
        },
        {
          authorName: "Sophia Mitchell",
          description:
            "This book is a beautiful amalgamation of profound insights and heart-touching moments. The author's ability to reflect on her experiences and draw meaningful life lessons is truly commendable. 'Moving On' leaves readers pondering their own paths and inspires them to embrace new adventures.",
        },
        {
          authorName: "Benjamin Turner",
          description:
            "From the first page, 'Moving On: To New Heights & New Adventures' grabbed my attention and never let go. The author's engaging writing style made me feel like I was part of her journey, experiencing each moment alongside her. I thoroughly enjoyed this adventure-packed narrative.",
        },
        {
          authorName: "Emma Brooks",
          description:
            "The way the author and her friend supported each other through thick and thin was heartwarming.'Moving On' beautifully captures the essence of companionship and shared experiences.",
        },
        {
          authorName: "Michael Roberts",
          description:
            "She bared her soul, allowing readers to witness her growth and evolution. This book is a compelling testament to the power of vulnerability.",
        },
      ],
    },
    {
      id: 8,
      head: "PETEY: THE BULL TERRIER",
      slug: "petey-the-bull-terrier",
      desc: "This book is different from my Spot-on series and my Moving On series. This book is about a bull terrier named Petey. he goes on And adventure with his pals from the gromming place and the Dog show...",
      completedDescription: [
        "This book is different from my Spot-on series and my Moving On series. This book is about a bull terrier named Petey. he goes on And adventure with his pals from the gromming place and the Dog show.",
        "The adventure begins with being kidnapped and sold for money is Canada and Mexico. The ending is interesting with all the dogs maybe coming home.",
        "I hope you enjoy this book as much as I did writing it.",
      ],
      img: "illbook8",
      trailer: "SpotOnMysteryAtTheDogRescue-Trailer",
      link: "B0BLVPBT7W",
      paperback: "9.99",
      hardcover: "",
      ebook: "3.99",
      reviews: [
        {
          authorName: "Henry Parker",
          description:
            "'Petty The Bull Terrier took me on an enchanting journey with Petey and his adorable pals. The book beautifully captures the essence of friendship and loyalty among dogs. I found myself engrossed in their adventurous tale, from the grooming place to the thrilling dog show. The suspenseful plot with the dogs being kidnapped had me on the edge of my seat, rooting for their safe return.",
        },
        {
          authorName: "David Peterson",
          description:
            "'The characters are wonderfully portrayed, and their bond of friendship is truly heartwarming. The unexpected twist of them being kidnapped kept me hooked until the very end. I couldn't help but feel invested in their fate. A beautifully written tale that resonates with the soul",
        },
        {
          authorName: "Jessica Hailey",
          description:
            "'Wow! Petty The Bull Terrier surpassed my expectations. This book was quite different from the author's previous series, and I loved every bit of it. Petey and his friends embark on an exhilarating dventure that kept me guessing at every turn. The author's creativity in portraying their escapades in Canada and Mexico was commendable. The suspense and uncertainty surrounding their return added an exciting layer to the story. A must-read for all dog lovers!",
        },
        {
          authorName: "Michael Eric",
          description:
            "'Petty The Bull Terrier is a captivating story that beautifully captures the resilience and courage of our four-legged companions. Petey's adventures were both heartwarming and gripping. The way the author portrays the deep bond between the dogs and their determination to come home was truly touching. This book left me with a sense of warmth and admiration for our loyal canine friends. A compelling and emotional journey!",
        },
        {
          authorName: "Angela Spenser",
          description:
            "'A gem of a book that can be enjoyed by readers of all ages. The delightful tale of Petey and his pals is both entertaining and heartwarming. I found myself smiling, laughing, and even shedding a tear during their adventurous journey. The author's writing style is engaging and keeps you invested in the characters throughout. A perfect book to share with friends and family.",
        },
        {
          authorName: "Jason Scott",
          description:
            "'I couldn't help but feel emotionally attached to Petey and his furry gang. The kidnappings in Canada and Mexico had me at the edge of my seat, wondering how they would find their way back home. An exciting and memorable read!",
        },
        {
          authorName: "Laura Steve",
          description:
            "'Petty The Bull Terrier is a book that tugs at your heartstrings and stays with you long after you've turned the last page. Petey's adventure with his pals is both captivating and emotionally resonant. The author skillfully portrays the complexities of friendship and the unwavering loyalty of dogs. I found myself emotionally invested in their journey, hoping for a happy reunion. An excellent addition to the author's collection.",
        },
        {
          authorName: "Mark Denny",
          description:
            "The ending left me with a mix of emotions, making this a truly memorable read",
        },
      ],
    },
    {
      id: 9,
      head: "GETTING OUT OF THE BOX",
      desc: "Back to the rescue in Texas sage and April want to open an INN....",
      completedDescription: [
        "Back to the rescue in Texas sage and April want to open an INN. As usual Lynn sage and April end up with mysteries at the INN. These adventures come to volition as a Waze and everybody moves on.",
      ],
      img: "illbook9",
      trailer: "MovingOnGettingOutOfTheBox",
      link: "B0BM3SC3P4",
      paperback: "14.50",
      hardcover: "",
      slug: "moving-on-getting-out-of-the-box",
      ebook: "",
      reviews: [
        {
          authorName: "Della Henry",
          description:
            "'Moving On' is an enchanting tale that takes readers on an emotional journey. Lynn and April's bond is truly heartwarming as they venture into the world of innkeeping. The Texas sage backdrop adds a unique charm to the story, while the unexpected mysteries keep you hooked till the last page. I couldn't help but feel invested in each character's growth and development. Kudos to the author for crafting such a delightful narrative!",
        },
        {
          authorName: "Guzman Andrew",
          description:
            "From the very first chapter, 'Moving On' captivated my attention with its engaging plot and well-rounded characters. The seamless blend of adventure and romance kept me turning the pages eagerly. Lynn and April's determination to turn their dreams into reality is both inspiring and relatable. The Texas setting provides a picturesque backdrop, adding an extra layer of beauty to the story. A must-read for anyone seeking a heartfelt and thrilling novel.",
        },
        {
          authorName: "Olivia Greene",
          description:
            "Moving On' is a unique blend of whimsy and mystery, transporting readers to a world filled with eccentric characters and unexpected twists. Lynn and April's journey is both humorous and poignant, and the Texas sage landscape adds a touch of magic to the narrative. The inn's mysteries had me guessing until the end, and I enjoyed every moment of this delightful adventure. A truly delightful read!",
        },
        {
          authorName: "Ethan Roberts",
          description:
            "'Moving On' is a touching portrayal of the strength of human spirit and the power of friendship. Lynn and April's determination to follow their dreams despite the challenges is truly inspiring. The Texas sage setting is vividly described, immersing readers in its beauty. The mysteries woven throughout the plot add an exciting element, keeping readers on their toes. A beautifully written novel that will stay with me for a long time.",
        },
        {
          authorName: "Emily Lewis",
          description:
            "'A heartwarming story that left me with a smile on my face. Lynn and April's friendship is the true highlight of the book, and their journey to open an inn in Texas sage is filled with touching moments. The mysteries at the inn add a thrilling twist, making it a perfect balance of warmth and suspense. An utterly delightful read that left me feeling uplifted.",
        },
        {
          authorName: "Peter Carter",
          description:
            "'This book is a testament to the author's exceptional storytelling skills. Lynn and April's characters are so well-crafted that they almost feel like old friends. The vivid descriptions of Texas sage paint a picturesque backdrop for the intriguing mysteries that unfold at the inn. The novel's themes of courage, love, and second chances resonate deeply with the reader. A masterful work of fiction that I wholeheartedly recommend.",
        },
        {
          authorName: "Isabella Foster",
          description:
            "'Moving On' takes readers on a journey of self-discovery and personal growth. Lynn and April's determination to pursue their dreams despite the obstacles is truly empowering. The Texas sage setting is brought to life through evocative descriptions, immersing readers in its beauty. The mysteries that befall the inn add an element of suspense that keeps you hooked till the end. An engaging and thought-provoking read.",
        },
        {
          authorName: "Potter Francis",
          description:
            "An emotionally charged rollercoaster ride that left me feeling both elated and contemplative. Lynn and April's friendship is beautifully portrayed, and their adventures in Texas sage are filled with excitement and heartache. The mysteries at the inn add a layer of intrigue that keeps you guessing. The author's writing style is both captivating and eloquent. A powerful and moving novel that resonates with the human spirit.",
        },
        {
          authorName: "Ava Thompson",
          description:
            "It is a delightful escapade into the lives of Lynn and April as they embark on a new chapter in Texas sage. The bond between these two characters is enchanting, and their determination to open an inn despite the challenges is inspiring. The mysteries that arise at the inn add a dash of excitement to the narrative. This heartwarming tale is a perfect blend of adventure, romance, and friendship.",
        },
        {
          authorName: "James Harrison",
          description:
            "Lynn and April's journey to open an inn in Texas sage is filled with ups and downs, making it a relatable and engaging read. The mysteries that unfold at the inn add an element of suspense that keeps you invested in the story. The author's vivid storytelling paints a beautiful picture of the characters' experiences. An immersive and touching novel that leaves a lasting impression.",
        },
      ],
    },
    {
      id: 10,
      head: "New Year of Mystery And Chaos!",
      desc: "Well readers, this is my tenth book. I love writing. As the year comes to an end. I hope we are all having a wonderful holiday season....",
      completedDescription: [
        "Well readers, this is my tenth book. I love writing. As the year comes to an end. I hope we are all having a wonderful holiday season.",
        "Marriage is a compromise. It seems that April and her husband couldn't compromise. He wouldn't take no and tracked her down.",
        "The mystery on the cruise also brings back another person that wasn't nice. Hope you can read it to find out who came back in their life!",
      ],
      img: "illbook10",
      trailer: "MovingOnWelcometoaNewYearofMysteryAndChaos!",
      link: "B0BRZ7GVWQ",
      paperback: "12.58",
      hardcover: "",
      ebook: "",
      slug: "moving-on-welcome-to-a-new-year-of-mystery-and-chaos",
      reviews: [
        {
          authorName: "Emily Wills",
          description:
            "Moving On: Welcome to a New Year of Mystery And Chaos! has captured my heart with its fascinating blend of mystery and chaos. As I delved into the story, I couldn't help but be swept away by the author's incredible storytelling.",
        },
        {
          authorName: "John Tye",
          description:
            "This book, Moving On, beautifully portrays the complexities of human relationships and the challenges that come with them. It touched my heart as I witnessed April and her husband's journey, struggling to find common ground amidst chaos.",
        },
        {
          authorName: "Sarah Michael",
          description:
            "Moving On: Welcome to a New Year of Mystery And Chaos! presents a thought-provoking narrative that delves into the intricacies of marriage and the importance of compromise. April's character arc serves as a poignant reflection of the challenges individuals face when seeking resolution in relationships.",
        },
        {
          authorName: "Michael Henry",
          description:
            "Whoa! Brace yourselves for a rollercoaster ride of emotions in Moving On! This book takes you on an exhilarating journey filled with love, heartbreak, and suspense. April and her husband's passionate yet tumultuous relationship kept me hooked from start to finish. The cruise mystery brought an element of surprise that I totally didn't see coming. An electrifying read!",
        },
        {
          authorName: "Grace Larry",
          description:
            "Moving On: Welcome to a New Year of Mystery And Chaos! is a heartwarming tale of love and redemption. The author's tender portrayal of April and her husband's struggles struck a chord with me, reminding us all that life is a journey of learning and growth. The mystery on the cruise was a delightful twist that added excitement to the narrative. A truly uplifting story!",
        },
        {
          authorName: "Jake Patterson",
          description:
            "Hey there, readers! You're in for a wild ride with Moving On! This book offers a perfect blend of chaos and mystery, making it an entertaining page-turner. April and her husband's escapades had me laughing out loud at times, and their misadventures on the cruise had me at the edge of my seat. A rollicking good time!",
        },
        {
          authorName: "Emma Wilson",
          description:
            "Moving On weaves a nostalgic tale of reminiscence and growth. April and her husband's struggle to find middle ground is portrayed with genuine emotion that resonates deeply. The mystery surrounding the cruise stirred up memories of classic whodunits, and I couldn't help but feel a sense of nostalgia. A beautifully evocative read!",
        },
        {
          authorName: "Alex Rose",
          description:
            "Moving On is an empowering story of strength and resilience. April's journey reflects the indomitable human spirit, and her refusal to be confined by circumstances is truly inspiring. The cruise mystery introduced a new layer of intrigue that held my attention throughout. An empowering read that reminds us to face life's chaos head-on.",
        },
      ],
    },
    {
      id: 11,
      head: "Moving On: Stepping Out Of The Box",
      desc: "After a surprising crime occurs at INN, Sage and April get caught up in a mysterious and perilous situation. As a police look into the incident, the intricate details of the case emerge, exposing a sinister plot.",
      completedDescription: [
        "After a surprising crime occurs at INN, Sage and April get caught up in a mysterious and perilous situation. As a police look into the incident, the intricate details of the case emerge, exposing a sinister plot.",
        "Can they navigate through the complexities and reveal the truth before its too late?.",
        "The story takes unexpected twists, involving the intriguing Mr. Robinson and the mysterious Mrs. Small. In the midst of the chaos, a chilling revelation makes everyone question the true nature of event.",
      ],
      img: "book-card-img-10",
      trailer: "ChristmasOnHolidayIsland",
      link: "dp/B0CTW8YQ5X",
      paperback: "11.99",
      hardcover: "30.69",
      ebook: "3.99",
      categoryLink: "book-detail",
      slug: "stepping-out-of-the-box",
    },
  ];
  useEffect(() => {
    illustrationbooks.map((item) => {
      if (item.slug == slug) {
        bookDetailData(item);
      }
    });
  }, []);
  return (
    <LayoutTheme>
      <Helmet>
        <meta charSet="utf-8" />
        <title>
          Story Book Detail - The world of Personalized Dog Books for Adults
        </title>
        <link rel="canonical" href={window.location.href} />
      </Helmet>
      {/* <SubHeader name="Book Detail" img={BannerImage} /> */}
      <SubHeader
        name="Book Detail"
        img={BannerImage}
        subHeading={bookDetail.head}
      />

      <section className="section_without_bg">
        <div className="container">
          <div className="row">
            <div className="col-md-7">
              <div className="without_bg_content">
                <div className="inner_sec_title">
                  <h2 class="inner_sec_title-h2">{bookDetail.head}</h2>
                  {bookDetail.completedDescription &&
                    bookDetail.completedDescription.map(
                      (description, index) => {
                        return (
                          <div className="without_bg_content_body">
                            <p key={index}>{description}</p>
                          </div>
                        );
                      }
                    )}
                  <div className="body_btns">
                    {bookDetail.paperback === "" ? (
                      <></>
                    ) : (
                      <>
                        <a
                          class="btn_with_icon"
                          href={`https://www.amazon.com/gp/product/${bookDetail.link}`}
                        >
                          <span>
                            Paperback - ${bookDetail.paperback} (BUY FROM
                            AMAZON)
                          </span>
                          <span className="body_icon">
                            <img src={cartIcon} alt="" />
                          </span>
                        </a>
                      </>
                    )}
                    {/* <a href={`https://www.amazon.com/gp/product/${bookDetail.link}`}><span>Paperback - ${bookDetail.paperback} (BUY FROM AMAZON)</span></a> */}
                    {bookDetail.ebook && (
                      <a
                        class="btn_with_icon"
                        href={`https://www.amazon.com/gp/product/${bookDetail.link}`}
                      >
                        <span>
                          E-Book - ${bookDetail.ebook} (BUY FROM AMAZON)
                        </span>
                        <span className="body_icon">
                          <img src={cartIcon} alt="" />
                        </span>
                      </a>
                    )}
                    {bookDetail.hardcover && (
                      <a
                        class="btn_with_icon"
                        href={`https://www.amazon.com/gp/product/${bookDetail.link}`}
                      >
                        <span>Hardcover - ${bookDetail.hardcover}</span>
                        <span className="body_icon">
                          <img src={cartIcon} alt="" />
                        </span>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-5">
              <div className="without_bg_img">
                <img src={`/images/${bookDetail.img}.png`} alt="Booker Cover" />
                <Player
                  src={`./videos/${bookDetail.trailer}.mp4`}
                  aspectRatio="auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="BuyNowDetail">
        {/* <div className="buynowdetail_left">
          <h1>{bookDetail.head}</h1>
          {bookDetail.completedDescription &&
            bookDetail.completedDescription.map((description, index) => {
              return (
                <div className="without_bg_content_body">
                  <p key={index}>{description}</p>
                </div>
              );
            })}
          <div className="BuyNowDetail_pricing">
            {bookDetail.paperback === "" ? (
              <></>
            ) : (
              <>
                <a
                  href={`https://www.amazon.com/gp/product/${bookDetail.link}`}
                >
                  <span>
                    Paperback - ${bookDetail.paperback} (BUY FROM AMAZON)
                  </span>
                </a>
              </>
            )}
            {/* <a href={`https://www.amazon.com/gp/product/${bookDetail.link}`}><span>Paperback - ${bookDetail.paperback} (BUY FROM AMAZON)</span></a> */}
        {/* {bookDetail.ebook && (
              <a href={`https://www.amazon.com/gp/product/${bookDetail.link}`}>
                <span>E-Book - ${bookDetail.ebook} (BUY FROM AMAZON)</span>
              </a>
            )}
            {bookDetail.hardcover && (
              <a href={`https://www.amazon.com/gp/product/${bookDetail.link}`}>
                <span>Hardcover - ${bookDetail.hardcover}</span>
              </a>
            )} */}
        {/* </div>
        </div>
        <div className="buynowdetail_right">
          <img src={`/images/${bookDetail.img}.png`} alt="Booker Cover" />
          <Player
            src={`./videos/${bookDetail.trailer}.mp4`}
            aspectRatio="auto"
          />
        </div>  */}

        <div class="feedback_top carolyn_feedback">
          {bookDetail.reviews && <h1>Our Client Feedback</h1>}

          <div className="Feedbacks">
            {bookDetail.reviews &&
              bookDetail.reviews.map((feedback, index) => {
                return (
                  <ReviewsBox
                    key={index}
                    title={feedback.authorName}
                    description={feedback.description}
                  />
                );
              })}
          </div>
        </div>
      </div>
    </LayoutTheme>
  );
};
