export function RemitaceLogo({ className = "" }: { className?: string }) {
  return (
    <div
      className={`relative ${className}`}
      style={{
        width: "280px",
        height: "63.1px",
      }}
    >
      {/* Red "R" section */}
      <div
        style={{
          position: "absolute",
          width: "66.69px",
          height: "63.1px",
          left: "0px",
          top: "0px",
          background: "#C80013",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#FFFFFF",
          fontSize: "36px",
          fontWeight: "bold",
        }}
      >
        R
      </div>

      {/* "Remitace" text with white background */}
      <div
        style={{
          position: "absolute",
          width: "206.64px",
          height: "37.71px",
          left: "79.07px",
          top: "0.91px",
          background: "#FFFFFF",
          display: "flex",
          alignItems: "center",
          paddingLeft: "8px",
          color: "#000000",
          fontSize: "24px",
          fontWeight: "bold",
        }}
      >
        emitace
      </div>

      {/* "Empowering Global Transactions" tagline */}
      <div
        style={{
          position: "absolute",
          width: "201px",
          height: "17px",
          left: "79px",
          top: "47.26px",
          fontFamily: "Avenir, -apple-system, BlinkMacSystemFont, sans-serif",
          fontStyle: "normal",
          fontWeight: 300,
          fontSize: "14.5652px",
          lineHeight: "120%",
          textAlign: "right",
          letterSpacing: "-0.03em",
          color: "#FFFFFF",
        }}
      >
        Empowering Global Transactions
      </div>
    </div>
  )
}
