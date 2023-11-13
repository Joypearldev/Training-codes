import { Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { BlogListingComponent } from './blog-listing/blog-listing.component';
import { ContactComponent } from './contact/contact.component';
import { DownloadComponent } from './download/download.component';
import { FaqsComponent } from './faqs/faqs.component';
import { PricingComponent } from './pricing/pricing.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { SinglePostComponent } from './single-post/single-post.component';
import { TermsComponent } from './terms/terms.component';


export const routes: Routes = [

  {path: '', component: HomepageComponent},
  {path: 'blog-listing', component: BlogListingComponent},
  {path: 'Comtact', component: ContactComponent},
  {path: 'download', component: DownloadComponent},
  {path: 'faqs', component: FaqsComponent},
  {path: 'pricing', component: PricingComponent},
  {path: 'reviews', component: ReviewsComponent},
  {path: 'single-post', component: SinglePostComponent},
  {path: 'terms', component: TermsComponent},
];
