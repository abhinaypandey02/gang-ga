export default function getPlanName(days: number) {
    switch (days) {
        case 1:
            return "Daily";
        case 15:
            return "Fortnite";
        case 30:
            return "Monthly";
        case 90:
            return "Quarterly";
        case 180:
            return "Half Yearly";
        case 365:
            return "Annually";
    }
    return "Special Plan";
}