import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common'

import { GalleryCard1 } from './gallery-card1/gallery-card1.component'
import { GalleryCard11 } from './gallery-card11/gallery-card11.component'
import { FeatureCard } from './feature-card/feature-card.component'
import { GalleryCard12 } from './gallery-card12/gallery-card12.component'
import { GalleryCard2 } from './gallery-card2/gallery-card2.component'
import { Question } from './question/question.component'
import { ImageSlider } from './image-slider/image-slider.component'
import { GalleryCard3 } from './gallery-card3/gallery-card3.component'

@NgModule({
  declarations: [
    GalleryCard1,
    GalleryCard11,
    FeatureCard,
    GalleryCard12,
    GalleryCard2,
    Question,
    ImageSlider,
    GalleryCard3,
  ],
  imports: [CommonModule, RouterModule],
  exports: [
    GalleryCard1,
    GalleryCard11,
    FeatureCard,
    GalleryCard12,
    GalleryCard2,
    Question,
    ImageSlider,
    GalleryCard3,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ComponentsModule {}
