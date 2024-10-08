import { Component,AfterViewInit, Renderer2, effect, signal, ViewChild, ElementRef, OnInit, ViewChildren, QueryList } from '@angular/core';
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
  styleUrls: ['./main-page.component.css','./aspect-ratios.css', './backgrounds.css', './typography.css']
})
export class MainPageComponent implements AfterViewInit {
  constructor(private renderer: Renderer2) {this.startCountdown();}

  // ----------------------------------------

  animations = ['fadeInUp', 'fadeInLeft', 'fadeInRight', 'zoomIn', 'bounceIn'];

  @ViewChildren('animatedItem') animatedItems!: QueryList<ElementRef>;

  ngAfterViewInit() {
    this.initScrollAnimation();
  }

  private initScrollAnimation() {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting && !entry.target.classList.contains('animated')) {
            this.renderer.setStyle(entry.target, 'opacity', '1');
            this.renderer.addClass(entry.target, 'animate');
            this.renderer.addClass(entry.target, this.animations[index % this.animations.length]);
            this.renderer.addClass(entry.target, 'animated'); // Menandai bahwa elemen telah dianimasikan
            
            // Hapus kelas animasi setelah animasi selesai
            setTimeout(() => {
              this.renderer.removeClass(entry.target, 'animate');
              this.animations.forEach(anim => this.renderer.removeClass(entry.target, anim));
            }, 6000); // Sesuaikan dengan durasi animasi terlama
          }
        });
      },
      { threshold: 0.25 }
    );

    this.animatedItems.forEach(item => observer.observe(item.nativeElement));
  }

