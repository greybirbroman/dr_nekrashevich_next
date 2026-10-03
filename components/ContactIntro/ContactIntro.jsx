const ContactIntro = ({ title, subtitle }) => (
  <div className="w-full max-w-2xl">
    <h2 className="font-display text-h2-sm text-white md:text-h2-md lg:text-h2-lg">
      {title}
    </h2>
    <p className="mt-3 max-w-xl text-sm-base text-white/75 md:text-md-base">
      {subtitle}
    </p>
  </div>
)

export default ContactIntro
