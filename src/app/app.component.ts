import { Component, OnInit, OnDestroy } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

interface Memory {
  id: number;
  src: string;
  type: 'image' | 'video';
  description: string;
  flipped: boolean;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(20px)' }),
        animate('0.8s ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
      ])
    ]),
    trigger('slideUp', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(50px)' }),
        animate('1s ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
      ])
    ]),
    trigger('scaleIn', [
      transition(':enter', [
        style({ opacity: 0, transform: 'scale(0.8)' }),
        animate('0.6s ease-out', style({ opacity: 1, transform: 'scale(1)' }))
      ])
    ]),
    trigger('flip', [
      state('front', style({ transform: 'rotateY(0deg)' })),
      state('back', style({ transform: 'rotateY(180deg)' })),
      transition('front => back', animate('0.6s ease-in-out')),
      transition('back => front', animate('0.6s ease-in-out'))
    ]),
    trigger('float', [
      transition('* => *', [
        animate('3s ease-in-out', style({ transform: 'translateY(-10px)' })),
        animate('3s ease-in-out', style({ transform: 'translateY(10px)' }))
      ])
    ])
  ]
})
export class AppComponent implements OnInit, OnDestroy {
  currentStep: 'landing' | 'intro' | 'message' | 'gallery' = 'landing';
  showEnvelope = true;
  envelopeOpened = false;
  typewriterText = '';
  fullText = `Happy Birthday to the girl who holds my heart from miles away. 🎂❤️

They say home is a place, but I've realized that for me, home is a person—it's you, my Pasandida Aurat. Even though we are apart tonight, I wanted to build you something that exists only for us, a little corner of the internet where the distance doesn't exist. Being your 'dumb guy' is the greatest title I've ever held, because it means I get to be the one you pamper, the one you laugh at, and the one you choose every single day.

I'll be honest, babe—sometimes I get lost in my head, grinding for our future or figuring out new things, but please know that every effort I make is fueled by the thought of us finally being together. I love your 'Gudda' version, I love your 'Kid' version, and I love the way you've handled me and our relationship with so much grace, even when things got tough. You deserve a world that is as kind and beautiful as your soul.

Tonight, I want you to forget the stress, the distance, and the silence. Just look at these photos and remember that every smile we've shared is a promise of a thousand more to come. I love your birthday more than my own because it's the day the universe decided I needed you. I promise to keep choosing you, to keep learning with you, and to never let you feel unloved. You are my destination, my chocolate, and my 'Jannat' feel.

Happy Birthday, my beautiful Rosogulla. I am so proud of you, and I'm going to make you even prouder of us. 💍🫶🫂`;
  
  typewriterIndex = 0;
  typewriterSpeed = 15; // Faster typing speed
  isTyping = false;
  
  // Cursor trail effect
  cursorTrail: Array<{x: number, y: number, id: number, opacity: number}> = [];
  private trailId = 0;
  mouseX = 0;
  mouseY = 0;
  
  revealedPhotos: number[] = [];
  
  // Memories with descriptions - Add your photos/videos here
  memories: Memory[] = [
    {
      id: 1,
      src: 'assets/photos/memory1.jpg',
      type: 'image',
      description: 'Falling and falling in love everyday 💕',
      flipped: false
    },
    {
      id: 2,
      src: 'assets/photos/memory2.jpg',
      type: 'image',
      description: 'I got everything 🏠',
      flipped: false
    },
    {
      id: 3,
      src: 'assets/photos/memory3.jpg',
      type: 'image',
      description: 'Dammnnn cutee 🥰',
      flipped: false
    },
    {
      id: 4,
      src: 'assets/photos/memory4.jpg',
      type: 'image',
      description: 'I am the luckiest guy ✨',
      flipped: false
    },
    {
      id: 5,
      src: 'assets/photos/memory5.jpg',
      type: 'image',
      description: 'Yoo we are hot 🔥',
      flipped: false
    },
    {
      id: 6,
      src: 'assets/photos/memory6.jpg',
      type: 'image',
      description: 'Meri angel 👼',
      flipped: false
    },
    {
      id: 7,
      src: 'assets/photos/memory7.jpg',
      type: 'image',
      description: 'Best days 💍',
      flipped: false
    },
    {
      id: 8,
      src: 'assets/photos/memory8.jpg',
      type: 'image',
      description: 'Okay we make weird faces together 😂',
      flipped: false
    },
    {
      id: 9,
      src: 'assets/photos/memory9.jpg',
      type: 'image',
      description: 'Ahhhh always this one is our best pic Z 💕',
      flipped: false
    },
    {
      id: 10,
      src: 'assets/photos/memory10.jpg',
      type: 'image',
      description: 'You booked my shoulder for rest of life babe 🫂',
      flipped: false
    }
    // Add more memories here - you can add videos too!
    // {
    //   id: 11,
    //   src: 'assets/videos/memory11.mp4',
    //   type: 'video',
    //   description: 'Your description here',
    //   flipped: false
    // }
  ];

