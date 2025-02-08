import Image from 'next/image';
import { TeamMember } from '../components/TeamMember';
import { Timeline } from '../components/Timeline';

export default function AboutPage() {
  return (
    <main className="min-h-screen py-20 bg-gradient-to-b from-[#07141C] to-[#0A1A24]">
      <section className="container mx-auto px-4">
        <h1 className="text-4xl md:text-5xl text-center mb-12 text-[#01FFFF]">Σχετικά με Εμάς</h1>

        <div className="mb-16">
          <h2 className="text-3xl mb-6 text-[#01FFFF]">Περιγραφή Επιχείρησης</h2>
          <p className="text-lg mb-4 text-white">
            Είμαστε μια νεοσύστατη εταιρία η όποια αποτελείται από νέα άτομα και δραστηριοποιείται στον χώρο της διαφήμισης, ψάχνουμε συνεχώς νέους τρόπους και λύσεις για την ανάδειξη της επιχείρησής σας, του γραφείου ή της εταιρίας σας. Η adInfinity είναι ένα διαφημιστικό γραφείο που δραστηριοποιείται στον χώρο της διαφήμισης στην Άρτα και γενικότερα στην Ήπειρο, από τον Οκτώβριο του 2013. Ειδικευόμαστε στην δημιουργία λογότυπων, κάθε είδους μακετών αλλά και τον σχεδιασμό και ανάπτυξη προωθητικών ενεργειών καθώς και σε σύγχρονες εκτυπώσεις.
          </p>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl mb-6 text-[#01FFFF]">Η Ιστορία μας</h2>
          <p className="text-lg mb-4 text-white">
            Ιδρύθηκε το 2010, η εταιρεία μας ξεκίνησε με ένα όραμα: να φέρει επανάσταση στον κόσμο του ψηφιακού μάρκετινγκ στην Ελλάδα. Από τότε, έχουμε αναπτυχθεί σε μια ομάδα παθιασμένων επαγγελματιών που προσφέρουν καινοτόμες λύσεις μάρκετινγκ σε επιχειρήσεις κάθε μεγέθους.
          </p>
          <p className="text-lg text-white">
            Η δέσμευσή μας στην αριστεία και η συνεχής προσαρμογή στις εξελισσόμενες τάσεις του ψηφιακού μάρκετινγκ μας έχουν καθιερώσει ως ηγέτες στον κλάδο μας.
          </p>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl mb-6 text-[#01FFFF]">Η Ομάδα μας</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-items-center">
            <TeamMember 
              name="Μάνος Κωσμας"
              role="Διευθύνων Σύμβουλος"
              imageSrc="https://i.imgur.com/RvCXgPE.jpeg"
            />
            <TeamMember 
              name="Κωνσταντινος Μπλαβακης"
              role="Web Developer"
              imageSrc="https://i.imgur.com/rDfUjRC.jpeg"
            />
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl mb-6 text-[#01FFFF]">Η Πορεία μας</h2>
          <Timeline />
        </div>

        <div>
          <h2 className="text-3xl mb-6 text-[#01FFFF]">Το Γραφείο μας</h2>
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
          <p className="mt-4 text-lg text-white">
            Το σύγχρονο γραφείο μας στο κέντρο της Αθήνας είναι σχεδιασμένο για να εμπνέει δημιουργικότητα και συνεργασία. Είναι ο χώρος όπου οι ιδέες μας παίρνουν ζωή και μετατρέπονται σε επιτυχημένες καμπάνιες για τους πελάτες μας.
          </p>
        </div>
      </section>
    </main>
  );
}
