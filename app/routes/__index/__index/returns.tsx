export default function ReturnsPage() {
  return (
    <div className="min-h-[80vh]">
      <section id="hero" className="bg-gray-200">
        <div className="container max-w-screen-lg justify-center flex items-center py-32 -mt-20">
          <h1 className="text-6xl md:text-8xl font-black text-slate-800 tracking-tighter">
            🚚 Return Policy
          </h1>
        </div>
      </section>
      <section id="content" className="container -mt-20 pb-20">
        <div className="mx-auto prose prose-slate lg:prose-xl bg-white p-6 md:p-12 rounded-lg">
          <h2>What's your return policy?</h2>
          <p>
            We don't offer returns and exchanges, but if there's something wrong
            with your order, please let us know by contacting us at{" "}
            <a href="mailto:hey@designedwithai.com">hey@designedwithai.com</a>!
          </p>
          <h2>Do you offer refunds?</h2>
          <p>
            Refunds are only offered to customers that receive the wrong items
            or damaged items. If any of these apply, please contact us at{" "}
            <a href="mailto:hey@designedwithai.com">hey@designedwithai.com</a>{" "}
            with photos of wrong/damaged items and we'll sort that out for you.
          </p>
          <h2>Can I exchange an item for a different size/color?</h2>
          <p>
            At this time, we don't offer exchanges. If you're unsure which size
            would fit better, check out our sizing charts—we have one for every
            item listed on our store, in the product description section. Though
            rare, it's possible that an item you ordered was mislabelled. If
            that's the case, please let us know at{" "}
            <a href="mailto:hey@designedwithai.com">hey@designedwithai.com</a>{" "}
            within a week after receiving your order. Include your order number
            and photos of the mislabeled item, and we'll send you a new one, or
            issue a refund!
          </p>

          <h2>Return Policy</h2>
          <p>
            Any claims for misprinted/damaged/defective items must be submitted
            within 30 days after the product has been received. For packages
            lost in transit, all claims must be submitted no later than 30 days
            after the estimated delivery date. Claims deemed an error on our
            part are covered at our expense.
          </p>
          <p>
            The return address is set by default to the Printful facility. When
            we receive a returned shipment, an automated email notification will
            be sent to you. Unclaimed returns get donated to charity after 30
            days. If Printful's facility isn't used as the return address, you
            would become liable for any returned shipments you receive.
          </p>
          <p>
            Otherwise stated here, Printful's return policy will apply. Read it{" "}
            <a
              href="https://www.printful.com/policies/returns"
              target="_blank"
              rel="noreferrer"
            >
              here
            </a>
            .
          </p>
        </div>
      </section>
    </div>
  );
}
