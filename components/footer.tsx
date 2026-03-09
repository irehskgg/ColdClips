export function Footer() {
  return (
    <footer className="py-12 px-4 border-t border-border/30">
      <div className="max-w-6xl mx-auto">
        {/* Income Disclaimer */}
        <div className="text-center mb-8">
          <h4 className="text-xs font-semibold text-primary/80 uppercase tracking-wider mb-4">
            Income Disclaimer
          </h4>
          <div className="text-xs text-muted-foreground/70 max-w-4xl mx-auto space-y-3 leading-relaxed">
            <p>
              <strong>Important Notice Regarding Income Claims and Results:</strong> The information presented on this website, including but not limited to testimonials, examples, and income representations related to ColdClips, reflects specific experiences, circumstances, and abilities of selected individuals. There is no guarantee that you will experience similar results.
            </p>
            <p>
              <strong>Understanding Potential Results:</strong> The income statements and examples on this website are not intended to represent or guarantee that anyone will achieve the same or similar results. Each individual's success depends on various factors, including but not limited to:
            </p>
            <ul className="list-none space-y-1">
              <li>Your background, experience, and education</li>
              <li>Your commitment, dedication, and willingness to follow the program</li>
              <li>Market conditions and industry-specific circumstances</li>
              <li>The time and effort invested in implementing the strategies taught</li>
              <li>Your ability to take action on the information provided</li>
            </ul>
            <p>
              <strong>No Guarantee of Income:</strong> We do not guarantee or imply that you will generate any specific amount of income, or any income at all, by purchasing or participating in ColdClips. Any earnings or income statements, or examples of earnings or income, represent our understanding of average or typical earnings and should not be construed as a promise or guarantee of earnings.
            </p>
            <p>
              <strong>Success Is Not Typical:</strong> The success stories and testimonials presented are exceptional results and are not typical for the average user. These results should not be considered average or expected results. We cannot and do not guarantee your success or income level. Your results may vary significantly.
            </p>
            <p>
              <strong>Your Responsibility:</strong> You acknowledge that you are solely responsible for your results. You agree that ColdClips, its officers, directors, employees, and affiliates are not responsible for your success or failure in implementing the teachings and information offered. By using this website and/or purchasing ColdClips services, you acknowledge that you have read, understood, and agree to be bound by this disclaimer.
            </p>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="text-center pt-8 border-t border-border/20">
          <span className="text-xl font-bold tracking-tight text-foreground">[ColdClips]</span>
          <p className="text-xs text-muted-foreground mt-2">
            Last Updated: March 7, 2025
          </p>
          <p className="text-xs text-muted-foreground mt-1">
            © {new Date().getFullYear()} ColdClips. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
