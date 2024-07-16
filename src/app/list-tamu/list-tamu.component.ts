import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';

interface GuestResponse {
  data: Guest[];
}

interface Guest {
  nama: string;
}

@Component({
  selector: 'app-list-tamu',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './list-tamu.component.html',
  styleUrl: './list-tamu.component.css'
})
export class ListTamuComponent implements OnInit {
  guests: Guest[] = [];
  loading = false;
  error: string | null = null;

  constructor(
    private http: HttpClient,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.fetchGuests();
  }

  fetchGuests() {
    this.loading = true;
    this.error = null;
    this.http
      .get<GuestResponse>('https://script.google.com/macros/s/AKfycby0ljAjceQAhLO2RnGm_2U_Fv4F-eLx055Xfp_3Q7M0vgvpREZaTuvyEzZlxRmGWL6rsQ/exec')
      .subscribe({
        next: (response) => {
          this.guests = response.data;
          this.loading = false;
          this.validateCurrentGuest();
        },
        error: (err) => {
          this.error = 'Terjadi kesalahan saat memuat data.';
          this.loading = false;
          console.error('Error fetching guests:', err);
        },
      });
  }

  validateCurrentGuest() {
    const guestName = this.route.parent?.snapshot.paramMap.get('guestName');
    if (guestName) {
      const isValidGuest = this.guests.some(guest => guest.nama.toLowerCase() === decodeURIComponent(guestName).toLowerCase());
      if (!isValidGuest) {
        this.router.navigate(['/404']);
      }
    }
  }

  navigateToGuestPage(guestName: string) {
    this.router.navigate([`/${encodeURIComponent(guestName)}`]);
  }
}