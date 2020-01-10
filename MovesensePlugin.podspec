
  Pod::Spec.new do |s|
    s.name = 'MovesensePlugin'
    s.version = '0.0.1'
    s.summary = 'Movesense plugin'
    s.license = 'MIT'
    s.homepage = 'git+https://github.com/Reiss-Cashmore/capacitor-movesense-plugin'
    s.author = 'Reiss Cashmore'
    s.source = { :git => 'git+https://github.com/Reiss-Cashmore/capacitor-movesense-plugin', :tag => s.version.to_s }
    s.source_files = 'ios/Plugin/**/*.{swift,h,m,c,cc,mm,cpp}'
    s.ios.deployment_target  = '11.0'
    s.dependency 'Capacitor'
  end