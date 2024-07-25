import { AfterViewInit, Component, OnInit, OnDestroy } from '@angular/core';
import { fromEvent, Subscription } from 'rxjs';

@Component({
  selector: 'app-musik',
  standalone: true,
  templateUrl: './musik.component.html',
  styleUrls: ['./musik.component.css']
})
export class MusikComponent implements OnInit, AfterViewInit, OnDestroy {
  audioPlayer?: HTMLAudioElement;
  isPlaying: boolean = false;
  audioSource = '/assets/ph.mp3'; // Ganti dengan path file audio Anda
  private visibilitySubscription?: Subscription;

  constructor() {}

  ngOnInit(): void {
    if (typeof Audio !== 'undefined') {
      this.audioPlayer = new Audio(this.audioSource);
      this.audioPlayer.loop = true;  // Membuat audio berulang

      const shouldPlayMusicStr = localStorage.getItem('shouldPlayMusic');
      this.isPlaying = shouldPlayMusicStr === 'true';

      if (this.isPlaying) {
        this.playMusic();
      }

      // Menangani perubahan visibilitas halaman
      if (typeof document !== 'undefined') {
        this.visibilitySubscription = fromEvent(document, 'visibilitychange').subscribe(() => {
          if (document.hidden) {
            this.pauseMusic();
          } else if (this.isPlaying) {
            this.playMusic();
          }
        });
      }
    }
  }

  ngAfterViewInit(): void {
    if (this.audioPlayer) {
      this.audioPlayer.onended = () => {
        if (this.isPlaying) {
          this.playMusic();
        }
      };
    }
  }

  ngOnDestroy(): void {
    this.pauseMusic();
    if (this.audioPlayer) {
      this.audioPlayer.src = '';
    }
    this.visibilitySubscription?.unsubscribe();
  }

  togglePlayPause() {
    this.isPlaying = !this.isPlaying;
    localStorage.setItem('shouldPlayMusic', this.isPlaying.toString());
    
    if (this.isPlaying) {
      this.playMusic();
    } else {
      this.pauseMusic();
    }
  }

  playMusic() {
    if (this.audioPlayer) {
      this.audioPlayer.play().catch(error => console.error('Error playing audio:', error));
    }
  }

  pauseMusic() {
    if (this.audioPlayer) {
      this.audioPlayer.pause();
    }
  }
}