// -----------------

  preWeddingImage = 'https://lh3.googleusercontent.com/drive-viewer/AKGpihZmYLunFtOcEGka5KWsa0Td0eca88VtxRqCFgTSpCkYN-W2AXkzyHsZ9bVOoZtBXWFnDB5gH16YPLvcy35Vhd-ZcL5hum-Wxx4=s1600-rw-v1';
  photos = [
    { url: 'https://lh3.googleusercontent.com/drive-viewer/AKGpihZ86Eg-8iTS80zxGweIZ4eAf5AsymObxTwM1Wsmf-2ABoVcQ2mjCFN4GtNU66YyafRM-PY0Ke_jDhdr9CpJq39rlg3OsHmFpS0=s1600-rw-v1', title: 'Photo 1' },
    { url: 'https://lh3.googleusercontent.com/drive-viewer/AKGpihb3y1iwVT5yGGmwhdA28Xo7FHA89e0juosjXhFwrdUX3Hz5XcLPTkbSe-ZSvyaDDEtOoThpMMlNos3zGbVR_8_sRxXdo0cQbw=s1600-rw-v1', title: 'Photo 2' },
    { url: 'https://lh3.googleusercontent.com/drive-viewer/AKGpihYff7mKOKVD14gVQqIPB_aiJm6kVDfRsFY_jQiavepFxk78Zj9S15fvxJDujW0qiP6qf6YHJjYaPjOfWH22MtEVLm8fl8qLh5U=s1600-rw-v1', title: 'Photo 3' },
    { url: 'https://lh3.googleusercontent.com/drive-viewer/AKGpihaA0Riq-Mo1Tj5rMoDyIHXn1YoBI2moUd6GpKB23k0qMDpZXNtHBSUsxnfeThs69UDtJdcwaX7piTC8gNlCkk1ZsuotTlOUxVE=s1600-rw-v1', title: 'Photo 4' },
    { url: 'https://lh3.googleusercontent.com/drive-viewer/AKGpihZEU7nJ10EPm1bwnT6G1emx9LRUpRzJCJaJggcp0swBsQl1EeSAKfu2oisa-ed_t_f8UoiVozRFlDmt2pPL4F9byqPEu1mR-RU=s1600-rw-v1', title: 'Photo 5' },
    { url: 'https://lh3.googleusercontent.com/drive-viewer/AKGpihapD0OnQd8OWsu_c_W9ZZ_ZYfpFJa7EKrmszSkYGKhIz7dGFyhvEiFTvs0xsfY7VyINDf40Tb5YbUoV6UFKf0w6GeFccnfWxvo=s1600-rw-v1', title: 'Photo 6' },
    { url: 'https://lh3.googleusercontent.com/drive-viewer/AKGpihY8CqQAw23CEPn8zjrmnlHhBsJGnEkxqwSJ5wBqfOt0gvXj66mZ7rOqlOBHRlyEXBzOJtfaOAcWobDPPOagKqToGa9zWcGrWw=s1600-rw-v1', title: 'Photo 7' },
    { url: 'https://lh3.googleusercontent.com/drive-viewer/AKGpihZkUhiO2JukV4FwFI0NurQBSpEfG5iXxzs1QuCZ-JpwPwfS5dSb5lEk22Tc7YglBNDOGdtzg3rrMjz-WjaS6iY3jLMsKyh4Fpg=s1600-rw-v1', title: 'Photo 8' },
    { url: 'https://lh3.googleusercontent.com/drive-viewer/AKGpihaK8YQbuld7HREnbmt85kDLK549GzAF1p65nXzRefec7DnHh7sWJV6L2ze_k_vDTGFKRR9kDYk5KilM6ybRhDI-EP6nXsIsdqk=s1600-rw-v1', title: 'Photo 9' },
    { url: 'https://lh3.googleusercontent.com/drive-viewer/AKGpihadqjqaFhiyFJHyFKD8ONuCVFb5liafMfoecI3cfgi92O_6wmghuxWw80nG3pd8z0bpAY1mSyq4I5bs_wnp46otSK1moBR7OO4=s1600-rw-v1', title: 'Photo 10' },
    { url: 'https://lh3.googleusercontent.com/drive-viewer/AKGpihZ0Xl_mdrUzCEgwi025nj2zYUZKieu8amd0cxaB7YcuXG59cTd9IQ6tYiUxXbdNho5252uuifyIjanu6m9I9SpxEXfrbhvlpm0=s1600-rw-v1', title: 'Photo 11' },
    { url: 'https://lh3.googleusercontent.com/drive-viewer/AKGpihZhJvEYW-I9_BCUFQno-kfZa546PlZQS5el3x_PxfT0PhBCTLSt4Ft_icacUxuUhVTYVgSmf7V8HPKL9QOx16YaxKiu4V6u_oc=s1600-rw-v1', title: 'Photo 12' },
    { url: 'https://lh3.googleusercontent.com/drive-viewer/AKGpihbY9K8WoBSFHP3mJENSiaZw2WC7YovuBZ9GXsFabt4KKL0e1Be4jLfLaOBFD0b8uqt80G4YF29If0Iiebys4KeCByze4O0zHV0=s1600-rw-v1', title: 'Photo 13' },
    { url: 'https://lh3.googleusercontent.com/drive-viewer/AKGpihaiKCinP-SwQjOL7nac4m2I5NVTLzbXkfsvXGJtzuzdjK90YJE8Xhut0HVBpmucNCAUMJFBWXxyOqc_vq5U3ShJtbsVjf57THU=s1600-rw-v1', title: 'Photo 14' },
    { url: 'https://lh3.googleusercontent.com/drive-viewer/AKGpihaMLZRiu9hA-dgdqY-oijM8BbijWAoZAeMgsJV5zfrx9-lawbrK7F4CRVbWc1_-N7HWfi72XuFZj5PF6Nhsd16pQnxXjiJh2dU=s1600-rw-v1', title: 'Photo 15' },
  ];

  @ViewChild('guestList') guestListComponent!: GuestListComponent;

  refreshGuestList() {
    if (this.guestListComponent) {
      this.guestListComponent.loadGuests();
    }
  }


  showModal = false;
  currentIndex = 0;

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