import React from "react";

const About = () => {
  const sections = [
    {
      section: 'Mission & Values',
      content: 'A clear, concise statement on why your news organization exists. What are your core journalistic values (e.g., accuracy, impartiality, holding power accountable)?',
      importance: 'This defines your purpose and commitment to your audience.',
    },
    {
      section: 'History & Story',
      content: 'How the organization started, major milestones, and the journey of the publication.',
      importance: 'Adds depth, shows longevity (if applicable), and makes the brand feel more "human."',
    },
    {
      section: 'Editorial Standards & Ethics',
      content: 'A summary or link to your code of conduct, correction policy, and how you handle sourcing/anonymity.',
      importance: 'Crucial for a news site. It demonstrates transparency and a commitment to fact-checking and accountability.',
    },
    {
      section: 'The Team',
      content: 'Profiles (with photos!) of key leadership, editors, and prominent journalists.',
      importance: 'Puts a face to the work, establishing expertise and accountability. It\'s often where readers look to see who is behind the news.',
    },
    {
      section: 'Funding & Ownership',
      content: 'Clear disclosure about who owns your company and how you make money (subscriptions, advertising, grants, etc.).',
      importance: 'Essential for transparency to guard against perceived bias or influence.',
    },
    {
      section: 'Contact & Feedback',
      content: 'Separate, clear ways for people to: submit a news tip, report an error, contact an editor, or inquire about advertising.',
      importance: 'Shows you are open and accessible to the community you serve.',
    },
    {
      section: 'Recognition',
      content: 'Any major awards, accolades, or community partnerships.',
      importance: 'Builds immediate external credibility and social proof.',
    },
  ];

 
  return (
   
    <div className="about-sections-container">
      <table className="about-sections-table">
      <thead>
        <tr>
          <th>Section</th>
          <th>What to Put In It</th>
          <th>Why It Matters</th>
        </tr>
      </thead>
      <tbody>
        {sections.map((item, index) => (
          <tr key={index}>
            <td><strong>{item.section}</strong></td>
            <td>{item.content}</td>
            <td>{item.importance}</td>
          </tr>
        ))}
      </tbody>
    </table>
   </div>
    

  )
};

export default About;