  // For photo reveals on message page
  photos = this.memories.map(m => ({
    id: m.id,
    src: m.src,
    revealed: false
  }));

  audioPlayer: HTMLAudioElement | null = null;
  isMusicPlaying = false;

  ngOnInit() {
    // Start with landing page
    this.currentStep = 'landing';
    // Initialize cursor trail
    this.initCursorTrail();
    // Initialize audio player
    this.initAudio();
  }

  initAudio() {
    // Create audio element
    this.audioPlayer = new Audio('assets/music/birthday-song.mp3');
    this.audioPlayer.loop = true;
    this.audioPlayer.volume = 0.7; // Set volume to 70%
    this.audioPlayer.preload = 'auto';
    
    // Handle audio events
    this.audioPlayer.addEventListener('play', () => {
      this.isMusicPlaying = true;
    });
    
    this.audioPlayer.addEventListener('pause', () => {
      this.isMusicPlaying = false;
    });
    
    this.audioPlayer.addEventListener('ended', () => {
      this.isMusicPlaying = false;
    });
  }

  initCursorTrail() {
    document.addEventListener('mousemove', (e) => {
      this.mouseX = e.clientX;
      this.mouseY = e.clientY;
      this.addTrailPoint(e.clientX, e.clientY);
    });
  }

  addTrailPoint(x: number, y: number) {
    const point = { x, y, id: this.trailId++, opacity: 1 };
    this.cursorTrail.push(point);
    
    // Keep only last 10 points for better performance
    if (this.cursorTrail.length > 10) {
      this.cursorTrail.shift();
    }
    
    // Fade out and remove point after animation
    setTimeout(() => {
      const index = this.cursorTrail.findIndex(p => p.id === point.id);
      if (index > -1) {
        this.cursorTrail.splice(index, 1);
      }
    }, 600);
  }

  openEnvelope() {
    this.envelopeOpened = true;
    
    // Play music when envelope is opened
    if (this.audioPlayer) {
      this.audioPlayer.play().catch(error => {
        console.log('Audio play failed:', error);
        // Some browsers may block autoplay, but user interaction should allow it
      });
    }
    
    setTimeout(() => {
      this.showEnvelope = false;
      this.currentStep = 'intro';
    }, 1000);
  }

  toggleMusic() {
    if (!this.audioPlayer) return;
    
    if (this.isMusicPlaying) {
      this.audioPlayer.pause();
    } else {
      this.audioPlayer.play().catch(error => {
        console.log('Audio play failed:', error);
      });
    }
  }

  startSurprise() {
    this.currentStep = 'message';
    this.startTypewriter();
  }

  startTypewriter() {
    if (this.isTyping) return;
    this.isTyping = true;
    this.typewriterIndex = 0;
    this.typewriterText = '';
    
    const type = () => {
      if (this.typewriterIndex < this.fullText.length) {
        this.typewriterText += this.fullText.charAt(this.typewriterIndex);
        this.typewriterIndex++;
        setTimeout(type, this.typewriterSpeed);
      } else {
        this.isTyping = false;
      }
    };
    
    type();
  }

  revealPhoto(index: number) {
    if (!this.revealedPhotos.includes(index)) {
      this.revealedPhotos.push(index);
      this.photos[index].revealed = true;
    }
  }

  flipMemory(memory: Memory) {
    memory.flipped = !memory.flipped;
    // Force change detection
    setTimeout(() => {
      // This ensures the flip animation triggers
    }, 0);
  }

  playVideo(event: Event) {
    const video = event.target as HTMLVideoElement;
    if (video) {
      video.play().catch(() => {
        // Handle play error silently
      });
    }
  }

  pauseVideo(event: Event) {
    const video = event.target as HTMLVideoElement;
    if (video) {
      video.pause();
    }
  }

  goToGallery() {
    this.currentStep = 'gallery';
  }

  ngOnDestroy() {
    // Cleanup audio
    if (this.audioPlayer) {
      this.audioPlayer.pause();
      this.audioPlayer = null;
    }
  }
}
