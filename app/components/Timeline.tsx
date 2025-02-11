export function Timeline() {
    const milestones = [
      { year: 2013, event: 'Ίδρυση της εταιρείας στην Άρτα' },
      { year: 2014, event: 'Επέκταση δραστηριοτήτων σε όλη την Άρτα' },
      { year: 2016, event: 'Λανσάρισμα του τμήματος ψηφιακού μάρκετινγκ' },
      { year: 2018, event: 'Βράβευση για την Καλύτερη Διαφημιστική Καμπάνια στην Ήπειρο' },
      { year: 2020, event: 'Επέτειος 7 ετών και δημιουργία τμήματος σχεδίασης προϊόντων' },
      { year: 2023, event: 'Συνεργασία με μεγάλες εταιρείες σε όλη την Ελλάδα' },
    ];

    return (
      <div className="relative">
        {milestones.map((milestone, index) => (
          <div key={index} className="mb-8 flex items-center">
            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#01FFFF] flex items-center justify-center text-[#07141C] font-bold">
              {milestone.year}
            </div>
            <div className="ml-4">
              <h3 className="text-xl font-bold">{milestone.event}</h3>
            </div>
          </div>
        ))}
        <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-[#01FFFF]" />
      </div>
    );
}
