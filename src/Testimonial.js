import Testimonial_Cards from "./components/Testimonial_Components/Testimonial_Cards";
import Testimonial_CTA from "./components/Testimonial_Components/Testimonial_CTA";
import Testimonial_Hero from "./components/Testimonial_Components/Testimonial_hero";
import Testimonial_Intro from "./components/Testimonial_Components/Testimonial_Intro";
import { testimonials_review } from "./utils/Testimonial_data";


export default function Testimonials(){
    return(
        <>
            <Testimonial_Hero></Testimonial_Hero>
            <Testimonial_Intro></Testimonial_Intro>
            <Testimonial_Cards reviews={testimonials_review}></Testimonial_Cards>
            <Testimonial_CTA></Testimonial_CTA>
        </>
    )
}