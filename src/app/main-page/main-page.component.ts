import { Component,AfterViewInit, Renderer2, effect, signal, ViewChild } from '@angular/core';
import { MusikComponent } from '../musik/musik.component';
import { FooterComponent } from "../footer/footer.component";
import { GuestListComponent } from "../guest-list/guest-list.component";
import { GuestFormComponent } from "../guest-form/guest-form.component";
import { CommonModule } from '@angular/common';
import { WeddingGiftComponent } from "../wedding-gift/wedding-gift.component";

@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [MusikComponent, FooterComponent, GuestListComponent, GuestFormComponent, CommonModule, WeddingGiftComponent],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.css'
})
export class MainPageComponent {
  preWeddingImage = 'https://lh3.googleusercontent.com/drive-viewer/AKGpihZmYLunFtOcEGka5KWsa0Td0eca88VtxRqCFgTSpCkYN-W2AXkzyHsZ9bVOoZtBXWFnDB5gH16YPLvcy35Vhd-ZcL5hum-Wxx4=s1600-rw-v1';
  photos = [
    { url: 'https://lh3.googleusercontent.com/drive-viewer/AKGpihZq0TS7qutksG3skNjEdlW2wUXXdbnNa2aNrxJhconC2EIEYibg_nmpoo-ESWzgqpFH6ERtFXgmNC3jpuwQviKYGjcKj5jOsw=s1600-rw-v1', title: 'Photo 1' },
    { url: 'https://lh3.googleusercontent.com/drive-viewer/AKGpihZq0TS7qutksG3skNjEdlW2wUXXdbnNa2aNrxJhconC2EIEYibg_nmpoo-ESWzgqpFH6ERtFXgmNC3jpuwQviKYGjcKj5jOsw=s1600-rw-v1', title: 'Photo 2' },
    { url: 'https://lh3.googleusercontent.com/drive-viewer/AKGpihZq0TS7qutksG3skNjEdlW2wUXXdbnNa2aNrxJhconC2EIEYibg_nmpoo-ESWzgqpFH6ERtFXgmNC3jpuwQviKYGjcKj5jOsw=s1600-rw-v1', title: 'Photo 3' },
    { url: 'https://lh3.googleusercontent.com/drive-viewer/AKGpihZq0TS7qutksG3skNjEdlW2wUXXdbnNa2aNrxJhconC2EIEYibg_nmpoo-ESWzgqpFH6ERtFXgmNC3jpuwQviKYGjcKj5jOsw=s1600-rw-v1', title: 'Photo 4' },
    { url: 'https://lh3.googleusercontent.com/drive-viewer/AKGpihZq0TS7qutksG3skNjEdlW2wUXXdbnNa2aNrxJhconC2EIEYibg_nmpoo-ESWzgqpFH6ERtFXgmNC3jpuwQviKYGjcKj5jOsw=s1600-rw-v1', title: 'Photo 5' },
    { url: 'https://lh3.googleusercontent.com/drive-viewer/AKGpihZq0TS7qutksG3skNjEdlW2wUXXdbnNa2aNrxJhconC2EIEYibg_nmpoo-ESWzgqpFH6ERtFXgmNC3jpuwQviKYGjcKj5jOsw=s1600-rw-v1', title: 'Photo 6' },
    { url: 'https://lh3.googleusercontent.com/drive-viewer/AKGpihZq0TS7qutksG3skNjEdlW2wUXXdbnNa2aNrxJhconC2EIEYibg_nmpoo-ESWzgqpFH6ERtFXgmNC3jpuwQviKYGjcKj5jOsw=s1600-rw-v1', title: 'Photo 7' },
    { url: 'https://lh3.googleusercontent.com/drive-viewer/AKGpihZq0TS7qutksG3skNjEdlW2wUXXdbnNa2aNrxJhconC2EIEYibg_nmpoo-ESWzgqpFH6ERtFXgmNC3jpuwQviKYGjcKj5jOsw=s1600-rw-v1', title: 'Photo 8' },
    { url: 'https://lh3.googleusercontent.com/drive-viewer/AKGpihZq0TS7qutksG3skNjEdlW2wUXXdbnNa2aNrxJhconC2EIEYibg_nmpoo-ESWzgqpFH6ERtFXgmNC3jpuwQviKYGjcKj5jOsw=s1600-rw-v1', title: 'Photo 1' },
    { url: 'https://lh3.googleusercontent.com/drive-viewer/AKGpihZq0TS7qutksG3skNjEdlW2wUXXdbnNa2aNrxJhconC2EIEYibg_nmpoo-ESWzgqpFH6ERtFXgmNC3jpuwQviKYGjcKj5jOsw=s1600-rw-v1', title: 'Photo 2' },
    { url: 'https://lh3.googleusercontent.com/drive-viewer/AKGpihZq0TS7qutksG3skNjEdlW2wUXXdbnNa2aNrxJhconC2EIEYibg_nmpoo-ESWzgqpFH6ERtFXgmNC3jpuwQviKYGjcKj5jOsw=s1600-rw-v1', title: 'Photo 3' },
    { url: 'https://lh3.googleusercontent.com/drive-viewer/AKGpihZq0TS7qutksG3skNjEdlW2wUXXdbnNa2aNrxJhconC2EIEYibg_nmpoo-ESWzgqpFH6ERtFXgmNC3jpuwQviKYGjcKj5jOsw=s1600-rw-v1', title: 'Photo 4' },
    { url: 'https://lh3.googleusercontent.com/drive-viewer/AKGpihZq0TS7qutksG3skNjEdlW2wUXXdbnNa2aNrxJhconC2EIEYibg_nmpoo-ESWzgqpFH6ERtFXgmNC3jpuwQviKYGjcKj5jOsw=s1600-rw-v1', title: 'Photo 5' },
    { url: 'https://lh3.googleusercontent.com/drive-viewer/AKGpihZq0TS7qutksG3skNjEdlW2wUXXdbnNa2aNrxJhconC2EIEYibg_nmpoo-ESWzgqpFH6ERtFXgmNC3jpuwQviKYGjcKj5jOsw=s1600-rw-v1', title: 'Photo 6' },
    { url: 'https://lh3.googleusercontent.com/drive-viewer/AKGpihZq0TS7qutksG3skNjEdlW2wUXXdbnNa2aNrxJhconC2EIEYibg_nmpoo-ESWzgqpFH6ERtFXgmNC3jpuwQviKYGjcKj5jOsw=s1600-rw-v1', title: 'Photo 7' },
  ];

