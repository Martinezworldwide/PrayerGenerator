const prayerParts = {
  protection: {
    intro: ["Heavenly Father, my refuge and fortress,", "Lord, shield me from all harm,"],
    verse: ["Psalm 91:4 - 'He will cover you with his feathers, and under his wings you will find refuge.'"],
    body: ["Protect me from the traps of the enemy and the darkness that surrounds me."],
    closing: ["In the name of Jesus, Amen.", "Cover me in Your precious blood, Lord. Amen."]
  },
  gratitude: {
    intro: ["Gracious God,", "Lord of all blessings,"],
    verse: ["1 Thessalonians 5:18 - 'Give thanks in all circumstances; for this is God’s will for you in Christ Jesus.'"],
    body: ["Thank You for all You've provided, even the unseen things."],
    closing: ["With a grateful heart, Amen.", "Forever thankful, Amen."]
  },
  healing: {
    intro: ["Divine Healer,", "Merciful God,"],
    verse: ["Jeremiah 30:17 - 'I will restore you to health and heal your wounds, declares the Lord.'"],
    body: ["Heal my body, soul, and spirit. Restore what has been broken."],
    closing: ["By Your stripes I am healed. Amen.", "Bring peace to my body and spirit. Amen."]
  },
  warfare: {
    intro: ["Mighty Warrior King,", "God of Angel Armies,"],
    verse: ["Ephesians 6:11 - 'Put on the full armor of God, so that you can take your stand against the devil’s schemes.'"],
    body: ["I rebuke every dark force that comes against me. I declare victory in Jesus' name."],
    closing: ["The battle is Yours, Lord. Amen.", "I stand firm in faith and fire. Amen."]
  },
  guidance: {
    intro: ["Wise and Loving Father,", "My Shepherd and Light,"],
    verse: ["Proverbs 3:5-6 - 'Trust in the Lord with all your heart and lean not on your own understanding.'"],
    body: ["Show me the path to take today. Let Your Spirit lead me in truth."],
    closing: ["I trust Your direction. Amen.", "Guide my steps, Lord. Amen."]
  }
};

function generatePrayer() {
  const theme = document.getElementById("theme").value;
  const parts = prayerParts[theme];
  
  const prayer = `
    <div class="prayer-box">
      <p>${random(parts.intro)}</p>
      <p><em>${random(parts.verse)}</em></p>
      <p>${random(parts.body)}</p>
      <p>${random(parts.closing)}</p>
    </div>
  `;

  document.getElementById("prayer-output").innerHTML = prayer;
}

function random(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}
