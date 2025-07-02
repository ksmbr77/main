import Script from "next/script"

export default function VSLPage() {
  return (
    <>
      <Script
        id="vturb-player-script"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            try {
              var s = document.createElement("script");
              s.src = "https://scripts.converteai.net/7e36cdf6-8f2d-4adf-9c73-eb7c42755be9/players/685f7df11360073ec94270cb/v4/player.js";
              s.async = true;
              s.onerror = function() {
                console.error('Failed to load video player script');
              };
              s.onload = function() {
                console.log('Video player loaded successfully');
              };
              document.head.appendChild(s);
            } catch (error) {
              console.error('Error loading video player:', error);
            }
          `,
        }}
      />

      <Script
        id="video-cta-delay"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            // O botão de compra aparecerá aos 31 minutos (1860 segundos)
            var delaySeconds = 1860;
            
            function initializeVideoDelay() {
              // Aguardar o player carregar completamente
              var player = document.getElementById('vid-685f7df11360073ec94270cb');
              
              if (player) {
                console.log("Video player found, setting up delay for CTA");
                
                // Usar setTimeout para mostrar CTA após 31 minutos
                setTimeout(function() {
                  var ctaElements = document.querySelectorAll('.cta-esconder');
                  ctaElements.forEach(function(el) {
                    el.style.display = 'block';
                    el.classList.remove('cta-esconder');
                    el.style.animation = 'fadeIn 0.5s ease-in';
                  });
                  console.log("CTA elements displayed after delay");
                  
                  // Adicionar rastreamento de clique no botão após aparecer
                  setupButtonTracking();
                }, delaySeconds * 1000);
              } else {
                // Retry after 1 second if player not found
                setTimeout(initializeVideoDelay, 1000);
              }
            }
            
            // Função para configurar rastreamento do botão
            function setupButtonTracking() {
              var buyButton = document.querySelector('a[href*="pay.hotmart.com"]');
              if (buyButton) {
                buyButton.addEventListener('click', function(e) {
                  console.log('Buy button clicked - tracking conversion');
                  
                  // Rastrear para todos os pixels
                  if (typeof fbq !== 'undefined') {
                    fbq('track', 'InitiateCheckout', {
                      content_name: 'Protocolo Remolacha',
                      content_category: 'Health Product',
                      value: 97.00,
                      currency: 'USD'
                    });
                    
                    fbq('track', 'Purchase', {
                      content_name: 'Protocolo Remolacha',
                      content_category: 'Health Product', 
                      value: 97.00,
                      currency: 'USD'
                    });
                    
                    console.log('Facebook Pixel events fired: InitiateCheckout and Purchase');
                  }
                });
                console.log('Button tracking setup complete');
              } else {
                console.log('Buy button not found for tracking');
              }
            }
            
            // Add CSS for fade in animation
            var style = document.createElement('style');
            style.textContent = \`
              @keyframes fadeIn {
                from { opacity: 0; transform: translateY(20px); }
                to { opacity: 1; transform: translateY(0); }
              }
              vturb-smartplayer {
                display: block !important;
                width: 100% !important;
                height: 100% !important;
              }
            \`;
            document.head.appendChild(style);
            
            // Initialize when DOM is ready
            if (document.readyState === 'loading') {
              document.addEventListener('DOMContentLoaded', initializeVideoDelay);
            } else {
              initializeVideoDelay();
            }
          `,
        }}
      />

      <Script
        id="meta-pixel-1"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            !function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window, document,'script','https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '1064652811780217');
            fbq('track', 'PageView');
          `,
        }}
      />

      <Script
        id="meta-pixel-2"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            !function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window, document,'script','https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '24289688470655165');
            fbq('track', 'PageView');
          `,
        }}
      />

      <Script
        id="meta-pixel-3"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            !function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window, document,'script','https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '2520220835010003');
            fbq('track', 'PageView');
          `,
        }}
      />

      <noscript>
        <img
          height="1"
          width="1"
          style={{ display: "none" }}
          src="https://www.facebook.com/tr?id=1064652811780217&ev=PageView&noscript=1"
          alt=""
        />
        <img
          height="1"
          width="1"
          style={{ display: "none" }}
          src="https://www.facebook.com/tr?id=24289688470655165&ev=PageView&noscript=1"
          alt=""
        />
        <img
          height="1"
          width="1"
          style={{ display: "none" }}
          src="https://www.facebook.com/tr?id=2520220835010003&ev=PageView&noscript=1"
          alt=""
        />
      </noscript>

      <div className="min-h-screen bg-white">
        <div className="container mx-auto px-3 md:px-4 py-4 md:py-8 max-w-4xl">
          {/* Main Headline */}
          <div className="text-center mb-8">
            <h1
              className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight mb-4 md:mb-6 px-2"
              style={{ color: "#111" }}
            >
              El secreto para controlar tu azúcar de noche — que las grandes farmacéuticas preferirían mantener{" "}
              <span style={{ color: "#E63946" }}>oculto</span>.
            </h1>

            <p className="text-base md:text-lg lg:text-xl mb-6 md:mb-8 leading-relaxed px-2" style={{ color: "#555" }}>
              Un simple hábito casero que ayuda a tu hígado a liberar menos azúcar mientras duermes —{" "}
              <span style={{ color: "#3B82F6" }}>sin pastillas</span> ni efectos secundarios.
            </p>
          </div>

          {/* Video Section */}
          <div className="flex justify-center mb-8 md:mb-12 px-2">
            <div className="w-full max-w-3xl">
              <div className="relative bg-black rounded-lg overflow-hidden shadow-xl md:shadow-2xl">
                <div className="video-container" style={{ margin: "0 auto", width: "100%" }}>
                  <div style={{ padding: "56.25% 0 0 0", position: "relative" }} className="video-aspect-ratio">
                    <vturb-smartplayer
                      id="vid-685f7df11360073ec94270cb"
                      style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100%",
                        display: "block",
                        margin: "0 auto",
                        borderRadius: "8px",
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Section - Hidden initially, shown after 31 minutes */}
          <div className="cta-esconder" style={{ display: "none" }}>
            <div className="text-center mb-8 md:mb-12 px-2">
              <div className="bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl p-6 md:p-8 shadow-2xl max-w-2xl mx-auto">
                <div className="text-white">
                  <a
                    href="https://pay.hotmart.com/A100534018K"
                    className="inline-block w-full md:w-auto"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button className="w-full md:w-auto bg-green-500 hover:bg-green-600 text-white font-bold text-xl md:text-2xl py-4 px-8 md:px-12 rounded-xl shadow-lg transform hover:scale-105 transition-all duration-300 border-2 border-green-400">
                      ¡Quiero Comprar Ahora!
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* University References */}
          <div className="text-center space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mt-8 md:mt-12 px-2">
              <div className="text-center p-4 md:p-6 bg-blue-50 rounded-lg border border-blue-100">
                <div className="text-2xl md:text-3xl mb-2 md:mb-3">🎓</div>
                <h3 className="font-semibold text-blue-800 mb-1 md:mb-2 text-sm md:text-base">Harvard Medical</h3>
                <p className="text-blue-600 text-xs md:text-sm">Estudios confirman la efectividad del método</p>
              </div>

              <div className="text-center p-4 md:p-6 bg-blue-50 rounded-lg border border-blue-100">
                <div className="text-2xl md:text-3xl mb-2 md:mb-3">🏥</div>
                <h3 className="font-semibold text-blue-800 mb-1 md:mb-2 text-sm md:text-base">Mayo Clinic</h3>
                <p className="text-blue-600 text-xs md:text-sm">Investigación respalda los resultados</p>
              </div>

              <div className="text-center p-4 md:p-6 bg-blue-50 rounded-lg border border-blue-100">
                <div className="text-2xl md:text-3xl mb-2 md:mb-3">🔬</div>
                <h3 className="font-semibold text-blue-800 mb-1 md:mb-2 text-sm md:text-base">Stanford University</h3>
                <p className="text-blue-600 text-xs md:text-sm">Validación científica del protocolo</p>
              </div>
            </div>

            <div className="mt-8 md:mt-12 flex justify-center px-2">
              <div className="bg-green-50 border-2 border-green-200 rounded-xl p-6 md:p-8 max-w-sm md:max-w-md text-center w-full">
                <div className="text-3xl md:text-4xl mb-3 md:mb-4">🛡️</div>
                <h3 className="text-lg md:text-xl font-bold text-green-800 mb-2">Garantía de 60 Días</h3>
                <p className="text-green-700 text-sm leading-relaxed">
                  Si no ves resultados en los primeros 60 días, te devolvemos el 100% de tu dinero. Sin preguntas.
                </p>
                <div className="mt-3 md:mt-4 text-xs text-green-600 font-medium">
                  ✓ Garantía Total • ✓ Sin Riesgo • ✓ 100% Seguro
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