  @ViewChild('guestList') guestListComponent!: GuestListComponent;

  refreshGuestList() {
    if (this.guestListComponent) {
      this.guestListComponent.loadGuests();
    }
  }


  showModal = false;
  currentIndex = 0;

  constructor(private renderer: Renderer2) {this.startCountdown();}

  openModal(index: number) {
    this.currentIndex = index;
    this.showModal = true;
    this.disableScroll();
  }

  closeModal() {
    this.showModal = false;
    this.enableScroll();
  }

  prevPhoto() {
    this.currentIndex = (this.currentIndex - 1 + this.photos.length) % this.photos.length;
  }

  nextPhoto() {
    this.currentIndex = (this.currentIndex + 1) % this.photos.length;
  }

  private disableScroll() {
    this.renderer.addClass(document.body, 'overflow-hidden');
  }

  private enableScroll() {
    this.renderer.removeClass(document.body, 'overflow-hidden');
  }

  private targetDate = new Date('2024-08-08T08:00:00+07:00');
  
  countdown = signal({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  private startCountdown() {
    effect(() => {
      const intervalId = setInterval(() => this.updateCountdown(), 1000);
      return () => clearInterval(intervalId);  // Cleanup function
    });
  }

  private updateCountdown() {
    const now = new Date();
    const diff = this.targetDate.getTime() - now.getTime();

    if (diff > 0) {
      this.countdown.set({
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((diff % (1000 * 60)) / 1000)
      });
    } else {
      this.countdown.set({ days: 0, hours: 0, minutes: 0, seconds: 0 });
    }
  }
}
