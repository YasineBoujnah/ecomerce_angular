import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-not-found',
  standalone: true,
  imports: [RouterLink],
  template: `
    <div class="error-container d-flex align-items-center justify-content-center vh-100 bg-light">
      <div class="text-center">
        <h1 class="display-1 fw-bold text-primary animate-bounce">404</h1>
        <p class="fs-3"> <span class="text-danger">Opps!</span> Page not found.</p>
        <p class="lead">
          The page you’re looking for doesn’t exist.
        </p>
        <a routerLink="/products" class="btn btn-primary shadow-lg border-0 px-5 py-3 rounded-pill fw-bold transition-scale">
          Back to Home
        </a>
      </div>
    </div>
  `,
  styles: [`
    .animate-bounce {
      animation: bounce 2s infinite;
    }
    @keyframes bounce {
      0%, 20%, 50%, 80%, 100% {transform: translateY(0);}
      40% {transform: translateY(-30px);}
      60% {transform: translateY(-15px);}
    }
    .transition-scale:hover {
      transform: scale(1.05);
      transition: all 0.3s ease-in-out;
    }
    .error-container {
      background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
    }
  `]
})
export class NotFoundComponent { }
