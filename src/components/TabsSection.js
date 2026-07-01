import { useState } from "react";

const cards = [
  {
    image:
      "https://images.unsplash.com/photo-1522869635100-9f4c5e86aa37?auto=format&fit=crop&w=900&q=80",
    title: "On your TV",
    description:
      "Smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&w=900&q=80",
    title: "Download and go",
    description:
      "Save your favorites easily and always have something to watch offline.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1593305841991-05c297ba4575?auto=format&fit=crop&w=900&q=80",
    title: "Every screen",
    description:
      "Watch instantly on phones, tablets, laptops, and living room displays.",
  },
];

const plans = [
  { name: "Basic", monthly: "$8.99", quality: "Good", resolution: "720p", screens: "1" },
  { name: "Standard", monthly: "$13.99", quality: "Better", resolution: "1080p", screens: "2" },
  { name: "Premium", monthly: "$17.99", quality: "Best", resolution: "4K + HDR", screens: "4" },
];

function CancelAnytime() {
  return (
    <div className="tab-panel split-panel reveal">
      <div className="panel-copy">
        <h2>Cancel whenever you want. No contracts. No friction.</h2>
        <p>
          Enjoy premium streaming with a flexible plan that moves at your pace.
          Start watching today and leave anytime from your account settings.
        </p>
        <button className="btn btn-red btn-large ripple">WATCH FREE FOR 30 DAYS</button>
      </div>
      <div className="device-frame">
        <img
          src="https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?auto=format&fit=crop&w=1000&q=80"
          alt="Streaming series on a television"
        />
      </div>
    </div>
  );
}

function WatchAnywhere() {
  return (
    <div className="tab-panel cards-grid reveal">
      {cards.map((card) => (
        <article className="watch-card" key={card.title}>
          <img src={card.image} alt="" />
          <div>
            <h3>{card.title}</h3>
            <p>{card.description}</p>
          </div>
        </article>
      ))}
    </div>
  );
}

function Pricing() {
  return (
    <div className="tab-panel pricing-panel reveal" id="pricing">
      <div className="pricing-head">
        <h2>Choose the plan that fits your screen life.</h2>
        <button className="btn btn-red btn-large ripple">WATCH FREE FOR 30 DAYS</button>
      </div>
      <div className="table-wrap">
        <table>
          <thead>
            <tr>
              <th>Plan</th>
              {plans.map((plan) => (
                <th key={plan.name}>{plan.name}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Monthly price</td>
              {plans.map((plan) => (
                <td key={plan.name}>{plan.monthly}</td>
              ))}
            </tr>
            <tr>
              <td>Video quality</td>
              {plans.map((plan) => (
                <td key={plan.name}>{plan.quality}</td>
              ))}
            </tr>
            <tr>
              <td>Resolution</td>
              {plans.map((plan) => (
                <td key={plan.name}>{plan.resolution}</td>
              ))}
            </tr>
            <tr>
              <td>Screens at once</td>
              {plans.map((plan) => (
                <td key={plan.name}>{plan.screens}</td>
              ))}
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

function TabsSection() {
  const [activeTab, setActiveTab] = useState("cancel");

  const tabs = [
    { id: "cancel", label: "Cancel at any time", content: <CancelAnytime /> },
    { id: "watch", label: "Watch anywhere", content: <WatchAnywhere /> },
    { id: "price", label: "Pick your price", content: <Pricing /> },
  ];

  return (
    <section className="tabs-section" id="tabs">
      <div className="tabs-bar" role="tablist" aria-label="Streaming benefits">
        {tabs.map((tab) => (
          <button
            className={`tab-button ${activeTab === tab.id ? "active" : ""}`}
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            role="tab"
            aria-selected={activeTab === tab.id}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className="tabs-content">
        {tabs.find((tab) => tab.id === activeTab).content}
      </div>
    </section>
  );
}

export default TabsSection;
