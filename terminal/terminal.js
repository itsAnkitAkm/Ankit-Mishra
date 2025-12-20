const output = document.getElementById("output");
const typed = document.getElementById("typed");

let buffer= "";

document.addEventListener("keydown", (e)=>{

    if(e.key === "Backspace"){
        buffer = buffer.slice(0,-1);
        typed.textContent= buffer;
        return;
    }

        if(e.key === "Enter"){
        const cmd = buffer.trim().toLowerCase();
        printLine(`ankit@dev:~/portfolio$ ${buffer}`)
        handleCommand(cmd);
        buffer = "";
        typed.textContent= "";
        return;
    }

    if(e.key.length === 1){
        buffer+= e.key;
        typed.textContent= buffer;
    }
});

function printLine(text){
    const div = document.createElement("div");
    div.className= "line";
    div.textContent= text;
    output.appendChild(div);

    output.scrollTop = output.scrollHeight;
}

function handleCommand(input) {
  if (!input) return;

  const parts = input.split(" ");
  const cmd = parts[0];
  const args = parts.slice(1);

  if (commands[cmd]) {
    commands[cmd](args);
  } else {
    printLine(`ankit-shell: ${cmd}: command not found`);
  }
}

const commands = {

  help: () => {
    printLine("Available commands:");
    printLine("about        → who I am");
    printLine("mindset      → how I think");
    printLine("work         → what I build");
    printLine("projects     → selected work");
    printLine("stack        → tools I use");
    printLine("contact      → reach me");
    printLine("clear        → clear screen");
    printLine("exit         → close terminal");
  },

  projects: () => {
    printLine("PROJECTS");
    printLine("--------------------------------------------------------------------");
    printLine("->Flavour Fusion                MERN stack food-ordering platform");
    printLine("");
    printLine("->Acurco – Monocular Distance Estimation");
    printLine("                                C++ • Python • OpenCV");
    printLine("                                Depth estimation using single camera");
    printLine("");
    printLine("->Shipment Microservice          NestJS • Kafka • AWS");
    printLine("                                Event-driven logistics backend");
    printLine("");
    printLine("->Flights Ops App                React Native • NestJS • AWS • MAVLink");
    printLine("                                Real-time flight operations & mission handling");
    printLine("");
    printLine("->Precision Landing System       C++ • Python • MAVLink • OpenCV • ArduPilot");
    printLine("                                Autonomous drone precision landing system");
    printLine("");
    printLine("...and more.");
  },

  stack: () => {
    printLine("STACK");
    printLine("--------------------------------------------------------------------");

    printLine("Languages:");
    printLine("  C++ | JavaScript | TypeScript | Python");
    printLine("");

    printLine("Frameworks:");
    printLine("  Node.js | NestJS | React.js | React Native");
    printLine("");

    printLine("Databases:");
    printLine("  MySQL | MongoDB");
    printLine("");

    printLine("Tools & Infra:");
    printLine("  Kafka | Redis | Docker | AWS | Linux");
    printLine("");

    printLine("Approach:");
    printLine("  I focus on building reliable, scalable, and maintainable systems.");
  },

  about: () => {
    printLine("I’m Ankit — a software engineer who enjoys building systems");
    printLine("that work reliably in the real world. Curiosity drives most");
    printLine("of what I build, and clarity matters more to me than cleverness.");
  },

  mindset: () => {
    printLine("Engineering Principles:");
    printLine("- Clarity over cleverness");
    printLine("- Fundamentals over hype");
    printLine("- Systems > scripts");
    printLine("- Fail gracefully");
    printLine("- Keep learning");
  },

  work: () => {
    printLine("I like working on:");
    printLine("- backend systems");
    printLine("- real-time services");
    printLine("- performance optimization");
    printLine("- reliable & maintainable architectures");
    printLine("- aviation & drone engineering systems");
  },

  contact: () => {
    printLine("Email:    itsamkankit@gmail.com");
    printLine("LinkedIn: linkedin.com/in/itsankitakm");
    printLine("GitHub:   github.com/itsAnkitAkm");
  },

  clear: () => {
    output.innerHTML = "";
  },

  exit: () => {
    printLine("Closing session...");
    // We'll later wire this to close the popup modal
  }
};


window.onload = () => {
  window.focus();
};
