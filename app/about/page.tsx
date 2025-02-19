import Image from 'next/image';
import { TeamMember } from '../components/TeamMember';
import { Timeline } from '../components/Timeline';

export default function AboutPage() {
  return (
    <main className="min-h-screen py-20 bg-gradient-to-b from-[#07141C] to-[#0A1A24]">
      <section className="container mx-auto px-4">
        <h1 className="text-3xl sm:text-4xl md:text-5xl text-center mb-12 text-[#01FFFF]">Σχετικά με Εμάς</h1>

        <div className="mb-16">
          <h2 className="text-2xl sm:text-3xl mb-6 text-[#01FFFF]">Περιγραφή Επιχείρησης</h2>
          <p className="text-base sm:text-lg mb-4 text-white">
            Είμαστε μια νεοσύστατη εταιρία η όποια αποτελείται από νέα άτομα και δραστηριοποιείται στον χώρο της διαφήμισης, ψάχνουμε συνεχώς νέους τρόπους και λύσεις για την ανάδειξη της επιχείρησής σας, του γραφείου ή της εταιρίας σας. Η adInfinity είναι ένα διαφημιστικό γραφείο που δραστηριοποιείται στον χώρο της διαφήμισης στην Άρτα και γενικότερα στην Ήπειρο, από τον Οκτώβριο του 2013. Ειδικευόμαστε στην δημιουργία λογότυπων, κάθε είδους μακετών αλλά και τον σχεδιασμό και ανάπτυξη προωθητικών ενεργειών καθώς και σε σύγχρονες εκτυπώσεις.
          </p>
        </div>

        <div className="mb-16">
          <h2 className="text-2xl sm:text-3xl mb-6 text-[#01FFFF]">Η Ιστορία μας</h2>
          <p className="text-base sm:text-lg mb-4 text-white">
            Η εταιρεία μας ιδρύθηκε το 2013 με στόχο να προσφέρει πρακτικές και αποτελεσματικές λύσεις μάρκετινγκ. Από τότε, βοηθάμε επιχειρήσεις να αναπτύξουν την παρουσία τους, προσαρμοζόμενοι στις εξελίξεις της αγοράς.
          </p>
        </div>

        <div className="mb-16">
          <h2 className="text-2xl sm:text-3xl mb-6 text-[#01FFFF]">Η Ομάδα μας</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 justify-items-center">
            <TeamMember 
              name="Μάνος Κωσμάς"
              role="Διευθύνων Σύμβουλος"
              imageSrc="https://i.imgur.com/RvCXgPE.jpeg"
            />
            <TeamMember 
              name="Κωνσταντίνος Μπλαβάκης"
              role="Web Developer"
              imageSrc="https://i.postimg.cc/FHH2qc1B/viber-image-2025-02-18-19-25-40-199.jpg"
            />
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-2xl sm:text-3xl mb-6 text-[#01FFFF]">Η Πορεία μας</h2>
          <Timeline />
        </div>

        <div>
          <h2 className="text-2xl sm:text-3xl mb-6 text-[#01FFFF]">Το Γραφείο μας</h2>
          <div className="relative w-full max-w-4xl mx-auto h-auto aspect-w-1311 aspect-h-735 rounded-lg overflow-hidden">
            <Image
              src="https://i.imgur.com/ERErjTs.png"
              alt="Το γραφείο μας"
              layout="responsive"
              width={1311}
              height={735}
              objectFit="cover"
            />
          </div>
          <p className="mt-4 text-base sm:text-lg text-white">
            Το σύγχρονο γραφείο μας στο κέντρο της Άρτας είναι σχεδιασμένο για να εμπνέει δημιουργικότητα και συνεργασία. Είναι ο χώρος όπου οι ιδέες μας παίρνουν ζωή και μετατρέπονται σε επιτυχημένες καμπάνιες για τους πελάτες μας.
          </p>
        </div>
      </section>
    </main>
  );
}
