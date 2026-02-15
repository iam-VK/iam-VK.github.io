export const SITE_CONFIG = {
    name: 'Vishwa',
    fullName: 'Vishwa Kumar',

    // Social & contact links
    github: 'https://github.com/iam-VK',
    linkedin: 'https://www.linkedin.com/in/vishwakumar-s/',
    email: 'vishwakumar.petit@gmail.com',
    phone: '+919488321830',
    phoneDisplay: '+91 9488321830',
    resumeUrl: 'https://drive.google.com/file/d/1qS3SsKHwuwBB1gq-6K-8rYeKDrRcu2-G/view?usp=sharing',

    // Derived helpers
    get mailtoLink() {
        return `mailto:${this.email}`
    },
    get telLink() {
        return `tel:${this.phone}`
    },
}
