import { Component, OnInit } from '@angular/core';
import { data } from '../personalData';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
    aboutMeDetails: boolean = false;

    workingExperiences: any;
    projects: any;
    leaderships: any;
    activities: any;
    skills: any;

    email: string = 'catloke963@gmail.com';
    message: string = '';

    constructor() { }

    ngOnInit(): void {
        this.workingExperiences = data.works;
        this.projects = data.projects;
        this.leaderships = data.leadership;
        this.activities = data.activities;
        this.skills = data.skills;
    }

    navigateToLink(link: string): void {
        window.location.href = link;
    }

    scrollToSection(sectionId: string): void {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    }

    onSubmit() {
        if (this.isValidEmail(this.email) && this.message.trim() !== '') {
            const mailtoLink = `mailto:${this.email}?subject=Contact%20From%20Portfolio&body=${encodeURIComponent(this.message)}`;

            window.location.href = mailtoLink;

            this.message = '';
        } else {
            alert('Please fill out the form correctly.');
        }
    }

    isValidEmail(email: string): boolean {
        const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return emailPattern.test(email);
    }
}
